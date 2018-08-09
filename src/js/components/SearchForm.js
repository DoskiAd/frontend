import React from 'react';
import {
  SORT_KEY_DATE,
  SORT_KEY_PRICE,
  SORT_ORDER_ASC,
  SORT_ORDER_DESC
} from '../apiRequests.js'

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      textInput: "",
      categoryInput: "default",
      sortInput: SORT_KEY_DATE,
      orderInput: SORT_ORDER_DESC
    }
  }

  trackInput(event, field){
    event.preventDefault();
    let newState = {};
    newState[field] = event.target.value;
    this.setState(newState);
  }

  acceptInput(event){
    event.preventDefault();
    this.props.setSearchOptions(
        this.state.categoryInput == "default"? null: this.state.categoryInput,
        this.state.textInput.toLowerCase().trim().split(/\s+/).join(" "),
        this.state.sortInput,
        this.state.orderInput
      );
  }

  render(){
    let optionList = this.props.categoriesList.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    });

    return(
      <form className="py-1"
        onSubmit={(event) => this.acceptInput.bind(this)(event)}>
				<div className="input-group w-100">

					<select className="custom-select"
            value={this.state.categoryInput}
            onChange={(event) => this.trackInput.bind(this)(event, "categoryInput")} >
            <option key="default" value="default">Все категории </option>
						{optionList}
					</select>

			    <input type="text"
            className="form-control"
            style={{"width":"50%"}}
            value={this.state.textInput}
            onChange={(event) => this.trackInput.bind(this)(event, "textInput")} />
			    <div className="input-group-append">
			      <button type="submit"
              className="btn btn-warning" >
			        <i className="fa fa-search"></i> Найти
			      </button>
			    </div>

          <div className="row justify-content-center mt-1">
            <div className="col-auto">
              <label>Сортировать по:
                <select className="ml-1"
                  value={this.state.sortInput}
                  onChange={(event) => this.trackInput.bind(this)(event, "sortInput")}>
                  <option value={SORT_KEY_PRICE}>Цене </option>
      						<option value={SORT_KEY_DATE} >Новизне </option>
      					</select>
              </label>
            </div>
            <div className="col-auto">
              <label>Порядок сортировки:
                <select className="ml-1"
                  value={this.state.orderInput}
                  onChange={(event) => this.trackInput.bind(this)(event, "orderInput")} >
                  <option value={SORT_ORDER_ASC} >По возрастанию</option>
      						<option value={SORT_ORDER_DESC} >По убыванию</option>
      					</select>
              </label>
            </div>
          </div>

		    </div>
			</form>
    );
  }
}

export default SearchForm;
