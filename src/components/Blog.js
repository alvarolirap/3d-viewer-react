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
  { title: 'Chancay', url: '#' },
  { title: 'Lurín', url: '#' },
  { title: 'Maranga', url: '#' },
  { title: 'Nazca', url: '#' },
  { title: 'Pando', url: '#' },
  { title: 'HOLA', url: '#' },
];

const mainFeaturedPost = {
  title: 'Lurín',
  description:
    "Huacos de la cultura Lurín",
  image: 'https://arqueologiadelperu.com/wp-content/uploads/2012/11/santuario_pachacamac.jpg',
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
    'Típica vasija de la cultura Lurín del siglo XIII encontrada en Pachacamac.',
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
