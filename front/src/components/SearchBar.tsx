import React from 'react';

const SearchBar = ({ auth, onSubmit } ) => {

  const [value, setValue] = useState("");

  function onFormSubmit(e) {
    e.prevent.default();
    onSubmit(value.url);
  }

  return( 
    <div className="ui segment">
      <div className="item">
        <form className="ui form" onSubmit={ onFormSubmit }>
          <div className={`ui labeled field icon input ${auth ? '' : 'disabled'}`}>
            <div className="ui label">http://</div>
            <input 
              value={ url }
              onSubmit={e => setValue({ url: e.target.value })}
              type="text" 
              placeholder="Take Screenshot"
            />
          </div>
          <i className="search link icon"></i>
        </form>
      </div>
    </div>
  )
};

export default SearchBar;