import React from 'react';
import avatar from '../images/avatar.jpg';
import { api } from '../utils/api.js';
import Card from './Card';

class Main extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         userName: 'Жак-Ив Кусто',
         userDescription: 'Исследователь океана',
         userAvatar: avatar,
         cards: [],
      }
   }

   componentDidMount() {
      api.getUserInfo()
         .then((user) => {
            this.setState({
               userName: user.name,
               userDescription: user.about,
               userAvatar: user.avatar,
            });
         })
         .catch(err => {
            console.log(err);
         });
      api.getInitialCards()
         .then((cards) => {
            this.setState({cards: cards});
         })
    }

   render() {
      return(
         <>
            <main className="content">
               <section className="profile">
                  <div className="profile__avatar" style={{ backgroundImage: `url(${this.state.userAvatar})` }}>
                     <div className="profile__avatar-overlay" onClick={this.props.onEditAvatar}></div>
                  </div>
                  <div className="profile__user">
                     <h1 className="profile__user-name">{this.state.userName}</h1>
                     <button className="profile__edit-button" type="button"
                        onClick={this.props.onEditProfile}></button>
                     <p className="profile__user-job">{this.state.userDescription}</p>
                  </div>
                  <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
               </section>
               <div className="elements">
                  {  
                     this.state.cards.map((card) => {
                        return (
                           <Card key={card._id} card={card} onCardClick={this.props.onCardClick} />
                        );  
                     })   
                  }
               </div>
            </main>
         </>
      );      
   }
}

export default Main;