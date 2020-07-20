const router = require('express').Router();
const mysql = require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'alanvang',
    database: 'goatJohnson_db'
  })

router.get('/products',(req,res)=>{
  connection.query('SELECT Products.product_name, Prices.price , Products.URL FROM Products INNER JOIN Prices ON Products.product_id = Prices.product_id;', function (err, data){
    if(err){
      throw err
    }
    
      res.send(data)
      console.log(err)
    
  })
})

module.exports = router


  