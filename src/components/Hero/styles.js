import styled from "styled-components";

export const MainContainer = styled.section`
    padding: 3% 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TextContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const TextContainerH1 = styled.h1`
  text-align: left;
  font-family: "Krona One", sans-serif;
  color: #3f51b5;
  font-size: 2.25rem;

  strong {
    color: #1976d2;
  }
`;


export const TextContainerH2 = styled.h1`
  text-align: left;
  font-family: "Krona One", sans-serif;
  color: #333;
  font-size: 1.2rem;
  width: 85%;
  word-spacing: 15px;
  line-height: 45px;

  span {
    background-color: #fbbf24;
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

export const TextContainerButtons = styled.a`
  margin-top: 5%;
  display: flex;
  gap: 52px;
  text-align: center;

  a {
    background-color: #3f51b5;
    width: 30%;
    padding: 1rem;
    border-radius: 20px;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-weight: bolder;

    &:hover {
      background-color: #fbbf24;
      color: #333;
    }
  }

  .login {
    background-color: #1976d2;
  }
`;

export const ImageContainer = styled.div`
    img{
        width: 90%;
    }
`

