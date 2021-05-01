import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import {Accordion} from "./Components/Accordion/Accordion";
import {OnOff} from "./Components/OnOff/onOff";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./Components/UncontrolledOnOff/UncontrolledOnOff";

export function App() {
    const [value, setValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState(true)
    const [on, setOn] = useState(false)

    return (
        <div>
            <OnOff />
            <UncontrolledOnOff onClick={setOn} on={on}/>

            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            Article 1

            <Rating onClick={setValue} value={value}/>

            <UncontrolledAccordion titleValue={"Menu"} />
            <Accordion titleValue={'Users'} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
            Article 2

            <UncontrolledRating/>
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    );
}


