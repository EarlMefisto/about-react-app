import { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void
};

type AccordionBodyPropsType = {
  title?: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  // console.log("Accordion rendering");

  let [unwrap, setUnwrap] = useState(false);

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setUnwrap(!unwrap);
        }}
      />
      {!unwrap && <AccordionBody />}
    </div>
  );
}

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log("AccordionTitle rendering");
  return <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>;
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