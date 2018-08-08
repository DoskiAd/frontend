import React from 'react';
import Alert from './Alert.js';
import $ from 'jquery';

class NewAdForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      titleInput: "",
      priceInput: "",
      descriptionInput: "",
      locationInput: "",
      categoryInput: "",
      phoneInput: "",
      emailInput: "",
      filesInput: null,
      filesizeWarn: false
    }
  }

  trackInput(event, field){
    event.preventDefault();
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  processFiles(event){
    this.setState({filesInput: event.target.files});
    $.each(event.target.files, (i, file) => {
      this.setState({filesizeWarn: file.size >= 512000});
    });
  }

  acceptInput(event){
    event.preventDefault();
    if(!this.state.categoryInput && this.props.categories.length > 0){
      this.setState({categoryInput: this.props.categories[0].id});
    }
    this.props.submitCallback(
      this.state.titleInput,
      this.state.priceInput,
      this.state.descriptionInput,
      this.state.locationInput,
      this.state.categoryInput,
      this.state.phoneInput,
      this.state.emailInput,
      this.state.filesInput
    );
  }

  componentDidMount(){
    if(this.props.categories.length > 0){
      this.setState({categoryInput: this.props.categories[0].id});
    }
  }

  render(){
    let optionList = this.props.categories.map((category, i) => {
      return <option key={category.id}
        value={category.id} >
        {category.name}
      </option>
    });

    return(
      <form onSubmit={(event) => this.acceptInput.bind(this)(event)} >

        <div className="form-row">
          <div className="col form-group">
            <label>Название:</label>
            <input type="text"
              className="form-control"
              value={this.state.titleInput}
              onChange={(event) =>
              this.trackInput.bind(this)(event, "titleInput")}
              required />
          </div>
          <div className="col form-group">
            <label>Категория:</label>
            <select className="custom-select"
              onChange={(event) =>
              this.trackInput.bind(this)(event, "categoryInput")}
              value={this.state.categoryInput} >
              {optionList}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="col form-group">
            <label>Цена:</label>
            <input type="number"
              value={this.state.priceInput}
              className="form-control"
              required
              onChange={(event) =>
              this.trackInput.bind(this)(event, "priceInput")} />
          </div>
          <div className="col form-group">
            <label>Местоположение:</label>
            <input className="form-control"
              type="text"
              value={this.state.locationInput}
              required
              onChange={(event) =>
              this.trackInput.bind(this)(event, "locationInput")} />
          </div>
        </div>

        <div className="form-group">
          <label>Описание:</label>
            <textarea className="form-control"
              type="textarea"
              rows="2"
              required
              value={this.state.descriptionInput}
              onChange={(event) =>
              this.trackInput.bind(this)(event, "descriptionInput")}>
            </textarea>
        </div>

        <div className="form-row">
          <div className="col form-group">
            <label>Телефон:</label>
            <input type="number"
              className="form-control"
              value={this.state.phoneInput}
              onChange={(event) =>
              this.trackInput.bind(this)(event, "phoneInput")}
              required={this.state.emailInput == ""} />
          </div>
          <div className="col form-group">
            <label>Email:</label>
            <input type="email"
              className="form-control"
              value={this.state.emailInput}
              onChange={(event) =>
                this.trackInput.bind(this)(event, "emailInput")}
              required={this.state.phoneInput == ""} />
          </div>
        </div>

        <div className="form-row">
          <div className="col form-group">
            <label>Добавить фотографии:</label>
            {
              this.state.filesizeWarn &&
              <Alert type="error" message="Файлы должны быть не больше 500кб"/>
            }
            <input type="file"
              className="form-control"
              accept="image/jpeg"
              files={this.state.filesInput}
              multiple
              onChange={(event) => {
                this.processFiles.bind(this)(event)
              }} />
          </div>
        </div>

        <div  className="form-row">
          <div className="col form-group" >
            <button type="submit"
              className="btn btn-primary btn-block">
               Создать объявление
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewAdForm;
