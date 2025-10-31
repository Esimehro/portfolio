import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SlSocialTwitter} from 'react-icons/sl';
import con from './Contact.module.css'

function Socials () {
  return (
    <div className={con.socialsHeader}>
    <a href='https://www.linkedin.com/in/lois-omodibo-21bb07172/' target='_blank'><BsLinkedin/></a>
    <a href='https://github.com/Esimehro' target='_blank'><BsGithub/></a>
    <a href='https://twitter.com/ESI___________' target='_blank'><SlSocialTwitter/></a>
    </div>
  )
}
export default Socials;
