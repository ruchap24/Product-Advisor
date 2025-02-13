Folder Structure

Product-Advisor/
│
├── Frontend/                  # React
│   ├── public/
│   │   ├── index.html
│   │   └── assets/         
│   ├── src/
│   │   ├── components/     
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── ProductCard.js
│   │   ├── pages/         
│   │   │   ├── Home.js
│   │   │   ├── Questionnaire.js
│   │   │   └── Results.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── README.md
│
├── Backend/                
│   ├── config/       
│   │   └── db.js    
│   ├── controllers/
│   │   └── productController.js
│   ├── models/   
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── .env            
│   ├── server.js  
│   ├── package.json
│   └── README.md
│
├── database/           
│   ├── seed/              
│   │   └── products.js
│   └── migrations/        
│
├── tests/   
│   ├── client/  
│   └── server/ 
│
├── .gitignore
├── LICENSE
├── README.md               
└── package.json            