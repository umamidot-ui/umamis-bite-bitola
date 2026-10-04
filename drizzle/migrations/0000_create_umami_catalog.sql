CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_mk text NOT NULL,
  name_en text,
  slug text NOT NULL UNIQUE,
  description_mk text,
  image_url text,
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.categories TO anon, authenticated;
GRANT ALL ON public.categories TO service_role;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public reads active categories" ON public.categories FOR SELECT TO anon, authenticated USING (active = true);

CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  name_mk text NOT NULL,
  name_en text,
  slug text NOT NULL UNIQUE,
  description_mk text,
  description_en text,
  ingredients_mk text,
  ingredients_en text,
  price numeric(10,2) NOT NULL CHECK (price >= 0),
  image_url text,
  available boolean NOT NULL DEFAULT true,
  bestseller boolean NOT NULL DEFAULT false,
  vegetarian boolean NOT NULL DEFAULT false,
  vegan boolean NOT NULL DEFAULT false,
  spicy boolean NOT NULL DEFAULT false,
  preparation_minutes integer CHECK (preparation_minutes IS NULL OR preparation_minutes > 0),
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.products TO anon, authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public reads available products" ON public.products FOR SELECT TO anon, authenticated USING (available = true AND EXISTS (SELECT 1 FROM public.categories c WHERE c.id = category_id AND c.active = true));
CREATE INDEX products_category_sort_idx ON public.products(category_id, sort_order) WHERE available = true;

CREATE TABLE public.option_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_mk text NOT NULL,
  name_en text,
  required boolean NOT NULL DEFAULT false,
  min_selections integer NOT NULL DEFAULT 0 CHECK (min_selections >= 0),
  max_selections integer NOT NULL DEFAULT 1 CHECK (max_selections >= min_selections),
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.option_groups TO anon, authenticated;
GRANT ALL ON public.option_groups TO service_role;
ALTER TABLE public.option_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public reads active option groups" ON public.option_groups FOR SELECT TO anon, authenticated USING (active = true);

CREATE TABLE public.options (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  option_group_id uuid NOT NULL REFERENCES public.option_groups(id) ON DELETE CASCADE,
  name_mk text NOT NULL,
  name_en text,
  additional_price numeric(10,2) NOT NULL DEFAULT 0 CHECK (additional_price >= 0),
  available boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.options TO anon, authenticated;
GRANT ALL ON public.options TO service_role;
ALTER TABLE public.options ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public reads available options" ON public.options FOR SELECT TO anon, authenticated USING (available = true AND EXISTS (SELECT 1 FROM public.option_groups g WHERE g.id = option_group_id AND g.active = true));

CREATE TABLE public.product_option_groups (
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  option_group_id uuid NOT NULL REFERENCES public.option_groups(id) ON DELETE CASCADE,
  PRIMARY KEY (product_id, option_group_id)
);
GRANT SELECT ON public.product_option_groups TO anon, authenticated;
GRANT ALL ON public.product_option_groups TO service_role;
ALTER TABLE public.product_option_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public reads product option mappings" ON public.product_option_groups FOR SELECT TO anon, authenticated USING (EXISTS (SELECT 1 FROM public.products p WHERE p.id = product_id AND p.available = true) AND EXISTS (SELECT 1 FROM public.option_groups g WHERE g.id = option_group_id AND g.active = true));

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER option_groups_updated_at BEFORE UPDATE ON public.option_groups FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER options_updated_at BEFORE UPDATE ON public.options FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();