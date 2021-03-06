import './working.scss';
import React from 'react';
import Loading from '../art/loadingSvg';

const Working = ({text, className}) => (
    <span className={`working ${className}`}>
        <span className='working_text'>{text}</span>
        <Loading />
    </span>
);

export default Working;
