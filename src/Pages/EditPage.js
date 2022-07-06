import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './EditPage.css'
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'

export default function EditPage() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState("");
    const [info, setInfo] = useState({ title, value, date, category });

  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/myFinance/${id}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  let navigate = useNavigate();

  function handleSubmit(e) {
    const data = {
      title: info.title,
      value: info.value,
      date: info.date,
      category: info.category,
     }

    e.preventDefault();
    axios
      .put(`https://ironrest.herokuapp.com/myFinance/${id}`, data)
      .then((response) => alert("Item successfully updated!"))
      .then(() => navigate("/homepage"))
      .catch((err) => console.log(err));
   }

  return (
    <div>
      <h1 className="title">Edit item info</h1>
      <div className="edit-wrapper">
      <form className="item-creation" onSubmit={handleSubmit}>
        
        <div className = 'line-wrapper'>
        <label htmlFor="title">Title</label>
        <input
          className="edit-input"
          value={info.title}
          name={info.title}
          placeholder="Title"
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
        </div>

        <div className = 'line-wrapper'>
        <label htmlFor="value">Value</label>
        <input
          className="edit-input"
          value={info.value}
          name={info.value}
          placeholder="value"
          onChange={(e) => setInfo({ ...info, value: e.target.value })}
        />
        </div>


        <div className = 'line-wrapper date'>
        <label htmlFor="date">Date</label>
        <input
          className="edit-input"
          type="date"
          value={info.date}
          name={info.date}
          placeholder="date"
          onChange={(e) => setInfo({ ...info, date: e.target.value })}
        />
        </div>

        <div className = 'line-wrapper'>
        <label htmlFor="category">Category</label>
        <input
          className="edit-input"
          type="category"
          value={info.category}
          name={info.category}
          placeholder="category"
          onChange={(e) => setInfo({ ...info, category: e.target.value })}
        />
        </div>
        <button className ='sign-up-button white' type="submit">Confirm</button>
      </form>
      
      </div>
      
      <Link to = '/homepage' style = {{textAlign: 'center'}}>Back to the homepage</Link>
    </div>
  );
}
