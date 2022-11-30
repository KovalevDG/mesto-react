import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/api.js';
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

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
          </CurrentUserContext.Provider>
          <Footer />
          <EditProfilePopup isOpen={this.isEditProfilePopupOpen} onClose={this.closeAllPopups} />

          <ImagePopup card={this.state.card}  onClose={this.closeAllPopups} />
        </div>
      </div>
    );    
  }
}

export default App;
