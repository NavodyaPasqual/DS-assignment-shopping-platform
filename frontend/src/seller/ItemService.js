import axios from 'axios';

class ItemService{
    getItem(){
        return axios.get("http://localhost:5000/item/itemList");
    }
    createItem(item){
        return axios.post("http://localhost:5000/item/addItem", item);
    }
    getItemById(itemId){
        return axios.get("http://localhost:5000/item" + "/itemList" + itemId);
    }

    updateItem(item,itemId){
        return axios.put("http://localhost:5000/item//update" + "/itemList" + itemId, item);
    }

    deleteItem(itemId){
        return axios.delete("http://localhost:5000/item" + "/itemList" + itemId);
    }
}
export default new ItemService()