import React from 'react';
import './InputOption.css'

function InputOption({title, Icon, color}) {
    return (
        <div className="inputOption">
            <Icon src={Icon} style={{color: color}}/>
            <p>{title}</p>
        </div>
    );
}

export default InputOption;