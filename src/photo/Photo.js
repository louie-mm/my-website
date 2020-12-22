import React from 'react';
import photo from './photo.png';
import './photo.css';

function Photo() {
    return (
        <img className={'photo'} src={photo} alt={'Louie'}/>
    );
}

export default Photo
