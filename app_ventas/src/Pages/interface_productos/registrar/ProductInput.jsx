import react from "react";

class ProductInput extends react.Component {
  constructor(props){
    super(props);
    this.state = {inputText : this.props.value};

    this.onInputChange = this.onInputChange.bind(this);
  }

  isDisabled = this.props.value !== "" && this.props.type === "text" ? true : false;

 onInputChange(e){
    this.setState({inputText: e.target.value});
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name} className="center block">{this.props.name}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.name}
          className="center block field"
          value={this.state.inputText}
          onChange={this.onInputChange}
          disabled = {this.isDisabled}
        />
      </div>
    );
  }
}

export default ProductInput;