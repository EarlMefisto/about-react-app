

function Accordion() {
    return <div>
        <AccordionTitle title={"Меню"} />
        <AccordionBody title={"Список"} />
    </div>
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    // console.log("AccordionTitle rendering");
    return (
        <h3>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    title: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    // console.log("AccordionBody rendering");
    return (
        <><h4>{props.title}</h4><ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul></>
    )
}

export default Accordion;