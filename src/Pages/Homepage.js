import InfoArea from '../Components/InfoArea';
import InputArea from '../Components/InputArea';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Income  from "../Components/Income";
import Expense from '../Components/Expense'
import Remaining from "../Components/Remaining";
import Month from '../Components/Month'
import { useState, useEffect } from "react";
import axios from "axios";
import './Homepage.css'

function HomePage() {
  const actualMonth = new Date().getMonth();
 
  const [info, setInfo] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [filteredInfo, setFilteredInfo] = useState(info)
  const [month, setMonth] = useState(actualMonth)


  useEffect(() => {
        const filteredData = info.filter((current) => {
          const parts = current.date.split('-')
          let myDate = new Date(parts[0], parts[1] - 1, parts[2])
          return myDate.getMonth() === month
      })
      setFilteredInfo(filteredData) 

  }, [info, month])

  const filterMonth = (month) => { 
    setMonth(month)  
  }

  const triggerRefresh = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    
    axios
      .get("https://ironrest.herokuapp.com/myFinance")
      .then((response) => setInfo(response.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  if (!info) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="Homepage">
      <div className = 'info-area' >
        <Month filterMonth = {filterMonth} info = { filteredInfo } currentMonth = {month}/>
        <Income info = { filteredInfo }/>
        <Expense info = { filteredInfo }/>
        <Remaining info = { filteredInfo }/>
      </div>

        <InputArea triggerRefresh = {triggerRefresh}/>
        <InfoArea triggerRefresh = {triggerRefresh} info = { filteredInfo }/>
    </div>
  );
}

export default HomePage;