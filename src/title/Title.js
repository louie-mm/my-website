import React, {Fragment} from 'react';
import "./title.css"

function Title() {
    return (
        <Fragment>
            <h1 className={"title"}>louie<span className={"accent-color"}>m</span>.dev</h1>
            <h1 className={"subtitle"}>Louie Mansour</h1>
        </Fragment>
    );
}

export default Title
