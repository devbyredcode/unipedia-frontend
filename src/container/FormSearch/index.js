import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CButton from '../../components/CButton';
import CInput from '../../components/CInput';
import './style.scss';

class FormSearch extends Component{
    render(){
       return(
           <Container fluid={true} className="form-search">
               <div className="form-search__title">
                   <h1>Explore university with unipedia.</h1>
                   <p>explore all university around the worlds</p>
               </div>
               <div className="form-search__action">
                   <CInput
                        type="text"
                        className="form-input"
                        placeholder="type university name ..."
                        onkeypress={this.props.onenter}
                        change={this.props.onchange}></CInput>
                    <CButton
                        onclick={this.props.onsubmit}
                        isLoading={this.props.onprocess}
                        isDisabled={this.props.isdisabled}
                        isRounded>
                        Submit
                    </CButton>
               </div>
           </Container>
       )
   }
}

export default FormSearch;
