import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import {TITLE_EDIT_PROFILE, TITLE_ADD_CARD, TITLE_EDIT_AVATAR, TITLE_DELETE_CARD, PROFILE_EDIT, CARD_ADD, AVATAR_EDIT, CARD_DELETE} from "../utils/utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      card: {
        selectedCard: false,
        info: '#',
      }
    }
  }

  handleEditAvatarClick = () => {
    this.setState({isEditAvatarPopupOpen: true});
  }

  handleEditProfileClick = () => {
    this.setState({isEditProfilePopupOpen: true});
  }

  handleAddPlaceClick = () => {
    this.setState({isAddPlacePopupOpen: true});
  }

  handleCardClick = (cardInfo) => {
    this.setState({
      card: {
        selectedCard: true,
        info: cardInfo,
      }
    });
  }

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      card: {
        selectedCard: false,
        info: '#',
      }
    });
  }

  render() {
    return (
      <div className='page'>
        <div className='page__content'>
          <Header />
          <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />
          <Footer />
          <PopupWithForm name={'edit-profile'} title={TITLE_EDIT_PROFILE} featuresInputForm={PROFILE_EDIT} isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name={'add-card'} title={TITLE_ADD_CARD} featuresInputForm={CARD_ADD} onEditProfile={this.handleEditProfileClick} isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name={'edit-avatar'} title={TITLE_EDIT_AVATAR} featuresInputForm={AVATAR_EDIT} isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name={'delete-card'} title={TITLE_DELETE_CARD} featuresInputForm={CARD_DELETE} onClose={this.closeAllPopups} />
          <ImagePopup card={this.state.card}  onClose={this.closeAllPopups} />
        </div>
      </div>
    );    
  }
}

export default App;
