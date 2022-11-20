import React from "react";
import Form from "./Form";
import Input from "./Input";

class Popup extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className={`popup popup-${this.props.name} ${this.props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup-${this.props.name}__container`}>
               <button className={`popup__button-close popup-${this.props.name}__button-close`} type="button" onClick={this.props.onClose}></button>
               <h3 className={`popup-${this.props.name}__title`}>{this.props.title}</h3>
               {this.props.children}
            </div>
         </div>
      );
   }
}

export default Popup;