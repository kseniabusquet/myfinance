import { useState } from 'react';
import axios from 'axios';
import './InputArea.css'
import { useNavigate } from "react-router-dom";

export default function InputArea(props) {

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("");
  const [isShown, setIsShown] = useState(false);

  const data = {
    title,
    value,
    date,
    category,
  }
  let sumValue = 0

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
        .post('https://ironrest.herokuapp.com/myFinance', data)
        .then(() => {
          props.triggerRefresh()
          setTitle('')
          setValue('')
          setDate('')
          setCategory('')
        })
        .catch((err) => console.log(err));
        sumValue += parseInt(data.value)
  }

  return (
    <div>
      <form className="new-input" onSubmit={handleSubmit}>
        <div className = 'input-wrapper'>
        <input
          required
          value={title}
          name={title}
          type = 'text'
          placeholder="Type an item you would like to add"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          required
          className = 'short-input'
          value={value}
          name={value}
          type = 'number'
          placeholder="Value"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onChange={(e) => setValue(e.target.value)}
        />

        <input
          required
          className='short-input'
          type="date"
          value={date}
          name={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          required
          value={category}
          name={category}
          type = 'text'
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
        />
        <button className = 'add-button' type="submit">Add Item</button>
        </div>
      </form>

      {isShown && (
                  <div className = 'hidden-message'>
                    *negative - expense, positive - income
                  </div>
                )}
    </div>
  )
}
