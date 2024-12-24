type AccordionPropsType = {
  titleValue: string;
  unwrap: boolean;
  onChange: () => void;
};

type AccordionBodyPropsType = {
  title?: string;
};

export function Accordion(props: AccordionPropsType) {
  // console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.unwrap && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  // console.log("AccordionTitle rendering");
  return <h3 onClick={props.onChange}>--- {props.title} ---</h3>;
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
