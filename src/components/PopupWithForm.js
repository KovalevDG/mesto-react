import React from 'react';
import Popup from './Popup';
import Form from './Form';
import Input from './Input';
import Button from './ButtonSubmit';

function PopupWithForm(props) {
   console.log(props.currentUser);
   return (
      <Popup name={props.name} title={props.title} isOpen={props.isOpen} onClose={props.onClose}>
         <Form name={props.name}>
            {  
               props.featuresInputForm.inputs.map((input) => {
                  return (<Input key={input.inputId} inputId={input.inputId} inputName={input.inputName} inputPlaceholder={input.inputPlaceholder} inputValue={props.currentUser} onChange={props.onChange} />)
               })                       
            }
            <Button submitText={props.featuresInputForm.submitText} />
         </Form>
      </Popup>
   );
}

export default PopupWithForm;