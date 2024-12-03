import styled from 'styled-components';

const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }

  li > a {
    color: violet;
  }

  li + li {
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
  flex-direction: column;
}
`

export default Menu;