import logo from './logo.svg';
import './App.css';
import Liar from './Liar'
import Start from './Start'
import Start2 from './Start2'
import {Link, Route, Switch} from 'react-router-dom'
import { useEffect, useState } from "react"



function App() {

  const [parentPerson,setParentPerson] = useState()
  const [parentTime,setParentTime] = useState()
  const [parentSub,setParentSub] = useState()

  return (
    <div className="App">
      {/* <h2>부모에전달된 인원       {parentPerson}</h2>
      <h2>부모에전달된 시간       {parentTime}</h2>
      <h2>부모에전달된 주제      {parentSub}</h2> */}
      {/* <hr></hr> */}
      <Route exact path="/">
      <Liar setParentPerson = {setParentPerson} setParentTime={setParentTime}
      setParentSub={setParentSub} ></Liar>
      </Route>
      <Route path="/start2">
        <Start2 parentPerson ={parentPerson} parentTime={parentTime} parentSub={parentSub}></Start2>
      </Route >
    </div>
  );
}

export default App;
