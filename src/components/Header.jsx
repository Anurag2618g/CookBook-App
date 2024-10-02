import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid>
          <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo image" className='img-fluid' style={{ width: '250px', height: 'auto' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Button variant="contained" sx={{ backgroundColor: '#001F3F', color: 'white', width: 150 }}>Menu</Button></Nav.Link>
              <Nav.Link href="#action2"><Button variant="contained" sx={{ backgroundColor: '#001F3F', color: 'white', width: 150 }} endIcon={<ListIcon />}>My Recipes</Button></Nav.Link>
              <Nav.Link href="#action2"><Button variant="contained" sx={{ backgroundColor: '#001F3F', color: 'white', width: 150 }} endIcon={<ShoppingBagIcon />}>ShoppingList</Button></Nav.Link>
              <Nav.Link href="#action2"><Button variant="contained" sx={{ backgroundColor: '#001F3F', color: 'white', width: 150 }} endIcon={<FavoriteIcon />}>Favorites</Button></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="contained" type="submit" sx={{ backgroundColor: '#001F3F', color: 'white' }} endIcon={<SearchIcon />}></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='divider'></div>
    </div>
  );
}

export default Header;