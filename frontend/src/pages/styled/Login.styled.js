import styled from "styled-components";

const NavContainer = styled.nav`
  background-image: linear-gradient(270deg, #2874f0, #1958b2);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  /* border: 1px solid red; */
  margin: 0px 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 770px) {
    margin: 0px 20px;
  }
`;

const LeftContainer = styled.div`
  font-size: 24px;
  font-weight: 500;

  .homepage-link {
    /* border: 1px solid red; */
    display: block;
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .help-icon {
    font-size: 33px;
    margin-right: 15px;
  }

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
`;

const OtherContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  /* border: 1px solid gray; */
  width: 290px;
  max-width: 430px;
  margin: 50px 20px;

  @media screen and (max-width: 770px) {
    margin: 35px 20px;
  }

  @media screen and (max-width: 426px) {
    margin: 25px 20px;
  }

  h2 {
    @media screen and (max-width: 330px) {
      font-size: 21px;
    }
  }
`;

const Form = styled.form`
  /* border: 1px solid blue; */
  margin: 12px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
  }

  input {
    padding: 8px 5px;
    margin: 2px 0px 12px 0px;
    border: none;
    outline: 1px solid #1a1a1a;
    border-radius: 3px;
    font-size: 14px;

    &:focus {
      outline: 2px solid #2874f0;
    }
  }

  button {
    background-color: #256ee4;
    border: none;
    border-radius: 3px;
    margin: 12px 0px;
    padding: 11px;
    color: white;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #1a59b4;
    }
  }
`;

const MethodContainer = styled.div`
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0px 20px 0px;
  margin: 20px 0px 15px 0px;
  position: relative;

  #options-text {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 220px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    background-color: white;
  }

  div {
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      transform: scale(0.95);
      border: 1px solid #2874f0;
    }

    &:last-of-type {
      margin-right: 0px;
    }

    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
`;

const TermConditioContainer = styled.div`
  font-size: 13px;
  color: #1a1a1a;
  text-align: center;

  span {
    color: #2874f0;
    cursor: pointer;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #dcdcdc;
  margin-top: 15px;
  padding: 15px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #1a1a1a;
`;

export {
  NavContainer,
  NavWrapper,
  LeftContainer,
  RightContainer,
  OtherContainer,
  Wrapper,
  Form,
  MethodContainer,
  TermConditioContainer,
  Copyright,
};
