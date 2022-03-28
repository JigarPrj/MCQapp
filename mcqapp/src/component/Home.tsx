import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useSelector ,useDispatch} from 'react-redux';
//@ts-ignore
import { useHistory } from "react-router-dom";
import {GET_DATA} from '../allAction/action'
export default function Home() {
  const [name, setname] = useState<string>("");
  const [gender, setgender] = useState<string>("");
  const [language, setlanguage] = useState<string>("");
  const [disable, setdisable] = useState<boolean>(true);
  const history=useHistory()
  //dispatching method
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: "2px solid",
        padding: "20px",
        width: "25%",
        margin: "auto",
        textAlign:'start'
      }}
    >
      <div style={{margin:'10px'}}>
        <h5>Fill Details:</h5>
        <TextField
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          onChange={(e: any) => {
            setname(e?.target?.value);
            if (language && gender && e?.target?.value) {
              setdisable(false);
            } else {
              setdisable(true);
            }
          }}
        />
      </div>
      <div>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            style={{ marginRight: "32px" }}
          >
            Gender :
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              onClick={(event: any) => {
                setgender(event?.target?.value);
                if (name && language  && event?.target?.value) {
                  setdisable(false);
                } else {
                  setdisable(true);
                }
              }}
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel
              value="male"
              onClick={(event: any) => {
                setgender(event?.target?.value);
                if (name && language  && event?.target?.value) {
                  setdisable(false);
                } else {
                  setdisable(true);
                }
              }}
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="other"
              onClick={(event: any) => {
                setgender(event?.target?.value);
                if (name && language  && event?.target?.value) {
                  setdisable(false);
                } else {
                  setdisable(true);
                }
              }}
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Test Language :
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="English"
              onClick={(event: any) => {
                setlanguage(event?.target?.value);
                if (name && gender && event?.target?.value) {
                  setdisable(false);
                } else {
                  setdisable(true);
                }
              }}
              control={<Radio />}
              label="English"
            />
            <FormControlLabel
              value="French"
              onClick={(event: any) => {
                setlanguage(event?.target?.value);
                if (name && gender && event?.target?.value) {
                  setdisable(false);
                } else {
                  setdisable(true);
                }
              }}
              control={<Radio />}
              label="French"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <Button variant="outlined" disabled={disable}
        onClick={()=>{
            if (name && gender && language) {
                const data={
                    name:name,
                    gender:gender,
                    language:language
                }
              dispatch(GET_DATA(data))
              history.push("/questions")
              } else {
                setdisable(true);
              }
        }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
