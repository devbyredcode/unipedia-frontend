import React, { Component } from 'react'
import { Container } from 'reactstrap';
import CList from '../../components/CList';
import { BiArch, BiDizzy } from "react-icons/bi";
import './style.scss';
import Auxillary from '../../hoc/Auxillary';
import CButton from '../../components/CButton';

export default class ResultSearch extends Component {
    alertNotif = () => {
        alert('sorry this feature is not finished yet');
    }
    
    render() {
        return (
            <Container className="result-search-wrapper">
                {   
                    this.props.data.length > 0 ?  
                        <Auxillary>
                        <div className="result-search-wrapper__summary">
                            <p>Showing <b>{this.props.totalData > 10 ? this.props.loadeddata : this.props.totalData}</b> from <b>{this.props.totalData}</b> university result</p>
                        </div>
                        <div className="result-search-wrapper__countries">
                            <p>Search Result:</p>
                            <div>
                                {this.props.country.map((item, key)=> {
                                    return <CButton 
                                                isSmall
                                                isInverse
                                                onclick={this.alertNotif}
                                                key={key}
                                                isRounded>{item}</CButton>
                                })}
                            </div>
                        </div>
                        </Auxillary> : ""
                }
                {
                    this.props.data.length < 1 ?
                        this.props.isfirsttime === true ? 
                            <div className="result-search-wrapper__home">
                                <BiArch/>
                                <p>Welcome, you can find all the university that you want</p>
                            </div> :
                            <div className="result-search-wrapper__result">
                                <BiDizzy/>
                                <p>Sorry we cant found the University name, you can try another keyword</p>
                            </div> :
                            <Auxillary>
                                {
                                    this.props.data.map((item, key) => {
                                        return <CList
                                                key={key}
                                                name={item.name}
                                                country={item.country}
                                                link={item.web_pages[0]}/>
                                    })
                                }
                                {
                                    this.props.totalData > 10 &&
                                        this.props.totalData > this.props.loadeddata &&
                                            <div className="result-search-wrapper__action text-center">
                                                <CButton
                                                    onclick={this.props.onclick}
                                                    isRounded
                                                    >Show More University</CButton>
                                            </div>
                                }
                            </Auxillary>
                            }
            </Container>
        )
    }
}
