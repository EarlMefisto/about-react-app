import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // unwrap: boolean;
};

type AccordionTitlePropsType = {
  title: string;
};

type AccordionBodyPropsType = {
  title?: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  // console.log("Accordion rendering");

  let [unwrap, setUnwrap] = useState(false);

  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button onClick={() => {setUnwrap(!unwrap)}}>Toggle</button>
      {!unwrap && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log("AccordionTitle rendering");
  return <h3>--- {props.title} ---</h3>;
}

function AccordionBody(props: AccordionBodyPropsType) {
  // console.log("AccordionBody rendering");
  return (
    <>
      <h4>--- {props.title} ---</h4>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}
