// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // foreignKey: 'reader_id',
});

// Categories have many Products
Category.hasMany(Product, {
  // foreignKey: 'reader_id',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  foreignKey: 'ProductTag',
})
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Tags, {
  foreignKey: 'ProductTag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
