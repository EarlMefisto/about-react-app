
import './App.css';
import Accordion from './components/Accordion';
import { Rating } from './components/Rating';
import { StyleBoxArticle1 } from './components/Btn.styled';
import { StyleBtnArticle1 } from './components/Btn.styled';
import { StyleBoxArticle2 } from './components/Btn.styled';
import { StyleBtnArticle2 } from './components/Btn.styled';
import { StyleLinkAccordion } from './components/Btn.styled';
import Menu from './components/Menu.styled';
import { theme } from './GlobalStyles/Theme.styles';


function App() {
  // console.log("App rendering");
  return (
    <div>
      <PageTitle title={"This is Sparta!!!"} />
      <Menu><b>Menu</b>
        <ul>
          <li><a href="">Item1</a></li>
          <li><a href="">Item2</a></li>
          <li><a href="">Item3</a></li>
        </ul>
      </Menu>
      <PageTitleTwo title={"Help"} />
      <StyleBoxArticle1>
        {/* <StyleBtnArticle1 color={'red'} fontSize={'20px'}>Article 1</StyleBtnArticle1>
        <StyleBtnArticle1 color={'black'} fontSize={'40px'}>Article 3</StyleBtnArticle1> */}

        <StyleBtnArticle1 color={theme.colors.first} primary>Article 1</StyleBtnArticle1>
        <StyleBtnArticle1 color={theme.colors.first} outlined active>Article 1</StyleBtnArticle1>
      </StyleBoxArticle1>
      <Rating value={3} />
      <StyleLinkAccordion ><Accordion /></StyleLinkAccordion>
      <StyleBoxArticle2>
        <StyleBtnArticle2 >Article 2</StyleBtnArticle2>
      </StyleBoxArticle2>
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Rating value={0} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  // console.log("PageTitle rendering");
  return <h1>{props.title}</h1>
}

type PageTitleTwoPropsType = {
  title: string
}

function PageTitleTwo(props: PageTitleTwoPropsType) {
  return <h2>{props.title}</h2>
}

export default App;