import { useSelector} from "react-redux";
import { useState } from "react";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
//@ts-ignore
import { useHistory } from 'react-router-dom';
const mcqs = require("../question.json");
export default function Questions() {
  //getting redux data
  const Datas = useSelector((store: any) => store?.takeActions?.Data[0]);
  const [getQue, setgetQue] = useState<number>(0);
  const [getOption, setgetOption] = useState<any>([]);
  
  let history = useHistory ();
  return (
    <div
      style={{
        border: "2px solid",
        padding: "20px",
        width: "50%",
        margin: "auto",
      }}
    >
      <div>
        <hr />
        <h4>Questions</h4>
        <hr />
      </div>
      <div style={{ display: "flex", width: "50%", margin: "auto",marginRight:'128px' }}>
        <div>
          <SquareRoundedIcon id="sqr0" onClick={()=>{
              setgetQue(0)  
          }} style={{ fontSize: "50px", color:"gray" }}  />
        </div>
        <div>
          <SquareRoundedIcon id="sqr1" onClick={()=>{
              setgetQue(1)
          }}style={{ fontSize: "50px", color: "gray"}} />
        </div>
        <div>
          <SquareRoundedIcon id="sqr2" onClick={()=>{
              setgetQue(2)
          }}style={{ fontSize: "50px", color:"gray"}} />
        </div>
        <div>
          <SquareRoundedIcon id="sqr3" onClick={()=>{
              setgetQue(3)
          }}style={{ fontSize: "50px", color:"gray"}} />
        </div>
        <div>
          <SquareRoundedIcon id="sqr4" onClick={()=>{
              setgetQue(4)
          }}style={{ fontSize: "50px", color:"gray"}} />
        </div>
        </div>
        {Datas.language === "English"
          ? mcqs?.quiz?.English?.map((elem: any, index: any) => {
              if(getQue === index){
              return (
                <>
                <br />
                  <div>
                    <h5>{elem?.question}</h5>
                  </div>
                  {elem?.url&&(
                  <img src={elem?.url}/>)}
                   <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      defaultValue={getOption[index]}
                    >
                      <FormControlLabel
                        value={elem?.options[0]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                          //@ts-ignore
                          setgetOption(getOption=>[...getOption,elem?.options[0]])
                          }else{
                            getOption[index]=elem?.options[0]
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[0]}
                      />
                      <FormControlLabel
                        value={elem?.options[1]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                            //@ts-ignore
                            setgetOption(getOption=>[...getOption,elem?.options[1]])
                           }else{
                             getOption[index]=elem?.options[1]
                           }
                        }}
                        control={<Radio />}
                        label={elem?.options[1]}
                      />
                      {(elem?.options[2]&& elem?.options[3])&&(
                          <>
                        <FormControlLabel
                        value={elem?.options[2]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                            //@ts-ignore
                            setgetOption(getOption=>[...getOption,elem?.options[2]])
                           }else{
                             getOption[index]=elem?.options[2]
                           }
                        }}
                        control={<Radio />}
                        label={elem?.options[2]}
                        />
                        <FormControlLabel
                        value={elem?.options[3]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                            //@ts-ignore
                            setgetOption(getOption=>[...getOption,elem?.options[3]])
                           }else{
                             getOption[index]=elem?.options[3]
                           }
                        }}
                        control={<Radio />}
                        label={elem?.options[3]}
                        /></>
                      )}
                     
                    </RadioGroup>
                  </FormControl> 
                </>
              );
            }
            })
          : mcqs?.quiz?.French?.map((elem: any, index: any) => {
            if(getQue === index){
                return (
                  <div key={index}>
                    <div>
                      <h5>{elem?.question}</h5>
                    </div>
                    {elem?.url&&(
                  <img src={elem?.url}/>)}
                     <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        defaultValue={getOption[index]}
                      >
                         <FormControlLabel
                        value={elem?.options[0]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                           //@ts-ignore
                           setgetOption(getOption=>[...getOption,elem?.options[0]])
                          }else{
                            getOption[index]=elem?.options[0]
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[0]}
                      />
                      <FormControlLabel
                        value={elem?.options[1]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                           //@ts-ignore
                           setgetOption(getOption=>[...getOption,elem?.options[1]])
                          }else{
                            getOption[index]=elem?.options[1]
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[1]}
                      />
                      {(elem?.options[2]&& elem?.options[3])&&(
                          <>
                        <FormControlLabel
                        value={elem?.options[2]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                           //@ts-ignore
                           setgetOption(getOption=>[...getOption,elem?.options[2]])
                          }else{
                            getOption[index]=elem?.options[2]
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[2]}
                        />
                        <FormControlLabel
                        value={elem?.options[3]}
                        onClick={()=>{
                          document.getElementById('sqr'+index)?.setAttribute('style','font-size:50px;color:red;') 
                          if(!getOption[index]){
                           //@ts-ignore
                           setgetOption(getOption=>[...getOption,elem?.options[3]])
                          }else{
                            getOption[index]=elem?.options[3]
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[3]}
                        /></>
                      )}
                     
                      </RadioGroup>
                    </FormControl> 
                  </div>
                );
              }
            })}
            {getQue===4&&(
              <div>
              <Button variant="outlined" onClick={()=>{
                history.push({
                  pathname: '/results',
                  state: { detail: getOption}
                })
              }}>
          Submit
        </Button></div>
            )}
          
    </div>
  );
}
