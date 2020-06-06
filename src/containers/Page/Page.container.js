import React from 'react';
// import { Breakpoint } from 'react-socks';
import { motion } from 'framer-motion';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import RouteAnimate from '../../animations/Route/Route.animation';
// import StepWelcomeAnimation from '../../animations/SignIn/StepWelcome/StepWelcome.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';

// import Dots from '../../animations/frames/Dots/Dots.framer';

import { Row, Col } from '../../components/Grid/Grid.component';
import Input from '../../components/Input/Input.component';
// import GoogleLogin from '../../components/GoogleLogin/GoogleLogin.component';
// import FacebookLogin from '../../components/FacebookLogin/FacebookLogin.component';
// import { ReactComponent as BannerTheCocktail } from '../../assets/images/Logo.png';
import Footer from '../Footer/Footer.container';
import './Page.stylesheet.scss';

const CharactersQuery = () => {
  return (
    <Query
      query={gql`
        {
          characters {
            results {
              id
              name
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return data.characters.results.map(character => {
          return <p>{character.name}</p>;
        });
      }}
    </Query>
  );
};

const PageContainer = ({ routes }) => {
  console.log(routes);
  const RenderBanner = () => (
    <motion.div
      initial={{
        opacity: 0,
        y: 200,
        scale: 0,
        borderRadius: ['30%', '50%', '100%']
      }}
      animate={{
        ease: 'easeInOut',
        opacity: 1,
        scale: 1,
        y: 0,
        borderRadius: ['0', '0', '40px', '40px']
      }}
      transition={{
        duration: 0.25
      }}
      className="page_container--bubble"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <h1 className="page_container--header-title">
        What we’ll drink tonight?
      </h1>
      <Col sm={12} className="page_container--form-input">
        <Input
          type="text"
          placeholder="Search for a drink"
          iconRight="search"
        />
      </Col>
    </motion.div>
  );

  return (
    <RouteAnimate>
      <LayoutTemplate
        className="page_container"
        paw
        fluid
        childrenNoContainer={<RenderBanner />}
      >
        <Row>
          <Col sm={12}>
            <CharactersQuery />
          </Col>
        </Row>
      </LayoutTemplate>
      <Footer />
    </RouteAnimate>
  );
};

export default PageContainer;
