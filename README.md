# phono
ecommerce - shopify - technology

1.  Реализация каталога товаров ( мобильные телефоны, в дальнейшем другие товарные группы) с удобной навигации; 

    + В каталоге товаров для каждой группы товаров в должен работать индивидуальный фильтр. 
    + Параметры фильтрации мобильного: 
     + Color
     + Price
     + Brand
 
    Представление товаров с их характеристиками — полная информация о товаре на детальной странице, с возможностью купить; 

    Смена языка : rus / eng;

    Шаблон сайта: https://phono-demo.myshopify.com/

2. Авторизация для пользователей 
    
    Реализация процесса заказа — выбор места доставки, вида доставки, оплаты; 

3. Авторизация для администратора

    Добавление/Изменение/Удаление товаров

4. Используемые технологии

  React 
  Redux (RTK)
  CSS

  Nest.js 
  Postrgres
  Docker 
  Prisma

  Cloudinary
  Heroku



5. Для запуска приложения
Команды для запуска тестового локального сервера:
Backend: cd frontend/ -> json-server --watch db.json --port 4001
Frontend: cd frontend/ -> npm run start

Команды для запуска servera Nestjs:
Backend: cd backend/ -> npm run start:dev
         docker-compose up -d dev-db
Frontend: cd frontend/ -> npm run start

6. Plan
+ Search Bar
+ Filter
+ Sorting
+ Pagination
- Basket Redux state
- Form order fulfillment process
- GET/phones/1 detail characteristics

Admin panel 
- watch orders
- DELETE, PATCH, POST phone data

Make up pages(layout)
- Home
- Collection / Phones
- Collection / Power Bank
- About Us
- Contact Us
- Faq's
- Blog

PROD:
- DOCKER postgres HEROKU 
- DOCKER nestjs   HEROKU
- DOCKER react    HEROKU