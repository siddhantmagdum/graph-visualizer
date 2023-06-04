import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
      <p>©Prathamesh Wagh</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/prathamesh-wagh-0770811a0/')} />
      <GitHubIcon onClick={() => window.open('https://github.com/Prathamesh28')} />
    </div>
  );
}
