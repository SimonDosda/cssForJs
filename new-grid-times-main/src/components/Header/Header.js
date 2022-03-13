import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <SecondActionGroup>
            <button className="mobile">
              <User size={24} />
            </button>
            <SubscribeAction className="desktop">
              <Button>SUBSCRIBE</Button>
              <span>Already a subscriber?</span>
            </SubscribeAction>
          </SecondActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    background: transparent;
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SecondActionGroup = styled(ActionGroup)`
  .desktop {
    display: None;
  }
  @media ${QUERIES.laptopAndUp} {
    .desktop {
      display: revert;
    }
    .mobile {
      display: none;
    }
  }
`;

const SubscribeAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    padding: 8px;
    font-size: calc(14 / 16 * 1rem);
    font-style: italic;
    text-decoration: underline;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    margin-top: -64px;
  }
`;

export default Header;
