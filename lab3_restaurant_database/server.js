require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Restaurant = require('./models/restaurant');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API 1: Get all restaurant details
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API 2: Get restaurants by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const cuisineType = req.params.cuisine;
        const restaurants = await Restaurant.find({ cuisines: cuisineType });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API 3: Get sorted restaurants by restaurant_id
app.get('/restaurants', async (req, res) => {
    try {
        const sortBy = req.query.sortBy === 'ASC' ? 1 : -1;
        const restaurants = await Restaurant.find({}, { _id: 0, cuisines: 1, name: 1, city: 1, restaurant_id: 1 })
            .sort({ restaurant_id: sortBy });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API 4: Get Delicatessen restaurants (not in Brooklyn)
app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ 
            cuisines: "Delicatessen",
            city: { $ne: "Brooklyn" }
        }, { _id: 0, cuisines: 1, name: 1, city: 1 })
        .sort({ name: 1 });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
