const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
router.get('/', async(req, res) => {
  try{
    const categoryData = await Category.findAll({
      include: [{model:Product}],
      // exclude: ['category_id'],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model:Product}],
    });
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory)=>{
      res.json(newCategory)
    })
    .catch((err)=>{
      res.json(err)
    })

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name:req.body.category_name,
    },
    {
      where: {
        id:req.params.id
      }
    }
  )
    .then ((updatedCategory)=> {
      res.json(updatedCategory);
    })
    .catch((err)=> res.json(err))
  })

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({
    where:{
      id:req.params.id
    }
  })
  .then((deletedCategory)=>{
    res.json(deletedCategory)
  })
  .catch((err)=> res.json(err))
});

module.exports = router;
