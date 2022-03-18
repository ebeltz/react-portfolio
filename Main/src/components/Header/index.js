import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-2">
      <h1>Elizabeth Beltz</h1>
      <img src={coverImage} alt="snow covered mountain"></img>
      {props.children}
    </header>
  );
}

export default Header;
