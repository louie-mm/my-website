import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./links.css"

function Links() {
    return (
        <div className={"link-icon-container"}>
            <a href={"https://www.linkedin.com/in/louie-mansour-b2630a43/?originalSubdomain=ca"} target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon id={"linkedin-icon"} className={"link-icon"} icon={faLinkedin} /></a>
            <a href={"https://github.com/louie-mm"} target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon id={"github-icon"} className={"link-icon"} icon={faGithub} /></a>
            <a href={"mailto:career@louiem.dev"} target={"_blank"} rel={"noreferrer"}><FontAwesomeIcon id={"email-icon"} className={"link-icon"} icon={faEnvelope} /></a>
        </div>
    );
}

export default Links
