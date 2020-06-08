/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Col } from '../../../components/Grid/Grid.component';
import Input from '../../../components/Input/Input.component';
import Icon from '../../../components/Icon/Icon.component';
import '../../Page/Page.stylesheet.scss';
import { addRecentSearch, getRecentSearch } from '../../../utils/utils';
import { connect } from 'react-redux';
import {
  setTempSearchText as setTempSearchTextAction,
  setSearchText as setSearchTextAction
} from '../../../actions/Application/Application.action';

const HeaderMobile = ({
  header,
  setTempSearchText,
  setSearchText,
  focus,
  setFocus,
  positionInitial,
  setHide
}) => {
  const { tempSearchText, searchText } = header;

  const focusHandler = () => {
    setTempSearchText(searchText);
    setFocus();
  };

  const goBackHandler = () => {
    setTempSearchText(searchText);
    setHide();
  };

  const searchHandler = () => {
    if (focus) {
      if (tempSearchText) {
        setSearchText(tempSearchText);
        addRecentSearch(tempSearchText);
      }

      setHide();
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
              height: '190px',
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
      <motion.button
        initial={{
          opacity: focus ? 0 : 1
        }}
        animate={{
          opacity: focus ? 1 : 0
        }}
        transition={{
          duration: 0.5
        }}
      >
        <button className="icon" onClick={goBackHandler}>
          <Icon iconName="left" size={30} />
        </button>
      </motion.button>
      <motion.h1
        initial={{
          opacity: focus ? 1 : 0
        }}
        animate={{
          opacity: focus ? 0 : 1
        }}
        transition={{
          duration: 0.5
        }}
      >
        <h1 className="page_container--header-title bold">
          What we’ll drink tonight?
        </h1>
      </motion.h1>
      <Col sm={12} className="page_container--form-input">
        <Input
          type="text"
          placeholder="Search for a drink"
          iconRight="search"
          // onKeyUp={setSearchText}
          value={tempSearchText}
          onChange={setTempSearchText}
          onIconClick={searchHandler}
          focus2={focus}
          onFocus={focusHandler}
        />
      </Col>
    </motion.div>
  );
};

const mapStateToProps = state => ({
  header: state.application.header
});

const mapDispatchToProps = dispatch => ({
  setTempSearchText: tempSearchText =>
    dispatch(setTempSearchTextAction(tempSearchText)),
  setSearchText: searchText => dispatch(setSearchTextAction(searchText))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile);
