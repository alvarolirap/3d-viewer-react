import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ThreeContainer from "./ThreeContainer.js";
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
//import ThreeContainer from "../components/ThreeContainer.js;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Vessel', url: '#' },
  { title: 'Cone Vase', url: '#' },
  { title: 'Bowl', url: '#' },
  { title: 'Plate', url: '#' },
  { title: 'Basin', url: '#' },
  { title: 'Statue', url: '#' },
  { title: 'Animal Bottle', url: '#' },
  { title: 'Hollow', url: '#' },
  { title: 'Vase', url: '#' },
  { title: 'Animal Head', url: '#' },
  { title: 'Flat Canteen', url: '#' },
];

const mainFeaturedPost = {
  title: 'Vessel',
  description:
    "Vasijas",
  image: 'https://i.pinimg.com/564x/46/d4/52/46d452cf940320bb8f5da9effa1ecf9f.jpg',
  imgText: 'main image description',
  //linkText: 'Continue reading…',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

const sidebar = {
  title: 'Acerca',
  description:
    'Típica vasija del siglo XIII encontrada en Lurín Ver imagen de pieza arqueológica incompleta',
  archives: [
    { title: 'Enero 2020', url: '#' },
    { title: 'Febrero 2020', url: '#' },
    { title: 'Marzo 2020', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="3D Viewer" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <ThreeContainer></ThreeContainer>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
      <Footer></Footer>
    </React.Fragment>
  );
}
