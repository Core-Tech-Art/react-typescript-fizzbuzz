import {useEffect, useState} from 'react';
import CSS from 'csstype';
import InputField from "../components/InputField";
import OutField from "../components/OutField";


const GridLayOut: CSS.Properties = {
    width:'30%',
    margin:'auto',
    padding:'10px',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column'
}

const inputFieldStyle:CSS.Properties = {
    marginBottom:'20px',
    height:'30px',
    textIndent:'20px'
}

const outPutFieldStyle:CSS.Properties = {
    height:'130px',
    textIndent:'20px',
    fontSize:'16px'
}
export default function MainGridLayout(){
    const [resArray, setResArray] = useState<String[]>([])
    useEffect(() => {
    }, [])

    const handleEvent = (e:React.FormEvent<HTMLInputElement>) => {
        let inputString : String;
        let inputArray : String[];
        let resultArray : String[];
        inputString = (e.target as any).value;
        inputString = inputString.trim();
        inputArray = inputString.split(',');
        console.log(inputArray.length);
        for(let i = 0; i < inputArray.length - 1; i++)
        {
            if(Number(inputArray[i]) % 15 === 0)
            {
                inputArray[i] = " FizzBuzz";
            }
            else if(Number(inputArray[i]) % 3 === 0 )
            {
                inputArray[i] = " Fizz";
            }
            else if(Number(inputArray[i]) % 5 === 0 )
            {
                inputArray[i] = " Buzz";
            }
        }
        setResArray(inputArray);
        // console.log([1, 2, 3, 4]);
    }
    return(
        <div style={GridLayOut}>
            <h1 style={{'color':'black', 'fontSize':'20px'}}>FizzBuzz puzzle</h1>
            <input style={inputFieldStyle} placeholder='Please input an array of numbers by seperating them with comma.' onChange={(e)=>handleEvent(e)}/>
            <textarea style={outPutFieldStyle} readOnly={true} value={resArray.toString()}>{resArray.toString()}</textarea>
            {/* <InputField setResArray={setResArray}/>
            <OutField result={resArray}/> */}
        </div>
    )
}