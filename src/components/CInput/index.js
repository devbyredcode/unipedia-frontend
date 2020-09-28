import React from 'react';
import { Input } from 'reactstrap';
import propTypes from 'prop-types';
import './style.scss';

const CInput = (props) => {
    const classes = ['form-input'];

    (props.isRounded) && classes.push('input--rounded');
    (props.isError) && classes.push('input--error');

    return(
        <Input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.change}
            value={props.value}
            className={classes.join(' ')}
            onKeyPress={props.onkeypress}/>
    );
}

CInput.propTypes = {
    isLoading   : propTypes.bool,
    isError     : propTypes.bool,
    type        : propTypes.string,
    placeholder : propTypes.string,
    value       : propTypes.string
}

export default CInput;