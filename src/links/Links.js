import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./links.css"

function Links() {
    return (
        <div className={"link-icon-container"}>
            <FontAwesomeIcon id={"linkedin-icon"} className={"link-icon"} icon={faLinkedin} />
            <FontAwesomeIcon id={"github-icon"} className={"link-icon"} icon={faGithub} />
            <FontAwesomeIcon id={"email-icon"} className={"link-icon"} icon={faEnvelope} />
        </div>
    );
}

export default Links
