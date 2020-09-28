import React from 'react';
import CButton from './../CButton';
import './style.scss';

const CList = (props) => {
    return(
        <div className="list-wrapper">
            <div className="list-wrapper__name">
                <p title={props.name}>{props.name}</p>
            </div>
            <div className="list-wrapper__country">
                <p>{props.country}</p>
            </div>
            <div className="list-wrapper__action">
                <CButton
                    type="link"
                    link={props.link}
                    isRounded>
                    Visit Website
                </CButton>
            </div>
        </div>
    )
}

export default CList;