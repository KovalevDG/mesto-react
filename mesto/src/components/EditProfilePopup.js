import React from 'react';
import { render } from "@testing-library/react"
import PopupWithForm from "./PopupWithForm";
import {TITLE_EDIT_PROFILE, TITLE_ADD_CARD, TITLE_EDIT_AVATAR, TITLE_DELETE_CARD, PROFILE_EDIT, CARD_ADD, AVATAR_EDIT, CARD_DELETE} from "../utils/utils.js";

class EditProfilePopup extends React.Component {

   render() {
      return (
         <>
            <PopupWithForm name={'edit-profile'} title={TITLE_EDIT_PROFILE} featuresInputForm={PROFILE_EDIT} isOpen={this.props.onEditProfile} onClose={this.props.onClose} /><PopupWithForm name={'add-card'} title={TITLE_ADD_CARD} featuresInputForm={CARD_ADD} onEditProfile={this.handleEditProfileClick} isOpen={this.props.onEditProfile} onClose={this.props.onClose} /><PopupWithForm name={'edit-avatar'} title={TITLE_EDIT_AVATAR} featuresInputForm={AVATAR_EDIT} isOpen={this.props.onEditProfile} onClose={this.props.onClose} /><PopupWithForm name={'delete-card'} title={TITLE_DELETE_CARD} featuresInputForm={CARD_DELETE} onClose={this.props.onClose} />
         </>
      );
   }
}

export default EditProfilePopup;