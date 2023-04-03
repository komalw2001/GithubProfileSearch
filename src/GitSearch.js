import React from 'react';
import ReactDOM from 'react-dom';


export default class GitSearch extends React.Component{

    results = [];

    constructor(props){
        super(props);
        this.state = {searchResults: this.results};
        this.searchword = React.createRef();
    }

    gitSearch=()=>{

    }

    render(){

        var res = null;

        if (this.results.length > 0)
        {
            res = <>
                <h3>Search User</h3>
                <ul>{this.state.results.map((list_item)=>
                    <li class="listitem">
                        <div class="txt">
                            <img href={list_item.img} class="pic" alt="Profile pic could not be loaded"></img>
                            <label class="uname">{list_item.username}</label>
                            <a href={list_item.url} class="link">Visit Profile</a> 
                        </div>
                    </li>
                )}
                </ul>
            </>;
        }

        return(
            <div id="container">
                <h1 id="title">Github Search</h1>
                <div id = "search">
                    <h3>Search User</h3>
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

