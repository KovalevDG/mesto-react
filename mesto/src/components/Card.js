import React from "react";

class Card extends React.Component{

   handleClick = () => {
      this.props.onCardClick(this.props.card);
    } 

   render() {
      return (
         <article className="element">
            <div className="element__image" alt="#" style={{ backgroundImage: `url(${this.props.card.link})` }} onClick={this.handleClick} />
            <button className="element__delete" type="button"></button>
            <div className="element__description">
               <h2 className="element__text">{this.props.name}</h2>
               <div className="element__like">
                  <button className="element__like-icon" type="button"></button>
                  <span className="element__like-counter">0</span>
               </div>
            </div>
         </article> 
      );
   }
}

export default Card;