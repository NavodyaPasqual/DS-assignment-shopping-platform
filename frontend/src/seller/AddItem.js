import React, {useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

function AddItem() {

    const [no, setNo] = useState("");
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");

    const localUser = JSON.parse(localStorage.getItem('UserProfile')) || null;
    let [user,setUser] = useState(localUser);


    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('UserProfile')));
        console.log("data " +user);

    },[]);

    //setting add function
    function addData(e) {
        e.preventDefault();
        const id = user.result._id;
        const newItem ={
            id,
            no,
            category,
            name,
            description,
            price,
            count
        };
        console.log(newItem);
        axios.post("http://localhost:5000/item/addItem",newItem).then(() => {
            alert("item added");
        }).catch((err) =>{
            alert(err);
        })
    }


    return(
        <div className= " add-con">
            <h2>Add Item</h2>
            <form onSubmit={addData}>

                <div className="mb-3">
                    <label htmlFor="no" className="form-label">Item No :</label>
                    <input type="text" className="form-control" id="no" placeholder="Enter Item No" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setNo(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Item Category :</label>
                    <input type="text" className="form-control" id="category" placeholder="Enter Item Category" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setCategory(e.target.value);
                           }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Item Name :</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Item Name" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setName(e.target.value);
                           }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Item Description :</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter Item Description" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setDescription(e.target.value);
                           }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Item Price :</label>
                    <input type="text" className="form-control" id="price" placeholder="Enter Item Price" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setPrice(e.target.value);
                           }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="count" className="form-label">Count Stock :</label>
                    <input type="text" className="form-control" id="count" placeholder="Enter Count Stock" aria-describedby="emailHelp"
                           onChange={(e) =>{
                               setCount(e.target.value);
                           }}/>
                </div>

                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>
        </div>
    )
}
export default AddItem
