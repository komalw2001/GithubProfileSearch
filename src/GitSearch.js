import React from 'react';
import ReactDOM from 'react-dom';
import './GitSearch.css';

export default class GitSearch extends React.Component{

    constructor(props){
        super(props);
        this.state = {searchResults: this.results};
        this.searchword = React.createRef();
    }

    gitSearch= async()=>{
        const url = "https://api.github.com/search/users?q=" + this.searchword.current.value;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({searchResults: data});
        //alert(url);
    }

    render(){

        var res = null;

        if (this.state.searchResults && this.state.searchResults.total_count) // searched and results found
        {
            //alert(this.state.searchResults.total_count);
            if (this.state.searchResults.total_count > 0)
            {
                res = <>
                    <h3>Search Results</h3>
                    <ul id="list">{this.state.searchResults.items.map((list_item)=>
                        <li class="listitem">
                            <div class="txt">
                                <img src={list_item.avatar_url} class="pic" alt="Profile pic could not be loaded"></img>
                                <label class="uname">{list_item.login}</label>
                                <a href={list_item.html_url} class="link">Visit Profile</a> 
                            </div>
                        </li>
                    )}
                    </ul>
                </>;
            }
            else // no search results matching search word
            {
                res = <>
                    <h3>No Search Results</h3>
                </>;
            }
        }
        else if (this.state.searchResults) // no search word entered - no search results
        {
            res = <>
                <h3>No Search Results</h3>
            </>;
        }

        return(
            <div id="container">
                <h1 id="title">Github Search</h1>
                <div id = "search">
                    <label class="lbl">Search word: </label>
                    <input type="text" ref={this.searchword} class="tf"></input>
                    <button class="btn" id="searchBtn" onClick={this.gitSearch}>Search</button>
                </div>
                <div id="results">
                    {res}
                </div>
            </div>
        );
    }
}

