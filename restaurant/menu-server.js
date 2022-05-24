import express from 'express'
let app = express()

app.get("/menu", function(req,res){
    const menu={
        appetizers:[
            {tizer:{
             name: 'Crispy Brussels',
             description: 'chipotle honey + pickled red onion + carrot purée + ancho-spiced pepitas',
             price: 10.00,
            }},
            {tizer:{
                name: 'Jalapeño Cheddar Cornbread',
                description: 'whipped butter + sea salt + honey',
                price: 9.00
             }},
            {tizer:{
                name:'Bocadillos',
                description: 'your choice of shrimp or grilled chicken withroasted corn, peppers, onions, tomatoes and cheese, wrapped in a flour tortilla, fried to golden perfection served with lettuce, sour cream, and guacamole',
                price: 13.00
            }},
            {tizer:{
                name: 'Grilled Nachos',
                description: 'tortilla chips topped with cheese, onions, tomatoes, refried beans, lettuce, sour cream and guacamole, + your choice of steak, shrimp or grilled chicken',
                price: 14.00
            }}
        ],
        entrees:[
             {ent:{
                name: 'Steak au Poivre',
                description: 'Filet medallions finished in a peppercorn and brandy cream demi glace. With garlic whipped potatoes and broccoli.',
                price: 32.00
            }},
             {ent:{
                name: '"Hong Kong Style" Sea Bass',
                description: 'Steamed with sweet sesame soy sauce, sauteed spinach and toasted sesame seeds.',
                price: 36.00
            }},
             {ent:{
                name: 'Bistro Chicken',
                description: 'Panko-crusted, parmesan cheese, lemon caper sauce, with garlic whipped potatoes and broccoli.',
                price: 21.00
            }},
            {ent:{
                name: 'Ahi Tuna',
                description: 'Raw. Pan-seared with soy ginger sherry sauce and sauteed spinach.',
                price: 29.00
            }}
    ]}
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(menu)
})


app.listen(3001)