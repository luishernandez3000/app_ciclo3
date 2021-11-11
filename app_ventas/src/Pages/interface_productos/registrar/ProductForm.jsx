import react from "react";
import './style.css';
import ProductState from "./ProductState";
import ProductInput from "./ProductInput";
import ProductDescription from "./ProductDescription";
import Header from "Components/Header";


class ProductForm extends react.Component {
  constructor(props){
    super(props);
    if(this.props.selectedProduct !== undefined){
      this.selectedProduct = this.props.selectedProduct;
    }else{
      this.selectedProduct = {
        id: "",
        precio: "",
        estado: "",
        descripcion: ""  
      }
    }
  }

  
  render() {
    return(
      <div>
        <Header>
          <div id="header" className="center">Registrar nuevo producto</div>
        </Header>

        <div id="contenedor-formulario" className="center">
          <form action="" id="registroProducto">
              <ProductInput type ="text" name="Identificador" value={this.selectedProduct.id}/>
              <ProductInput type="number" name="Precio" value={this.selectedProduct.precio}/>
              <ProductState name="Estado" value={this.selectedProduct.estado}/>
              <ProductDescription name="Descripcion" value={this.selectedProduct.descripcion}/>  
              <button id="btn-registrar" type="submit" className="center block field">Registrar</button>
          </form>
        </div>
      </div>
    );  
  }
}

export default ProductForm;