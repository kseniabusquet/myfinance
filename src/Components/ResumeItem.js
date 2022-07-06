import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemCard from "./ItemCard";

export default function ResumeItem() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/myFinance/${id}`)
      .then((response) => setItem(response.data))
      .catch((err) => console.log(err));
  }, []);

   
  return (
    <div>
      <h1 className="item">items Selected</h1>
      <ItemCard
        title={item.title}
        value={item.value}
        data={item.data}
        category={item.category}
      />
    </div>
  );
}