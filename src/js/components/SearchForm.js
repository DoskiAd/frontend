import React from 'react';

const SearchForm = (props) => {
  let optionList = props.categoriesList.map((item) => {
    return <option key={item.id} value="">{item.name}</option>
  });
  return(
    <form action="#" className="py-1">
				<div className="input-group w-100">
					<select className="custom-select"  name="category_name">
            <option key="default" value="">Все категории </option>
						{optionList}
					</select>
				    <input type="text" className="form-control" style={{"width":"50%"}} placeholder="Поиск" />
				    <div className="input-group-append">
				      <button className="btn btn-warning" type="submit">
				        <i className="fa fa-search"></i> Найти
				      </button>
				    </div>
			    </div>
			</form>
  );
}

export default SearchForm;
