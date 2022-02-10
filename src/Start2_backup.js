import { useEffect, useState } from "react"
import Timeout from './Timeout'
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Start2(props){
  let [liar2,setLiar2] = useState(['Liar','정직함'])
  let [liar3,setLiar3] = useState(['Liar','정직함','정직함'])
  let [liar4,setLiar4] = useState(['Liar','정직함','정직함','정직함'])
  let [liar5,setLiar5] = useState(['Liar','정직함','정직함','정직함','정직함'])
  let [liar6,setLiar6] = useState(['Liar','정직함','정직함','정직함','정직함','정직함'])
  let [liarmodal,setLiarmodal] = useState(false)
  
  let history = useHistory();

  let time = props.parentTime
  let [sub,setSub] = useState()
  // setSub(props.sub)
  useEffect(()=>{
    setSub(shuffleArray(props.parentSub)[0])
  },[sub])
  
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
  
  function playNum(person){
  
    if (person === '2' || person === 2){
      return liar2
    } else if (person === 3){
      return liar3
    } else if (person === 4){
      return liar4
    }else if (person === 5){
      return liar5
    } else {
      return liar6
    }
  }
  
  function choiceLiar(person){
    var arrayCopy 
    if(person ==='2'|| person===2){
      arrayCopy = [...liar2]
      return shuffleArray(arrayCopy)
    } else if(person ===3){
      arrayCopy = [...liar3]
      return shuffleArray(arrayCopy)
    }else if(person ===4){
      arrayCopy = [...liar4]
      return shuffleArray(arrayCopy)
    }else if(person ===5){
      arrayCopy = [...liar5]
      return shuffleArray(arrayCopy)
    }else{
      arrayCopy = [...liar6]
      return shuffleArray(arrayCopy)
    }
  
  }
  
  
    return(
      <div>
  <h1>- 게임시작 -</h1>
  {/* 여기시간은 컴포넌트 분리하면 프롭스넘어와서 작동할거임 useEffect쓰던지하면댐*/}
  <Timeout time = {time}></Timeout>
  {/* <h2>고른인원은{props.parentPerson}명</h2> */}
  {/* <h2>정한시간은{props.parentTime}초</h2> */}
  <h2>제시어 : {sub}</h2>
  <Button variant="contained" onClick = { ()=>{
    setLiarmodal(!liarmodal)
    if (props.parentPerson==="2"||props.parentPerson===2){
      setLiar2(choiceLiar(props.parentPerson))
    }else if(props.parentPerson===3){
      setLiar3(choiceLiar(props.parentPerson))
    }else if(props.parentPerson===4){
      setLiar4(choiceLiar(props.parentPerson))
    }else if(props.parentPerson===5){
      setLiar5(choiceLiar(props.parentPerson))
    }else if(props.parentPerson===6){
      setLiar6(choiceLiar(props.parentPerson))
    }
  } }>라이어고르기</Button>
  {/* {playNum(props.person)} */}
  {
    liarmodal === true
    ?   (
      playNum(props.parentPerson).map(function(p,key){
        return(
          <div>
          {
            p === 'Liar'
            ? <p key={key}>라이어는{key+1}번 유저입니다.</p>
            : null
          }     
        </div>
        )
      })
    )     
    : null
   
  }
  <Button onClick={()=>{  history.push('/')}}>다시하기</Button>
      </div>
    )
  }


export default Start2