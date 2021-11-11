import react from "react";
import editarImg from "../../../Imagenes/editProduct.png";


class Product extends react.Component {
  render() {

    let product = this.props.product;

    return (
      <div class="producto">
        <button onClick={this.props.editar.bind(this, product)}>
          <img alt="" src={editarImg} width="25px" title="Editar producto" />
        </button>
        <p>{product.id}</p> 
        <span>Precio ${product.precio}</span>
        <p>{product.estado}</p>
        <p>{product.descripcion}</p>
      </div>);
/*    return<div>
      <h1>No existen datos de productos</h1>
    </div>
*/    
  }
}

export default Product;
