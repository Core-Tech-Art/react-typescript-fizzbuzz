import CSS from 'csstype'

const outPutFieldStyle:CSS.Properties = {
    height:'130px',
    textIndent:'20px',
    fontSize:'16px'
}

interface ResultProps {
    result: Number[];
}

export default function OutField (props: ResultProps) {
    return(
        <>
            <textarea style={outPutFieldStyle} readOnly={true} value="The result will be displayed in here.">{props.result.toString()}</textarea>
        </>
    )
}