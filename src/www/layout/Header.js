import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import useDispatch from "../lib/useDispatch";
import { replaceView } from "../ducks/view/actions/replaceView";
import useSelect from "../lib/useSelect";
import hasPlayer from "../ducks/game/selectors/hasPlayer";

function Header() {
  const goHome = useDispatch(replaceView, { root: "Home" });
  const goPlay = useDispatch(replaceView, { root: "Play" });
  const goNew = useDispatch(replaceView, { root: "New" });
  const goBlog = useDispatch(replaceView, { root: "Blog" });
  const logged = useSelect(hasPlayer);
  const goGame = useDispatch(replaceView, { root: "Game" });

  return (
    <Navbar bg="light" expand="lg" data-testid="header">
      <Container>
        <Navbar.Brand onClick={goHome}>●▶ PLANETS GAME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={goHome}>Home</Nav.Link>
            <Nav.Link onClick={goPlay}>Play</Nav.Link>
            {logged && <Nav.Link onClick={goGame}>Game</Nav.Link>}
            <Nav.Link onClick={goNew}>New</Nav.Link>
            <Nav.Link onClick={goBlog}>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
