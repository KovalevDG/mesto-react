import React from "react";

function Input(props) {
      return (
         <>
            <input className="popup__input form__input" type="text" id={props.inputId} name={props.inputName} placeholder={props.inputPlaceholder} required minLength="2" maxLength="40" value={props.inputValue[props.inputName]} onChange={props.onChange} />
            <span className="form__input-error" id={`${props.inputId}-error`} ></span>
         </>
      );
}

export default Input;