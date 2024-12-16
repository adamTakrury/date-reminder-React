import React, { useEffect, useState } from "react";
import "./App.css";
import { Container} from "react-bootstrap";
import { data } from "./components/person";
import CountDate from "./components/CountDate";
import Date from "./components/Dates";
import DateActions from "./components/DateAction";
function App() {
  const [personData,setPersonData]=useState(data)
  const deleteAll=()=>
  {
    setPersonData([]);
  }
 const clickAll=()=>{
  setPersonData(data);
 }
 useEffect(()=>{
  setPersonData([])
 },[])
  return (
    <div className="font color-body">
      <Container className="py-5">
      <CountDate data={personData}/>
      <Date data={personData}/> 
      <DateActions clickShow={clickAll} clickDelete={deleteAll}/>
      </Container>
    </div>
  );
}

export default App;