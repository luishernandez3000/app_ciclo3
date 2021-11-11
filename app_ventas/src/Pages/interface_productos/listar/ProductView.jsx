import react from "react";
import './style.css';
import ProductSearch from "./ProductSearch";
import ProductList from "./ProductList";
import ProductForm from "../registrar/ProductForm";
import Header from "Components/Header";

class ProductView extends react.Component {
  
  state = {
    selectedProduct: {
      id: null,
      precio: null,
      estado: null,
      descripcion: null
    }
  }

  editar = (product, e) =>{
    this.setState({ selectedProduct: product });
    console.log(product);
  }

  render() {
    if(this.state.selectedProduct.id === null){
      return (
        <div>
          <Header/>
          <div id="container">
            <ProductSearch/>
            <ProductList editar={this.editar}/>
          </div>
        </div>
      );
    }
    return(
      <ProductForm selectedProduct={this.state.selectedProduct}/>
    )
  }
}

export default ProductView;