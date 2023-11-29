import CSS from 'csstype'

const inputFieldStyle:CSS.Properties = {
    marginBottom:'20px',
    height:'30px',
    textIndent:'20px'
}

type SetArrayProps = {
    setResArray : React.Dispatch<React.SetStateAction<any>>;
}



export default function InputField (setResArray : SetArrayProps) {
    const handleEvent = (e:React.FormEvent<HTMLInputElement>) => {
        // console.log([1, 2, 3, 4]);
        setResArray.setResArray([1, 2, 3, 4]);
    }

    return (
        <>
            <input style={inputFieldStyle} placeholder='Please input an array of numbers by seperating them with comma.' onChange={(e)=>handleEvent(e)}/>
        </>
    )
}