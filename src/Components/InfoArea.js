import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";

import ItemCard from "./ItemCard";
import './InfoArea.css'

export default function InfoArea(props) {
  
  const [refresh, setRefresh] = useState(true);
    
  function deleteItem(_id) {
    axios
      .delete(`https://ironrest.herokuapp.com/myFinance/${_id}`)
      .then(() => {props.triggerRefresh()})
      .then(() => setRefresh(!refresh))
      .catch((e) => console.log(e));
  }
  if (!props.info){
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="items">
         <div className="items-list headings">
          <span className="span"><b>Date</b></span>
          <span className="span"><b>Category</b></span>
          <span className="span"><b>Title</b></span>
          <span className="span"><b>Value</b></span>
        </div>    
 
        {props.info.map((item) => {


        return (
          <div className="items-list">
            <ItemCard
              key={item._id}
              date={item.date}
              category={item.category}
              title={item.title}
              value={item.value}
            />
            <Link to={`/edit-item/${item._id}`}>
              <FaUserEdit size={20} style={{ fill: '#F5793B' }}/>
            </Link>
            <FaRegTrashAlt size={20} style={{ fill: '#F5793B', cursor: "pointer" }} onClick={() => deleteItem(item._id)} />
            </div>
        );
      })}
    </div>
  );
}
