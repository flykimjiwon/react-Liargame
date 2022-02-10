import { useEffect, useState } from "react"
import Timeout from './Timeout'
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Liarresult from './Liarresult'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';



function Start2(props){
  // 이거 하나로 바꾸기
  let [liar,setLiar] = useState([['Liar','정직함'],['Liar','정직함','정직함'],['Liar','정직함','정직함','정직함']
  ['Liar','정직함','정직함','정직함','정직함'],['Liar','정직함','정직함','정직함','정직함','정직함']])
  // 이거로 사용하기 아래지우기
  let [liar2,setLiar2] = useState(['Liar','정직함'])
  let [liar3,setLiar3] = useState(['Liar','정직함','정직함'])
  let [liar4,setLiar4] = useState(['Liar','정직함','정직함','정직함'])
  let [liar5,setLiar5] = useState(['Liar','정직함','정직함','정직함','정직함'])
  let [liar6,setLiar6] = useState(['Liar','정직함','정직함','정직함','정직함','정직함'])
  let [liarmodal,setLiarmodal] = useState(false)
  let [Notliarmodal,setNotliarmodal] = useState(false)
  
  let history = useHistory();

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function pickplayNum(playNum){
    if (playNum === '2' || playNum === 2){
      return liar2
    } else if (playNum === 3){
      return liar3
    } else if (playNum === 4){
      return liar4
    }else if (playNum === 5){
      return liar5
    } else {
      return liar6
    }
  }
  let pickLiarNum = shuffleArray(pickplayNum(props.parentPerson))
  let time = props.parentTime
  let [sub,setSub] = useState()
  let [useLiar,setUseLiar] = useState(pickLiarNum)

  useEffect(()=>{
    setSub(shuffleArray(props.parentSub)[0])
  },[sub])

  // useEffect(()=>{
  //   setUseLiar(shuffleArray(pickplayNum(props.parentPerson)))
  // },[useLiar])

  
  
  
  
    return(
      <div>
  <h1>- 게임시작 -</h1>
  <Timeout time = {time} sub = {sub}></Timeout>
  {/* <h1>제시어는 : {sub} 입니다.</h1> */}
  {/* <Liarresult useLiar={useLiar} sub={sub}></Liarresult> */}
  {
    useLiar.map(function(L,key){
      return (
        <div key={key}>
          
          {
    L === 'Liar'
    ?(<Tooltip title='라이어입니다' placement="right">
    <Button>{key+1}번째 유저</Button>
  </Tooltip>)
    :(<Tooltip title={`제시어는 ${sub} 입니다.`} placement="right">
    <Button>{key+1}번째 유저</Button>
  </Tooltip>)
    // ? (<Button key={key}>{key+1}번째 유저 : 라이어입니다</Button> )
    // : (<Button key={key}>{key+1}번째 유저</Button>)
   
  }
        </div>
      )
    })
  }
  {/* <Grid item>
            <Tooltip title={`ㅇㅇㅇ`} placement="right">
              <Button>right</Button>
            </Tooltip>
          </Grid> */}
          <></>
  
  <Button variant="outlined" size="large" onClick={()=>{  history.push('/')}}>다시하기</Button>
      </div>
    )
  }


export default Start2