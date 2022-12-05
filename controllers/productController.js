const Product = require('../models/Product')

const productsControllers = {

    getProducts: async (req, res) => {
    
        let query = {};
    
        if (req.query.type) {
          query.model = req.query.model;
        }
    
        let products = await Product.find(query);
    
        try {
          if (products) {
            res.status(200).json({
              message: "you get all the products",
              response: products,
              success: true,
            });
          } else {
            res.status(404).json({
              message: "could't find all the products",
              success: false,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
    
      createProduct: async(req,res)=>{
		
		try {
			let result = await validator.validateAsync(req.body)
			console.log(result);

			let product = await new Product(req.body).save()
			res.status(201).json({
				massage: 'product created',
				success:true,
				response: product
			})      
			
		}catch (error) {
			console.log(error)
			res.status(400).json({
				message: error.message,
				success: false
		})
  }},

  updateProduct: async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    let productUp;

    try {
      productUp = await Product.findByIdAndUpdate(id, product);

      if (productUp) {
        res.status(200).json({
          message: "update successfully",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "update failed",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: "error",
        success: false,
      });
    }
  },

  deleteProduct: async (req, res) => {
    const id = req.params.id;

    try {
      let deleted = await Product.findByIdAndDelete({ _id: id });
      if (deleted) {
        res.status(200).json({
          message: "Item deleted successfully",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Item deleted failed",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        message: "error",
        success: false,
      });
    }
  },

}

module.exports = productsControllers;
