type AccordionPropsType = {
  titleValue: string;
  unwrap: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

type AccordionBodyPropsType = {
  title?: string;
  items: ItemType[];
  onClick: (value: any) => void;
};

type ItemType = {
  title: string;
  value: any;
};

export function Accordion(props: AccordionPropsType) {
  // console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.unwrap && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
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
        {props.items.map((i, index) => (
          <li
            key={index}
            onClick={() => {
              props.onClick(i.value);
            }}
          >
            {i.title}
          </li>
        ))}
      </ul>
    </>
  );
}
