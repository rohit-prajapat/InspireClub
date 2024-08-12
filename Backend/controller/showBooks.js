const BooksModule = require('../model/bookmodel')
const showBooks = async (req, res) => {
    try {
        const dataBooks = await BooksModule.find();
        console.log('Show books called:', dataBooks);
        res.json(dataBooks);
    } catch (error) {
        console.error('Error retrieving books:', error);
        console.log('eror is here : ',error)
        res.status(500).json({ message: 'Failed to retrieve books' });
    }
};

module.exports = showBooks;