import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Container,Row,Col,Stack } from 'react-bootstrap';
import Start from './Start'
// import moment from 'moment'
import { useState,useEffect } from "react"
import {Link, Route, Switch} from 'react-router-dom'



function Liar(props){
  let Food = ['양파링','사과','딸기','라면','오렌지','돼지고기']
  let Location = ['서울','부산','제주','강원','경기','광주']
  let [sub,setSub] = React.useState()
  // let sta = {
  //   msg:['1','2','3']
  // }

  const [person, setPerson] = React.useState('2');
  const handleChange = (event) => {
    setPerson(event.target.value);
  };
  const [time, setTime] = React.useState('60');
  const handleChange2 = (event) => {
    setTime(event.target.value);
  };

  let [startmodal,setStartmodal] = useState(false)
  let [btnmodal,setBtnmodal] = useState(false)
  let [mainmodal,setMainmodal] = useState(false)
  
  props.setParentPerson(person)
  props.setParentTime(time)
  props.setParentSub(sub)
  
  return(
    <div>
      {/* <h1>{sta.msg[0]}</h1> */}
      <h1>- Liar Game -</h1>
      <h2>참여자수</h2>
      <Box sx={{ width: 100,mx: "auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">인원</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={person}
          label="num"
          onChange={handleChange}
        >
          <MenuItem value={2}>2명</MenuItem>
          <MenuItem value={3}>3명</MenuItem>
          <MenuItem value={4}>4명</MenuItem>
          <MenuItem value={5}>5명</MenuItem>
          <MenuItem value={6}>6명</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {/* 참여자는 {person} 명입니다. */}

    <br></br>
    <br></br>
    <h2>게임시간</h2>
    <Box sx={{ width: 100,mx: "auto" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">시간</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="time"
          onChange={handleChange2}
        >
          <MenuItem value={60}>60초</MenuItem>
          <MenuItem value={120}>120초</MenuItem>
          <MenuItem value={180}>180초</MenuItem>
          <MenuItem value={240}>240초</MenuItem>
          <MenuItem value={10}>10초</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {/* 시간은 {time} 초로 설정했습니다. */}
    <h2>주제를 고르세요</h2>
    <Box sx={{ '& button': { m: 1 } }}>
    <Button variant="outlined" size="large" onClick={() => {setSub(Food);setBtnmodal(true)}}>
          음식
        </Button>
        <Button variant="outlined" size="large" onClick={() => {setSub(Location);setBtnmodal(true)}}>
          도시
        </Button>
        </Box>
        
        {/* {
          btnmodal === true
          ?        <Button variant="contained" onClick = {()=>{setStartmodal(!startmodal)}}>게임시작 하단</Button>
          :        <Button variant="contained" disabled>게임시작 하단</Button>

        } */}
        {
          btnmodal === true
          ?        <Link to="/start2" style={{ textDecoration: 'none' }}><Button variant="contained" onClick = {()=>{setStartmodal(!startmodal)}}>게임시작 새창</Button></Link>
          :        <Button variant="contained" disabled>게임시작 새창</Button>

        }
        {/* <Button variant="contained" ><Link to="/start2">게임시장 새창</Link></Button> */}
        {/* <hr></hr>
        
        {
        startmodal === true
        ?         <Start person = {person} time = {time} sub = {sub}></Start>
        : null
      } */}

    </div>
  )
}


export default Liar