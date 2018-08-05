import React from 'react';
import {connect} from 'react-redux';
import {getByKeyVal} from '../helpers.js';
import {setCurrentItemById} from '../middleware/thunks.js';
import ItemPage from '../components/ItemPage.js';
import {formImageUrl} from '../helpers.js';

class ItemPageContainer extends React.Component{
  componentDidMount(){
    this.props.fetchDisplayItem(this.props.match.params.id);
  }

  render(){
    if(this.props.displayItem === null){
      return null;
    }

    let photos = [];
    if(!this.props.displayItem.photos){
      photos.push("images/dummy.png");
    } else {
      for(let i = 1; i <= parseInt(this.props.displayItem.photos); i++){
        photos.push(
          formImageUrl(this.props.match.params.id, i)
        );
      }
    }
    let emails = this.props.displayItem.contacts.filter((contact) =>
      {return contact.type == "email"});
    let phones = this.props.displayItem.contacts.filter((contact) =>
      {return contact.type == "mobile"});

    return(
      <ItemPage title={this.props.displayItem.title}
        price={this.props.displayItem.price}
        desc={this.props.displayItem.description}
        phone={phones}
        email={emails}
        location={this.props.displayItem.location}
        date={this.props.displayItem.date}
        photos={photos}
        contactName={this.props.displayItem.name} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayItem: state.currentItem
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDisplayItem: (id) => dispatch(setCurrentItemById(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);
