import { useSelector } from "react-redux";
import { useState } from "react";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
//@ts-ignore
import { useHistory } from "react-router-dom";
const mcqs = require("../question.json");
export default function Questions() {
  //getting redux data
  const Datas = useSelector((store: any) => store?.takeActions?.Data[0]);
  const [getQue, setgetQue] = useState<number>(0);
  const [getOption, setgetOption] = useState<any>([]);
  const [getmultiOption, setgetmultiOption] = useState<any>([]);
  let history = useHistory();

  const removeElement=(elem:any)=>{
    for( let i = 0; i < getmultiOption.length; i++){ 
                                   
      if ( getmultiOption[i] === elem) { 
         getmultiOption.splice(i, 1); 
      }
  }
  }
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
      <div
        style={{
          display: "flex",
          width: "50%",
          margin: "auto",
          marginRight: "128px",
        }}
      >
        <div>
          <h5 style={{ position: "absolute", marginLeft: "20px" }}>1</h5>
          <SquareRoundedIcon
            id="sqr0"
            onClick={() => {
              setgetQue(0);
            }}
            style={{ fontSize: "50px", color: "gray" }}
          />
        </div>
        <div>
          <h5 style={{ position: "absolute", marginLeft: "20px" }}>2</h5>
          <SquareRoundedIcon
            id="sqr1"
            onClick={() => {
              setgetQue(1);
            }}
            style={{ fontSize: "50px", color: "gray" }}
          />
        </div>
        <div>
          <h5 style={{ position: "absolute", marginLeft: "20px" }}>3</h5>
          <SquareRoundedIcon
            id="sqr2"
            onClick={() => {
              setgetQue(2);
            }}
            style={{ fontSize: "50px", color: "gray" }}
          />
        </div>
        <div>
          <h5 style={{ position: "absolute", marginLeft: "20px" }}>4</h5>
          <SquareRoundedIcon
            id="sqr3"
            onClick={() => {
              setgetQue(3);
            }}
            style={{ fontSize: "50px", color: "gray" }}
          />
        </div>
        <div>
          <h5 style={{ position: "absolute", marginLeft: "20px" }}>5</h5>
          <SquareRoundedIcon
            id="sqr4"
            onClick={() => {
              setgetQue(4);
            }}
            style={{ fontSize: "50px", color: "gray" }}
          />
        </div>
      </div>
      {Datas.language === "English"
        ? mcqs?.quiz?.English?.map((elem: any, index: any) => {
            if (getQue === index && index <= 3) {
              return (
                <>
                  <br />
                  <div>
                    <h5>{elem?.question}</h5>
                  </div>
                  {elem?.url && <img src={elem?.url} />}
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      defaultValue={getOption[index]}
                    >
                      <FormControlLabel
                        value={elem?.options[0]}
                        onClick={() => {
                          document
                            .getElementById("sqr" + index)
                            ?.setAttribute(
                              "style",
                              "font-size:50px;color:red;"
                            );
                          if (!getOption[index]) {
                            //@ts-ignore
                            setgetOption((getOption) => [
                              ...getOption,
                              elem?.options[0],
                            ]);
                          } else {
                            getOption[index] = elem?.options[0];
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[0]}
                      />
                      <FormControlLabel
                        value={elem?.options[1]}
                        onClick={() => {
                          document
                            .getElementById("sqr" + index)
                            ?.setAttribute(
                              "style",
                              "font-size:50px;color:red;"
                            );
                          if (!getOption[index]) {
                            //@ts-ignore
                            setgetOption((getOption) => [
                              ...getOption,
                              elem?.options[1],
                            ]);
                          } else {
                            getOption[index] = elem?.options[1];
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[1]}
                      />
                      {elem?.options[2] && elem?.options[3] && (
                        <>
                          <FormControlLabel
                            value={elem?.options[2]}
                            onClick={() => {
                              document
                                .getElementById("sqr" + index)
                                ?.setAttribute(
                                  "style",
                                  "font-size:50px;color:red;"
                                );
                              if (!getOption[index]) {
                                //@ts-ignore
                                setgetOption((getOption) => [
                                  ...getOption,
                                  elem?.options[2],
                                ]);
                              } else {
                                getOption[index] = elem?.options[2];
                              }
                            }}
                            control={<Radio />}
                            label={elem?.options[2]}
                          />
                          <FormControlLabel
                            value={elem?.options[3]}
                            onClick={() => {
                              document
                                .getElementById("sqr" + index)
                                ?.setAttribute(
                                  "style",
                                  "font-size:50px;color:red;"
                                );
                              if (!getOption[index]) {
                                //@ts-ignore
                                setgetOption((getOption) => [
                                  ...getOption,
                                  elem?.options[3],
                                ]);
                              } else {
                                getOption[index] = elem?.options[3];
                              }
                            }}
                            control={<Radio />}
                            label={elem?.options[3]}
                          />
                        </>
                      )}
                    </RadioGroup>
                  </FormControl>
                </>
              );
            } else if (getQue === index && index === 4) {
              return (
                <>
                  <br />
                  <div>
                    <h5>{elem?.question}</h5>
                  </div>
                  {elem?.url && <img src={elem?.url} />}
                  <div style={{marginLeft:'350px'}}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox  />}
                        label={elem?.options[0]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[0])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[0]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[0])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[1]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[1])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[1]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[1])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[2]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[2])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[2]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[2])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[3]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[3])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[3]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[3])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    </FormGroup>
                  </div>
                 
                </>
              );
            }
          })
        : mcqs?.quiz?.French?.map((elem: any, index: any) => {
            if (getQue === index&& index <= 3) {
              return (
                <div key={index}>
                  <div>
                    <h5>{elem?.question}</h5>
                  </div>
                  {elem?.url && <img src={elem?.url} />}
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      defaultValue={getOption[index]}
                    >
                      <FormControlLabel
                        value={elem?.options[0]}
                        onClick={() => {
                          document
                            .getElementById("sqr" + index)
                            ?.setAttribute(
                              "style",
                              "font-size:50px;color:red;"
                            );
                          if (!getOption[index]) {
                            //@ts-ignore
                            setgetOption((getOption) => [
                              ...getOption,
                              elem?.options[0],
                            ]);
                          } else {
                            getOption[index] = elem?.options[0];
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[0]}
                      />
                      <FormControlLabel
                        value={elem?.options[1]}
                        onClick={() => {
                          document
                            .getElementById("sqr" + index)
                            ?.setAttribute(
                              "style",
                              "font-size:50px;color:red;"
                            );
                          if (!getOption[index]) {
                            //@ts-ignore
                            setgetOption((getOption) => [
                              ...getOption,
                              elem?.options[1],
                            ]);
                          } else {
                            getOption[index] = elem?.options[1];
                          }
                        }}
                        control={<Radio />}
                        label={elem?.options[1]}
                      />
                      {elem?.options[2] && elem?.options[3] && (
                        <>
                          <FormControlLabel
                            value={elem?.options[2]}
                            onClick={() => {
                              document
                                .getElementById("sqr" + index)
                                ?.setAttribute(
                                  "style",
                                  "font-size:50px;color:red;"
                                );
                              if (!getOption[index]) {
                                //@ts-ignore
                                setgetOption((getOption) => [
                                  ...getOption,
                                  elem?.options[2],
                                ]);
                              } else {
                                getOption[index] = elem?.options[2];
                              }
                            }}
                            control={<Radio />}
                            label={elem?.options[2]}
                          />
                          <FormControlLabel
                            value={elem?.options[3]}
                            onClick={() => {
                              document
                                .getElementById("sqr" + index)
                                ?.setAttribute(
                                  "style",
                                  "font-size:50px;color:red;"
                                );
                              if (!getOption[index]) {
                                //@ts-ignore
                                setgetOption((getOption) => [
                                  ...getOption,
                                  elem?.options[3],
                                ]);
                              } else {
                                getOption[index] = elem?.options[3];
                              }
                            }}
                            control={<Radio />}
                            label={elem?.options[3]}
                          />
                        </>
                      )}
                    </RadioGroup>
                  </FormControl>
                </div>
              );
            }else if (getQue === index && index === 4) {
              return (
                <>
                  <br />
                  <div>
                    <h5>{elem?.question}</h5>
                  </div>
                  {elem?.url && <img src={elem?.url} />}
                  <div style={{marginLeft:'350px'}}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox  />}
                        label={elem?.options[0]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[0])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[0]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[0])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[1]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[1])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[1]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[1])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[2]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[2])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[2]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[2])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    <FormControlLabel
                        control={<Checkbox />}
                        label={elem?.options[3]}
                        onClick={()=>{
                          if(!getmultiOption.includes(elem?.options[3])){
                          //@ts-ignore
                          setgetmultiOption(getmultiOption=>[...getmultiOption,elem?.options[3]])
                          document
                          .getElementById("sqr" + index)
                          ?.setAttribute(
                            "style",
                            "font-size:50px;color:red;"
                          );
                          }else{
                            removeElement(elem?.options[3])
                            if(getmultiOption.length ===0){
                              document
                              .getElementById("sqr" + index)
                              ?.setAttribute(
                                "style",
                                "font-size:50px;color:grey;"
                              );
                            }
                          }
                        }}
                      />
                    </FormGroup>
                  </div>
                 
                </>
              );
            }
          })}
      {getQue === 4 && (
        <div>
          <Button
            variant="outlined"
            onClick={() => {
              history.push({
                pathname: "/results",
                state: { detail: {getOption,getmultiOption} },
              });
            }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
