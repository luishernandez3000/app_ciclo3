import react from "react";

class ProductDescription extends react.Component {
  constructor(props){
    super(props);
    this.state = {inputText : this.props.value};

    this.onInputChange = this.onInputChange.bind(this);
  }

 onInputChange(e){
    this.setState({inputText: e.target.value});
  }

  render() {
    return (
      <div>
          <label htmlFor={this.props.name} className="center block">
              {this.props.name}
          </label>
            <textarea name={this.props.name} id={this.props.name} rows="5" form="registroProducto" 
              placeholder="Ingrese una descripción del producto." 
              className="center block"
              value={this.state.inputText}
              onChange={this.onInputChange}>
              </textarea>
      </div>
    );
  }
}

export default ProductDescription;