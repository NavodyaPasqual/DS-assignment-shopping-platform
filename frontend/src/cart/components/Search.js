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
                <div className="col-8">
                    <input type="text" placeholder="Search"  name="q" id="q" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col-4">
                    <button className="searchButton" type="submit">
                        <i className="fa fa-search"/>
                    </button>
                </div>

            </div>
        </form>
    );
}
