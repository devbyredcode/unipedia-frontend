import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import CButton from '../CButton';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  Modal, ModalBody } from 'reactstrap';
import CInput from '../CInput';
import './style.scss';

class CNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpenNavbar : false,
            isOpenModal : false,
            userEmail : '',
            usersData : ''
        }
    }

    toggleNavbar = () =>{
        this.setState((prevState) => {
            return{
                ...this.state, isOpenNavbar : !prevState.isOpenNavbar
            }
        });
    }

    toggleModal = () =>{
        this.setState((prevState) => {
            return{
                ...this.state, isOpenModal : !prevState.isOpenModal
            }
        });
    }

    getUserEmail = (event) => {
        this.setState({
            ...this.state, userEmail : event.target.value.trim()
        })
    }

    isUsersExistOnStorage = () => {
        const data = localStorage.getItem('newsletter_users');
        if(data !== null){
            this.setState({
                ...this.state, usersData : JSON.parse(data)
            })
        }

        return false
    }

    saveDataToStorage = () => {
        const currentData = [...this.state.usersData, this.state.userEmail];

        this.setState({        
            ...this.state, usersData : currentData, userEmail : '' 
        });

        this.resetForm()
        localStorage.setItem('newsletter_users', JSON.stringify(currentData));
    }

    resetForm = () => { 
        this.newsletterForm.reset();
    }

    componentDidMount(){
        if(this.isUsersExistOnStorage() !== false){
            this.setState({
                ...this.state, usersData : this.isUsersExistOnStorage()
            })
        }
    }

    downloadData = () => {
        let data = JSON.stringify(localStorage.getItem('newsletter_users'));
        data = [data];
        let blob1 = new Blob(data, { type: "text/plain;charset=utf-8" });

        let isIE = false || !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob1, "Subscriber.json");
        } else {
            let url = window.URL || window.webkitURL;
            let link = url.createObjectURL(blob1);
            let anchor = document.createElement("a");
            anchor.download = "Subscriber.json";
            anchor.href = link;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }
    }

    render(){
        return (
            <Auxillary>
                <Navbar className="navbar-wrapper" light expand="md">
                    <NavbarBrand href="/" className="navbar-wrapper__logo">Unipedia.</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpenNavbar} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                {
                                    localStorage.getItem('newsletter_users') !== null &&
                                        <CButton 
                                            isTransparent
                                            onclick={this.downloadData}>
                                                download
                                        </CButton>
                                }
                                <CButton 
                                    isRounded 
                                    onclick={this.toggleModal}>
                                        subscribe
                                </CButton>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
      
                <Modal className="modal-wrapper" isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalBody>
                        <h2>Subscribe our newsletter</h2>
                        <form ref={(el) => this.newsletterForm = el}>
                            <CInput
                                type="email"
                                change={this.getUserEmail}/>
                            <CButton
                                isBlock
                                isRounded
                                isDisabled={this.state.userEmail.length < 1}
                                onclick={this.saveDataToStorage}>
                                    subscribe now
                            </CButton>
                        </form>
                    </ModalBody>
                </Modal>
            </Auxillary>
        );
    }
}

export default CNavbar;