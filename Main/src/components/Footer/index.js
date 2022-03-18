import React from 'react';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/ebeltz"
    },
    {
      name: "fab fa-linkedin",
      link: "www.linkedin.com/in/elizabethbeltz"
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/16864734/elizabeth-b?tab=profile"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
