import React, { FormEvent, useState } from 'react';

interface SearchBarProps {
  auth: boolean;
  onSubmit: (url: string) => Promise<void>;
}

const SearchBar = ({ auth, onSubmit }: SearchBarProps) => {

  const [value, setValue] = useState<string>("");

  function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(value);
  }

  return( 
    <div className="ui segment">
      <div className="item">
        <form className="ui form" onSubmit={ onFormSubmit }>
          <div className={`ui labeled field icon input ${auth ? '' : 'disabled'}`}>
            <div className="ui label">http://</div>
            <input 
              value={ value }
              onSubmit={e => setValue(e.currentTarget.value)}
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