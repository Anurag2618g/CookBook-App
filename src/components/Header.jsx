import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "2.5rem",
              letterSpacing: "0.05rem",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              color: "#070F2B",
            }}
          >
            CookBook
            <img className="icon" src={`${import.meta.env.BASE_URL}/icon.svg`} alt="icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/recipe-form">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001F3F",
                    color: "white",
                    width: 150,
                  }}
                  endIcon={<AddIcon />}
                >
                  Add Recipe
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/shopping-list">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001F3F",
                    color: "white",
                    width: 150,
                  }}
                  endIcon={<ShoppingBagIcon />}
                >
                  ShoppingList
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001F3F",
                    color: "white",
                    width: 150,
                  }}
                  endIcon={<FavoriteIcon />}
                >
                  Favorites
                </Button>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#001F3F", color: "white" }}
                endIcon={<SearchIcon />}
              ></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
