import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import {TITLE_ADD_CARD, TITLE_EDIT_AVATAR, TITLE_DELETE_CARD, CARD_ADD, AVATAR_EDIT, CARD_DELETE} from "../utils/utils.js";

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
      },
      currentUser: currentUser,
    }
  }

  componentDidMount() {
    api.getUserInfo()
      .then((user) => {
        this.setState({
            currentUser: user,
          });
       })
       .catch(err => {
          console.log(err);
       });
    api.getInitialCards()
       .then((cards) => {
          this.setState({ cards: cards });
       })
       .catch(err => {
          console.log(err);
       });
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
          <CurrentUserContext.Provider value={this.state.currentUser}>
            <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />
            <Footer />
            <EditProfilePopup isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} />
            {/* <PopupWithForm name={'add-card'} title={TITLE_ADD_CARD} featuresInputForm={CARD_ADD} onEditProfile={this.handleEditProfileClick} isOpen={this.props.onEditProfile} onClose={this.props.onClose} />
            <PopupWithForm name={'edit-avatar'} title={TITLE_EDIT_AVATAR} featuresInputForm={AVATAR_EDIT} isOpen={this.props.onEditProfile} onClose={this.props.onClose} />
            <PopupWithForm name={'delete-card'} title={TITLE_DELETE_CARD} featuresInputForm={CARD_DELETE} onClose={this.props.onClose} /> */}
          </CurrentUserContext.Provider>
          <ImagePopup card={this.state.card}  onClose={this.closeAllPopups} />
        </div>
      </div>
    );    
  }
}

export default App;
