import react from "react";
import Product from "./Product";
import listaProductos from "./listaProductos";

class ProductList extends react.Component {
  
  state = {
    listaComponentes: listaProductos.map((producto, index)=>{
      return(
        <Product 
          key={index}
          product = {producto}
          editar={this.props.editar}/>
      )
    })
  }

  render() {
    return (
      <div id="product-list">
        {this.state.listaComponentes}
      </div>
    );
  }
}

export default ProductList;