import react from "react";
import buscarImg from "../../../Imagenes/search.png";

class ProductSearch extends react.Component {
  render() {
    return (
      <div>
          <form action="">
            <span id="buscador">
                <input type="text" name="buscador" placeholder="Buscar productos"/>
                <button type="submit" id="buscar-btn"><img alt="" src={buscarImg} width="11px" /></button>
            </span>
        </form>
      </div>
    );
  }
}

export default ProductSearch;
