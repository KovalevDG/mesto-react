import React from 'react';

class Form extends React.Component {
   // constructor(props) {
   //    super(props);
   // }
   render() {
      return (
         <form className="popup__form form" name={`form-${this.props.name}`} action="#" method="POST" noValidate>
            {this.props.children}
         </form>
      );
   }
}
export default Form;