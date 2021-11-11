import react from "react";


class ProductState extends react.Component {
  constructor(props){
    super(props);
    this.state = {value : this.props.value};

    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(e){
    this.setState({value: e.target.value});
  }

  render() {
    return (
    <div>
        <label htmlFor={this.props.name} className="center block">{this.props.name}</label>
        <select name={this.props.name} id={this.props.name} className="center block field" 
          value={this.state.value} 
          onChange={this.handleChange}>
            <option value="Disponible">Disponible</option>
            <option value="No disponible">No disponible</option>
        </select>
    </div>
    );
  }
}

export default ProductState;
