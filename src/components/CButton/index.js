import React from 'react'
import { Button } from 'reactstrap'
import { CgSpinner } from 'react-icons/cg';
import propTypes from 'prop-types';
import './style.scss'

const CButton = (props) => {
    const classes = ['btn'];

    (props.isInverse) && classes.push('btn--inverse');
    (props.isSmall) && classes.push('btn--small');
    (props.isRounded) && classes.push('btn--rounded');
    (props.isDisabled) && classes.push('btn--disabled'); 
    (props.isBlock) && classes.push('btn--block');
    (props.isTransparent) && classes.push('btn--transparent');

    if(props.type === "link"){
        return(
            <a  className={classes.join(' ')}
                onClick={props.onclick} 
                href={props.link}
                target="_blank"
                rel="noopener noreferrer">
                    { props.isLoading ? <CgSpinner size="2em"/> : props.children }
            </a>
        )
    }else{
        return(
            <Button className={classes.join(' ')} 
                    onClick={props.onclick}>
                { props.isLoading ? <CgSpinner size="2em"/> : props.children }
            </Button>
        )
    }
    
}

CButton.propTypes = {
    type        : propTypes.string,
    isInverse   : propTypes.bool,
    isSmall     : propTypes.bool,
    isLoading   : propTypes.bool,
    isDisabled  : propTypes.bool,
    isBlock     : propTypes.bool,
    isRounded   : propTypes.bool,
    isTransparent : propTypes.bool
}

export default CButton;