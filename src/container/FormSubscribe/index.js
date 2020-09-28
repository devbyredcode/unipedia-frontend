import React from 'react';
import { Container } from 'reactstrap';
import Auxillary from '../../hoc/Auxillary';
import CInput from '../../components/CInput';
import './style.scss';

const formSubscribe = (props) => {
    return(
        <Auxillary>
            <Container fluid={true} className="form-subscribe">
                <div className="form-subscribe__title">
                   <h4>Subscribe to our newsletter</h4>
                </div>
                <div className="form-subscribe__action">
                    <CInput
                        type="email"
                        className="form-input"
                        placeholder="Type the university name..."></CInput>
                </div>
            </Container>
        </Auxillary>
    )
}

export default formSubscribe;