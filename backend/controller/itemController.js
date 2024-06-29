const Item = require('../models/Item');
const Item = require('../models/Item');

exports.getItemDetails = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createItem = async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const newItem = new Item({ name, price, quantity });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    try {
        const item = await Item.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
