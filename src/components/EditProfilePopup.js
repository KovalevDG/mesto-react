import React from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {TITLE_EDIT_PROFILE, PROFILE_EDIT} from "../utils/utils.js";

function EditProfilePopup(props) {
   const currentUser = React.useContext(CurrentUserContext);
   const [userName, setName] = React.useState({name: currentUser.name});
   const [userDescription, setDescription] = React.useState({ about: currentUser.about });
   
   const userInfo = {
      name: userName,
      about: userDescription,
   }

   React.useEffect(() => {
      setName(currentUser.name || '');
      setDescription(currentUser.about || '');
      }, [currentUser])

   const handleChange = (evt) => {
      setName(evt.target.value);
      setDescription(evt.target.value);
      userInfo.name = userName;
      userInfo.about = userDescription;
   }

   
   // function handleSubmit(evt) {

   // }

   return (
      <PopupWithForm name={'edit-profile'} title={TITLE_EDIT_PROFILE} featuresInputForm={PROFILE_EDIT} isOpen={props.isOpen} onClose={props.onClose} currentUser={userInfo} onChange={handleChange} />
   );
}

export default EditProfilePopup;