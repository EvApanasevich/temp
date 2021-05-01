
type OnOffPropsType = {
    onClick: (on: boolean) => void
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
        display: 'inline-block',
        marginLeft: '5px'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }
    const indicator = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: props.on ? 'green' : 'red',
        display: 'inline-block',
        marginLeft: '5px'
    }

    return (<div>
            <div style={onStyle} onClick={() => props.onClick(true)}>on</div>
            <div style={offStyle} onClick={() => props.onClick(false)}>off</div>
            <div style={indicator}></div>
        </div>
    )
}