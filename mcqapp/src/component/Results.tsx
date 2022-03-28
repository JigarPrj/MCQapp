import { PieChart } from 'react-minimal-pie-chart';
import { useState,useEffect } from "react";
import { useSelector} from "react-redux";
const mcqs = require("../question.json");

export default function Results(props:any){
   //getting redux data
   const Datas = useSelector((store: any) => store?.takeActions?.Data[0]);
  let correct=0;
  let incorrect=0;
  const [result, setresult] = useState<any>([]);
 
  useEffect(() => {
    getResult()
    setResult()
  },[]);

  const getResult=()=>{
    if(Datas.language === "English"){
      mcqs?.quiz?.English.forEach((elem:any,index:number) => {
        if(elem?.answer === props.location.state.detail[index]){
          correct=correct+1
        }else{
          incorrect=incorrect+1
        }
      })
    }else{
      mcqs?.quiz?.French.forEach((elem:any,index:number) => {
        if(elem?.answer === props.location.state.detail[index]){
          correct=correct+1
        }else{
          incorrect=incorrect+1
        }
      })
    }
  }
 const setResult=()=>{
  if(correct ===0){
    setresult([
    { title: 'Incorrect', value: incorrect, color: 'red' }])
  }else if(incorrect===0){
    setresult( [
      { title: 'Correct', value: correct, color: 'green' }])
  }else{
    setresult([
         { title: 'Incorrect', value: incorrect, color: 'red' },
         { title: 'Correct', value: correct, color: 'green' }
       ])
  }
 }

return(
  <div
  style={{
    border: "2px solid",
    padding: "20px",
    width: "20%",
    margin: "auto",
  }}>
  <h5>Result:</h5>  
  <PieChart
  //@ts-ignore
  data={result}
  label={({ dataEntry }) => dataEntry.title}
  style={{fontSize:'7px'}}
/></div>
)
}