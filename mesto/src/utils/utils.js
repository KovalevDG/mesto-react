const BUTTON_EDIT = document.querySelector('.profile__edit-button');
const BUTTON_EDIT_AVATAR = document.querySelector('.profile__avatar');
const BUTTON_ADD = document.querySelector('.profile__add-button');
const BUTTON_DELETE = document.querySelector('.element__delete');

const CONFIG_SELECTORS = {
   formSelector: 'form',
   inputSelector: '.form__input',
   submitButtonSelector: '.form__submit-button',
   inputErrorClass: 'form__input_type-error',
   errorClass: 'form__input-error_active',
}

const PROFILE_EDIT = {
   inputs: [{
     inputId: 'user-name',
     inputName: 'name',
     inputPlaceholder: 'Имя',
   },
     {
       inputId: 'user-job',
       inputName: 'about',
       inputPlaceholder: 'О себе',
     }],
   submitText: 'Сохранить',
 };
 const CARD_ADD = {
   inputs: [{
     inputId: 'card-title',
     inputName: 'name',
     inputPlaceholder: 'Название',
   },
     {
       inputId: 'card-link',
       inputName: 'link',
       inputPlaceholder: 'Ссылка на картинку',
   }],
   submitText: 'Создать',
 };

 const AVATAR_EDIT = {
   inputs: [{
     inputId: 'card-link',
     inputName: 'link',
     inputPlaceholder: 'Ссылка на картинку',
   }],
   submitText: 'Сохранить',
 };

 const CARD_DELETE = {
   inputs: [],
   submitText: 'Да',
 }

export {BUTTON_EDIT, BUTTON_EDIT_AVATAR, BUTTON_ADD, BUTTON_DELETE, CONFIG_SELECTORS, PROFILE_EDIT, CARD_ADD, AVATAR_EDIT, CARD_DELETE};

