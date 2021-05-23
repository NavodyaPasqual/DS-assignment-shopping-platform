import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ItemService from "./ItemService";
import {Link} from "react-router-dom";
import "bootstrap";
import{Button}  from "@material-ui/core";

class ItemList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
        this.updateItem= this.updateItem.bind(this);
        this.deleteItem= this.deleteItem.bind(this);
    }
    deleteItem(id){
        alert("Delete sucessfully!");
        ItemService.deleteItem(id).then(res => {
            this.setState({item: this.state.item.filter(item => item.id !== id)});
        });
    }
    updateItem(id){

        this.props.history.push(`/UpdateItem/${id}`);
    }
    componentDidMount() {
        ItemService.getItem().then((res) => {
            this.setState({item: res.data});
            console.log(res.data);
        });
    }

    render() {
        return(
            <div className= "container-seller">
            <div className="form-wrapper">
                <h2 className="text-center"><center>Item List</center></h2>
                <br/>
                <div className="btn-wrap">
                    <Button component={Link} classNaame="btn-add" to={'/addItem'} variant="outlined" color="primary">Add new Item</Button>
                </div>
                <Card style={{alignContent: 'center', width: '30cm', paddingLeft: "5.5m"}}>
                    <br/>
                    <Table className="table table-striped table-hover table-dark table-bordered" striped border hover>
                        <thead>
                        <tr>
                            <th>Item No</th>
                            <th>Item Category</th>
                            <th>Item Name</th>
                            <th>Item Description</th>
                            <th>Item Price</th>
                            <th>Count Stock</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.item.map(
                                item =>
                                    <tr key={item.id}>
                                        <td> {item.itemNo} </td>
                                        <td> {item.itemCategory} </td>
                                        <td> {item.itemName} </td>
                                        <td> {item.itemDescription} </td>
                                        <td> {item.itemPrice} </td>
                                        <td> {item.countStock} </td>
                                        <td>
                                            <button onClick={() => this.updateItem(item.id)}
                                                    className="btn btn-info">Update
                                            </button>
                                            <button style={{marginLeft: "20px"}}
                                                    onClick={() => this.deleteItem(item.id)}
                                                    className="btn btn-danger">Delete
                                            </button>
                                        </td>
                                    </tr>
                            )
                        }

                        </tbody>
                    </Table>
                </Card>
            </div>
            </div>
        );
    }
}
export default ItemList
