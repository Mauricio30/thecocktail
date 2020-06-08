import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
import RouteAnimate from '../../animations/Route/Route.animation';
import LayoutTemplate from '../../templates/Layout/Layout.template';
import { Row, Col } from '../../components/Grid/Grid.component';
import Footer from '../Footer/Footer.container';
import HeaderMobile from '../Header/HeaderMobile/HeaderMobile.container';
import HeaderDesktop from '../Header/HeaderDesktop/HeaderDesktop.container';
import PopularDrinks from '../PopularDrinks/PopularDrinks.container';
import Recommended from '../Recommended/Recommended.container';
import Filter from '../Filter/Filter.container';
import './Page.stylesheet.scss';

// const CharactersQuery = () => {
//   return (
//     <Query
//       query={gql`
//         {
//           characters {
//             results {
//               id
//               name
//             }
//           }
//         }
//       `}
//     >
//       {({ loading, error, data }) => {
//         if (loading) return <p>Loading...</p>;
//         if (error) return <p>Error</p>;
//         return data.characters.results.map(character => {
//           return <p>{character.name}</p>;
//         });
//       }}
//     </Query>
//   );
// };

const PageContainer = () => {
  const [focus, setFocus] = useState(false);
  const [positionInitial, setPosition] = useState(0);

  const RenderBanner = () => (
    <>
      <Breakpoint sm down>
        <HeaderMobile
          focus={focus}
          setFocus={setFocus}
          positionInitial={positionInitial}
          setPosition={setPosition}
        />
      </Breakpoint>
      <Breakpoint md up>
        <HeaderDesktop />
      </Breakpoint>
    </>
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
            <Filter />
            <PopularDrinks />
            <Recommended />
            {/* <CharactersQuery /> */}
          </Col>
        </Row>
      </LayoutTemplate>
      <Footer />
    </RouteAnimate>
  );
};

export default PageContainer;