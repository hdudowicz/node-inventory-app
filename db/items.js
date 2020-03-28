const Joi = require('joi');
const db = require('./connection');
 
const schema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().max(500).required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    imageURL: Joi.string().required()
});
 
const items = db.get('items');
 
function getAll() {
    return items.find();
}
 function create(item) {
    if (!item.title) item.title = 'Tempor labore ullamco eu laborum';
 
    const result = Joi.validate(item, schema);
    if (result.error == null) {
        item.created = new Date();
        return items.insert(item);
    } else {
        return Promise.reject(result.error);
    }
}
 
module.exports = {
    create,
    getAll
};