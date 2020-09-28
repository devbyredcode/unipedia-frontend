import React, { Component } from 'react';
import Auxillary from '../Auxillary';
import CNavbar from '../../components/CNavbar';
import './style.scss';

class Layout extends Component{ 
    render(){
        return(
            <Auxillary>
                <CNavbar/>
                <main>
                    {this.props.children}
                </main>
            </Auxillary>
        )
    }
}

export default Layout;