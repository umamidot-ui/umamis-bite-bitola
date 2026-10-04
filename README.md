# Umami Fusion Frontend

Create the initial frontend for a professional restaurant ordering website called:



UMAMI'S SUSHI & BURRITO



Location:

Bitola, North Macedonia



Currency:

MKD / ден



This is Stage 1 of a larger application. Focus on creating an excellent frontend and DO NOT yet implement the database, authentication, payments or complicated backend.



The final application will eventually have approximately 100 products, customer ordering, pickup, home delivery and a secure admin panel.



BRAND



Restaurant:

UMAMI'S SUSHI & BURRITO



Concept:

Modern Japanese + Mexican fusion restaurant.



Main food categories:



- Sushi

- Burritos

- Quesadillas

- Salads

- Burrito Bowls

- Summer Rolls

- Pork

- Sides

- Sauces

- Extras

- Drinks



Design direction:



- Modern

- Premium

- Fresh

- Healthy

- Appetizing

- Japanese/Mexican fusion

- Mobile-first



Do NOT make it look like a generic AI-generated restaurant template.



LANGUAGE



Primary interface language:

Macedonian



Use Macedonian UI text.



Structure the application so English can easily be added later.



Examples:



Мени

Нарачај

Кошничка

Додај во кошничка

Достава

Подигнување

Вкупно

Цена

Потврди нарачка



PAGES



Create:



/

Home



/menu

Full menu



/menu/burritos

Burritos



/menu/sushi

Sushi



/menu/salads

Salads



/menu/bowls

Bowls



/product/:id

Product details



/cart

Shopping cart



/checkout

Checkout placeholder for Stage 2



HOME PAGE



Create:



1. Header



Logo/name:

UMAMI



Navigation:

Мени

За нас

Контакт



Cart icon.



Mobile hamburger menu.



2. Hero



Large premium food image.



Text:



UMAMI'S

SUSHI & BURRITO



Japanese + Mexican Fusion



Button:



НАРАЧАЈ СЕГА



3. Categories



Show attractive category cards:



Sushi

Burritos

Bowls

Salads

Quesadillas



4. Popular products



Create 8 realistic placeholder products based on the Umami concept.



Examples:



Chipotle Chicken Burrito

Buffalo Chicken Burrito

Wasabi Burrito

Asian Salad

Chipotle Bowl

Teriyaki Bowl

Tre Formaggi Quesadilla

Summer Rolls



Clearly structure these as temporary frontend data which will later be replaced with Supabase data.



5. Why Umami



Fresh ingredients

Fast preparation

Pickup available

Home delivery



6. Footer



UMAMI'S SUSHI & BURRITO

Bitola, North Macedonia



Phone:

+389 78 720 777



MENU



Create an attractive menu grid.



Each product card:



Image

Product name

Description

Price in MKD

Category

Bestseller badge where appropriate

Add button



Example:



Chipotle Chicken Burrito



Пилешко, ориз, зеленчук и chipotle сос.



390 ден



Use realistic sample MKD prices, but make it obvious in the code that these are temporary values.



PRODUCT PAGE



Create:



Large image

Name

Description

Ingredients

Price



Customization area placeholder.



For now display:



Избери додатоци



with sample options:



Екстра сирење +30 ден

Гвакамоле +50 ден

Екстра пилешко +80 ден



These will become database-driven in Stage 2.



Quantity selector.



ДОДАЈ ВО КОШНИЧКА



CART



Create a functional frontend cart.



Show:



Product

Customization

Quantity

Price

Subtotal



Buttons:



+ 



- 



Отстрани



Вкупно



Continue shopping



Продолжи кон нарачка



Persist the cart during the browser session.



DESIGN



Use React + TypeScript + Tailwind.



Use reusable components.



Create:



Header

Footer

ProductCard

CategoryCard

CartItem

Button

Modal

ProductCustomization



Use responsive design.



Prioritize:



360px mobile

390px mobile

412px mobile

768px tablet

1024px desktop

1440px desktop



The mobile experience is extremely important.



IMPORTANT



Do NOT add:



Stripe

PayPal

Online payment

Customer accounts

Complex backend

Admin panel yet



Those will be implemented in later stages.



Build clean, reusable code because this project will be expanded significantly.



The result should look like a real premium restaurant ordering website, not a prototype.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ff21ad4e-bef6-43e5-b63e-546976a05f25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
