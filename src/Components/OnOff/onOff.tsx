import {useState} from "react";

/*
type OnOffPropsType = {
    on: boolean
}
*/

export const OnOff = () => {

   const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
        display: 'inline-block',
        marginLeft: '5px'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (<div>
            <div style={onStyle} onClick={() => setOn(true)}>on</div>
            <div style={offStyle} onClick={() => setOn(false)}>off</div>
            <div style={indicator}></div>
        </div>
    )
}