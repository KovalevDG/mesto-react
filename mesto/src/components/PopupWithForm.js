import React from 'react';
import Popup from './Popup';
import Form from './Form';
import Input from './Input';
import Button from './Button';

class PopupWithForm extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {

      return (
         <>
            <Popup name={this.props.name} title={this.props.title} isOpen={this.props.isOpen} onClose={this.props.onClose}>
               <Form name={this.props.name}>
                  {  
                     this.props.featuresInputForm.inputs.map((input) => {
                        return (<Input key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} />)
                     })                       
                  }
                  <Button submitText={this.props.featuresInputForm.submitText} />
               </Form>
            </Popup>
         </>
      );
   }
}

export default PopupWithForm;