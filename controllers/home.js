const ItemList = require('../models/ItemList'); // referencing our model from the itemList.js file in models

module.exports = {
    getIndex: async (req, res) => { // gets home page
        try {
            const items = await ItemList.find(); // return all of the items in ItemList collection from mongodb
            res.render('index.ejs', { itemList: items }); // renders the home page, and sending the entire collection of items in a bundle to render inside of ejs. itemList here is equal to const itemList = items. It's just the name you'll be referencing in your views to get the items collection from DB
        } catch (err){
            if (err) return res.status(500).send(err); // if we get an error it will display in the browser
        }
    }, 
    createItem: async (req, res) => { // creates a new item in the DB
        const newItem = new ItemList( 
            {
                textinput: req.body.textinput, //  looks in the request body and grabs that info and assigns it to this new item. This is why its important to give our inputs names, check index.ejs
                numinput: req.body.numinput
            })
        try {
            await newItem.save(); // save the new item to the DB
            console.log(newItem);
            res.redirect('/'); // reloading the homepage once the new item is saved and added to DB
        } catch (err) {
            if (err) res.status(500).send(err);
            res.redirect('/');
        }
    }, 


}