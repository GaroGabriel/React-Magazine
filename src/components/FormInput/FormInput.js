import React from 'react';
import './formInput.scss'
const FormInput = ({label,...otherPros}) => {
    return (
        <div className='input'>
            {label && (
                <label className={`${otherPros.value.length? 'input__label-filed':''} input__label`}>{label}</label>
            )}
            <input className='input__field' {...otherPros}/>
        </div>
    );
};

export default FormInput;
