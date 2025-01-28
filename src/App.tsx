import "./App.css";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import { StyleBoxArticle1 } from "./components/Btn.styled";
import { StyleBtnArticle1 } from "./components/Btn.styled";
import { StyleBoxArticle2 } from "./components/Btn.styled";
import { StyleBtnArticle2 } from "./components/Btn.styled";
import { StyleLinkAccordion } from "./components/Btn.styled";
import Menu from "./components/Menu.styled";
import { theme } from "./GlobalStyles/Theme.styles";
import { Accordion } from "./components/Accordion/Accordion";
import { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";
import { useState } from "react";
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";
import { OnOff } from "./components/onOff/OnOff";
import { UncontrolledInput } from "./components/Input/UncontrolledInput";
import { Input } from "./components/Input/Input";
import { Select } from "./components/Select/Select";
import { NewComponent } from "./components/NewComponent";

type PageTitlePropsType = {
  title: string;
};

function App() {
  // console.log("App rendering");
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionUnwrap, setAccordionUnwrap] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className="App">
      <PageTitle title={"This is APP component"} />
      <Menu>
        <b>Menu</b>
        <ul>
          <li>
            <a href="">Item1</a>
          </li>
          <li>
            <a href="">Item2</a>
          </li>
          <li>
            <a href="">Item3</a>
          </li>
        </ul>
      </Menu>
      <PageTitle title={"My friends"} />
      <StyleBoxArticle1>
        <StyleBtnArticle1 color={"red"} fontSize={"20px"}>
          Article 1
        </StyleBtnArticle1>
        <StyleBtnArticle1 color={"black"} fontSize={"40px"}>
          Article 2
        </StyleBtnArticle1>
        <StyleBtnArticle1 color={theme.colors.first} primary>
          Article 3
        </StyleBtnArticle1>
        <StyleBtnArticle1 color={theme.colors.first} outlined active>
          Article 4
        </StyleBtnArticle1>
      </StyleBoxArticle1>
      <StyleLinkAccordion>
        <Accordion
          titleValue="Menu"
          unwrap={accordionUnwrap}
          onChange={() => {
            setAccordionUnwrap(!accordionUnwrap);
          }}
          items={[]}
          onClick={() => {}}
        />
      </StyleLinkAccordion>
      <UncontrolledAccordion titleValue="Menu" />
      <OnOff on={switchOn} onChange={setSwitchOn} />
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      <StyleBoxArticle2>
        <StyleBtnArticle2>Article 5</StyleBtnArticle2>
      </StyleBoxArticle2>
      <Rating onClick={setRatingValue} value={ratingValue} />
      <UncontrolledRating onChange={setRatingValue} />
      <Input value="Uno" />
      <UncontrolledInput />
      <NewComponent/>
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  // console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
