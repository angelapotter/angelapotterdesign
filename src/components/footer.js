import React from "react"
import ExternalLink from './externalLink'
import footerStyles from './footer.module.css'

export default () => (
  <div className={footerStyles.footer}>
    <ExternalLink href='mailto:angelacbpotter@gmail.com'>Email</ExternalLink>,&nbsp;
    <ExternalLink href='http://www.linkedin.com/in/angelacbpotter'>LinkedIn</ExternalLink>,&nbsp;
    <ExternalLink href='https://twitter.com/takehypotenuses'>Twitter</ExternalLink>,&nbsp;
    <ExternalLink href='https://dribbble.com/angelapotter'>Dribbble</ExternalLink>,&nbsp;
    <ExternalLink href='http://ux.stackexchange.com/users/27505/angelapotter'>Stack Exchange</ExternalLink>,&nbsp;
    <ExternalLink href='https://github.com/angelapotter'>Github</ExternalLink>
  </div>
)
