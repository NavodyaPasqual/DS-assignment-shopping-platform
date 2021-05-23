import axios from 'axios';

class ItemService{
    getItem(){
        return axios.get("http://localhost:5000/item");
    }
    createItem(item){
        return axios.post("http://localhost:5000/item/add", item);
    }
    getItemById(itemId){
        return axios.get("http://localhost:5000/item" + "/" + itemId);
    }

    updateItem(item,itemId){
        return axios.put("http://localhost:5000/item//update" + "/" + itemId, item);
    }

    deleteItem(itemId){
        return axios.delete("http://localhost:5000/item" + "/" + itemId);
    }
}
export default new ItemService()