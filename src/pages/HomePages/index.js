import React, { Component } from 'react';
import FormSearch from '../../container/FormSearch';
import ResultSearch from '../../container/ResultSearch';
import Layout from '../../hoc/Layout/';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSearching: false,
            isFirstTime: true,
            loadedData : 10,
            remainingData : 0,
            searchKeyword : '',
            totalData: 0,
            country : [],
            searchResult : []
        }
    }

    handleSearch = (event) => {
        this.setState({
            ...this.state, searchKeyword : event.target.value
        });    
    }

    handleSubmit = () => {
        let searchKeyword = this.state.searchKeyword;
        this.setState({
            ...this.state, isSearching : true
        });

        this.getUniversityByKeyword(searchKeyword);
    }

    handleLoadMore = () => {
        this.setState((prevState) => {
            let addLoaded = prevState.remainingData > 10 ? 10 : prevState.remainingData;
            return{
                ...this.state, 
                    loadedData : prevState.loadedData + addLoaded, 
                    remainingData : prevState.remainingData - addLoaded
            }
        })
    }

    handleEnter = (event) => {
        if(event.key === 'Enter'){
            let searchKeyword = this.state.searchKeyword;
            this.setState({
                ...this.state, isSearching : true
            });

            this.getUniversityByKeyword(searchKeyword);
        }
    }

    getUniversityByKeyword = (keyword) => {
        fetch(`http://universities.hipolabs.com/search?name=${keyword}`)
            .then(response => response.json())
            .then(result => {
                const rawCountry = result.map((item) => {
                    return item.country
                });

                const cleanCountry = rawCountry.filter((val, index, item) => {
                    return item.indexOf(val) === index
                });

                this.setState({
                    ...this.state, searchResult: result, 
                        country: cleanCountry, 
                        isSearching: false, 
                        isFirstTime : false, 
                        loadedData : 10,
                        remainingData : result.length > 10 ? result.length - 10 : result.length,
                        totalData : +result.length
                });
        });  
    }
    
    render() {
        return (
            <Layout>
                <FormSearch
                    onenter={this.handleEnter}
                    onchange={this.handleSearch}
                    onsubmit={this.handleSubmit}
                    onprocess={this.state.isSearching}
                    isdisabled={this.state.searchKeyword < 1}/>
                <ResultSearch
                    country={this.state.country}
                    isfirsttime={this.state.isFirstTime}
                    data={this.state.searchResult.slice(0, this.state.loadedData)}
                    loadeddata={this.state.loadedData}
                    remainingdata={this.state.remainingData}
                    totalData={this.state.searchResult.length}
                    onclick={this.handleLoadMore}/>
            </Layout>
        )
    }
}
