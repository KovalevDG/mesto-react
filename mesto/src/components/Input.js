import React from "react";

class Input extends React.Component {
   // constructor(props) {
   //    super(props);
   // }

   render() {
      return (
         <>
            <input className="popup__input form__input" type="text" id={this.props.inputId} name={this.props.inputName} placeholder={this.props.inputPlaceholder} required minLength="2" maxLength="40" />
            <span className="form__input-error" id={`${this.props.inputId}-error`} ></span>
         </>
      );

   }
}

export default Input;