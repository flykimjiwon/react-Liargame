import { useEffect, useState } from "react"
import Button from '@mui/material/Button';


function Liarresult(props){
  let [liarmodal,setLiarmodal] = useState(false)
  let [Notliarmodal,setNotliarmodal] = useState(false)
  
  
  
    return(
      <div>
   {
    props.useLiar.map(function(L,key){
      return (
        <div key={key}>
          {
            L === 'Liar'
            ? <Button variant="contained" onClick={()=>{setLiarmodal(!liarmodal)}}>라이어</Button>
            : <Button variant="contained" onClick={()=>{setNotliarmodal(!Notliarmodal)}}>일반</Button> 
        }
        </div>
      )
    })
  }
  {
    liarmodal === true
    ? <p>당신은 라이어입니다.</p>  
    : null
   
  }
  {
    Notliarmodal=== true
    ? <p>라이어가아닙니다. 제시어는 -{props.sub}- 입니다.</p>
    : null
  }
      </div>
    )
  }


export default Liarresult