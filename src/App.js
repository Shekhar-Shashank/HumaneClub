import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import Pagination from "@material-ui/lab/Pagination";
import BlogData from "./blogs.json";
import ReactPaginate from "react-paginate";
// import Filter from './components/Filter';

// import Navbar from './components/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  const [users, setUsers] = useState(BlogData);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Grid item xs={12} sm={6} md={3}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://narishakti.in/wp-content/uploads/sites/9/2021/10/image1-2-220x132.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.headline}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    {user.authorName}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.date}
                  </Typography>
                </Box>
              </Box>
              <Box></Box>
            </CardActions>
          </Card>
        </Grid>
        /* <h3>{user.headline}</h3>
        <h3>{user.authorName}</h3>
        <h3>{user.date}</h3>
        <h3>{user.category}</h3> */
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {/* <Router>
      <Navbar/>
      </Router> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <span>
            <Navbar.Brand href="#home">The Humane Club</Navbar.Brand>
          </span>
          <span>
            <img
              src="https://humane.club/narishakti/wp-content/uploads/sites/9/2021/06/ns-r.png"
              alt="narishakti.png"
              height="30px"
              width="110px"
            />
          </span>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Join our network
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Filter/> */}
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Gallery
        </Typography>
        <Grid container spacing={3}>
          {displayUsers}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Grid>

        {/* <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box> */}
      </Container>
      {/* {displayUsers} */}
    </div>
  );
}

export default App;
