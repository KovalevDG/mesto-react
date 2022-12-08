import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {TITLE_EDIT_AVATAR, AVATAR_EDIT} from "../utils/utils.js";

function EditAvatarPopup(props) {
   const currentUser = React.useContext(CurrentUserContext);
   const [avatar, setAvatar] = React.useState({ avatar: currentUser.avatar });
   const avatarRef = React.useRef(avatar);

   const handleChange = (evt) => {
      setAvatar({ avatar: evt.target.value });
   }

   const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(avatarRef.current);
      props.onUpdateAvatar({avatar: avatarRef.current});
   }
   
   return (
      <PopupWithForm name={'edit-avatar'} title={TITLE_EDIT_AVATAR} featuresInputForm={AVATAR_EDIT} isOpen={props.isOpen} onClose={props.onClose} currentUser={avatar} onChange={handleChange} onSubmit={handleSubmit} />
   );
}

export default EditAvatarPopup;