import React from "react";

class Input extends React.Component {

   render() {
      // console.log(this.props.inputValue);
      return (
         <>
            <input className="popup__input form__input" type="text" id={this.props.inputId} name={this.props.inputName} placeholder={this.props.inputPlaceholder} required minLength="2" maxLength="40" value={this.props.inputValue[this.props.inputName]} onChange={this.props.onChange} />
            <span className="form__input-error" id={`${this.props.inputId}-error`} ></span>
         </>
      );

   }
}

export default Input;