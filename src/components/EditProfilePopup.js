import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {TITLE_EDIT_PROFILE, PROFILE_EDIT} from "../utils/utils.js";

class EditProfilePopup extends React.Component {
   static contextType = CurrentUserContext;
   constructor(props) {
      super(props);
      this.state = {
         name: 'Жак-Ив Кусто',
         about: 'Исследователь океана',
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value,
      });
   }

   handleSubmit = (evt) => {

   }

   render() {
      return (
         <PopupWithForm name={'edit-profile'} title={TITLE_EDIT_PROFILE} featuresInputForm={PROFILE_EDIT} isOpen={this.props.isOpen} onClose={this.props.onClose} currentUser={this.state} onChange={this.handleChange} />
      );
   }
}

export default EditProfilePopup;