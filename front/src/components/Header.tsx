import React from 'react';

interface HeaderProps {
  auth: boolean;
}

const Header = ({ auth }: HeaderProps) => {

  function renderContext() {
    if(auth) {
      return <a key="logout" className="ui" href="/api/logout">Logout</a>
    }
    return <a key="login" className="ui" href="/api/login">Login with Google</a>
  }

  return( 
    <div className="ui menu">
      <div className="item">
        <img src="https://semantic-ui.com/images/logo.png" />
      </div>
      <div className="item active">
        Screenshot
      </div>
      <div className="item right">
        {renderContext()}
      </div>
    </div>
  )
};

export default Header;