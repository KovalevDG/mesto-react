import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

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

  handleUpdateUser = (user) => {
    api.editUserInfo(user)
      .then((data) => {
        this.setState({
          currentUser: data,
        });
        this.closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUpdateAvatar = (data) => {
    api.editUserAvatar(data)
      .then((url) => {
        console.log(this.state.currentUser);
        // this.setState({
        //   currentUser: url,
        // });
        this.closeAllPopups();
      })
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
            <EditProfilePopup isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} onUpdateUser={this.handleUpdateUser} />
            <EditAvatarPopup isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups} onUpdateAvatar={this.handleUpdateAvatar} />
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
