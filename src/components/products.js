import React from 'react'


 export default class Product extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      products: [],
      error : false
    }
  }
componentDidMount(){
  fetch('http://localhost:3006/api/products')
  .then((res)=> res.json())
  .then(
    (data) => {
      this.setState({
        products: data
      })
    }
    
    
  )
}
    
     render(){
       const {products} = this.state;
     return(
         <>

      <div class="w3-container">
        {products.map((products) => (
           <div class="w3-card-4">
           <img src={products.URL} alt="Alps" />
           <div class="w3-container w3-center">
            <p>{products.product_name}</p>
            <p className ="w3-center">${products.price}</p>
             </div>
        
            </div>

        ))}

        
        </div>
        
      </>
     )
     }

}