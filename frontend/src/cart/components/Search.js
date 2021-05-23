import React, {useState} from "react";
import './Search.css';

export default function Search (props){
    const [name, setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push(`/search/name/${name}`);
    };
    return (
        <form className="search" onSubmit={submitHandler}>
            <div className="row">
                <input type="text" name="q" id="q" onChange={(e) => setName(e.target.value)}></input>
                <button className="searchButton" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
}
