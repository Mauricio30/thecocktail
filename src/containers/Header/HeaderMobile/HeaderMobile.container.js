import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Col } from '../../../components/Grid/Grid.component';
import Input from '../../../components/Input/Input.component';
import Icon from '../../../components/Icon/Icon.component';
import '../../Page/Page.stylesheet.scss';
import { addRecentSearch, getRecentSearch } from '../../../utils/utils';

const HeaderMobile = ({ focus, positionInitial, setFocus, setPosition }) => {
  const [searchText, setSearchText] = useState('');

  const focusHandler = () => {
    setFocus(true);
    setPosition(0);
    console.log('RecentSearchTexts', getRecentSearch());
  };
  const hideHandler = () => {
    setFocus(false);
    setPosition(-80);
  };
  const searchHandler = () => {
    if (focus) {
      if (searchText) addRecentSearch(searchText);
      hideHandler();
    }
  };

  return (
    <motion.div
      initial={{
        y: positionInitial
      }}
      animate={
        focus
          ? {
              y: -80,
              height: '100px',
              paddingLeft: '40px'
            }
          : {
              y: 0,
              height: '300px'
              // paddingLeft: '0px'
            }
      }
      transition={{
        duration: 0.5
      }}
      className="page_container--bubble"
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {focus ? (
        // eslint-disable-next-line react/button-has-type
        <button className="icon" onClick={hideHandler}>
          <Icon iconName="left" size={30} />
        </button>
      ) : null}
      <h1 className="page_container--header-title bold">
        What we’ll drink tonight?
      </h1>
      <Col sm={12} className="page_container--form-input">
        <Input
          type="text"
          placeholder="Search for a drink"
          iconRight="search"
          onKeyUp={setSearchText}
          onIconClick={searchHandler}
          onFocus={focusHandler}
        />
      </Col>
    </motion.div>
  );
};

export default HeaderMobile;
