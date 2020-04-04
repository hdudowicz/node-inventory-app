const Joi = require('joi');
const db = require('./connection');
 
const schema = Joi.object().keys({
    _id: Joi.string(),
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

function update(item) {
    if (!item._id) create(item);

    const result = Joi.validate(item, schema);
    if (result.error == null) {
        item.created = new Date();
        return items.findOneAndUpdate({ _id: item._id }, { $set: item }).then((updatedDoc) => {})
        // return db.collection('items').findOneAndReplace(
        //     { _id: item._id },
        //     item
        // )
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    update,
    getAll
};