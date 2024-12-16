import "./App.css";
import { Rating } from "./components/Rating/Rating";
import { StyleBoxArticle1 } from "./components/Btn.styled";
import { StyleBtnArticle1 } from "./components/Btn.styled";
import { StyleBoxArticle2 } from "./components/Btn.styled";
import { StyleBtnArticle2 } from "./components/Btn.styled";
import { StyleLinkAccordion } from "./components/Btn.styled";
import Menu from "./components/Menu.styled";
import { theme } from "./GlobalStyles/Theme.styles";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/onOff/OnOff";
import { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";

type PageTitlePropsType = {
  title: string;
};

function App() {
  // console.log("App rendering");
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
      <Rating value={3} />
      <UncontrolledRating/>
      <StyleLinkAccordion>
        <OnOff />
        <Accordion titleValue="Menu" unwrap={true} />
        <Accordion titleValue="Users" unwrap={false} />
      </StyleLinkAccordion>
      <UncontrolledAccordion titleValue="Menu" />
      <StyleBoxArticle2>
        <StyleBtnArticle2>Article 5</StyleBtnArticle2>
      </StyleBoxArticle2>
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  // console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
