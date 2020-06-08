/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Icon from '../../components/Icon/Icon.component';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';

import './ContentFilter.stylesheet.scss';
import SectionHeaderMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';

const FilterContent = ({
  setSelectedList,
  setList,
  selectedList,
  list,
  listAll,
  label
}) => {
  const [showModal, setShowModal] = useState(false);
  const selectedItem = item => {
    const newList = selectedList.concat(item);
    const oldList = list.filter(element => element.id !== item.id);
    setSelectedList(newList);
    setList(oldList);
  };

  const RemoveItem = item => {
    const newList = list.concat(item);
    const oldList = selectedList.filter(element => element.id !== item.id);
    setSelectedList(oldList);
    setList(newList);
  };

  const RenderItem = ({ name, thumb }, action) => {
    // const itemSelected =
    //   selectedList.filter(element => element.id === item.id).length === 1;
    // console.log(itemSelected);
    // const className = classNames(
    //   'filter-content_container--card',
    //   itemSelected ? 'filter-content_container--card-color' : ''
    // );
    return (
      <motion.div
        // initial={{
        //   x: 100
        // }}
        // animate={{
        //   x: -0
        // }}
        // transition={{
        //   duration: 0.8
        // }}
        // className="filter-content_container--card-items"
        onClick={action}
      >
        <div
          className="filter-content_container--card-items"
          // onClick={() => {
          //   selectedItem(item);
          // }}
        >
          {false ? (
            <i
              className="filter-content_container--icon"
              // onClick={() => {
              //   RemoveItem(item);
              // }}
            >
              <Icon iconName="close" size={24} />
            </i>
          ) : (
            <i className="filter-content_container--icon-none" />
          )}
          <div
            className={classNames('filter-content_container--card', {
              'filter-content_container--card-noImage': !thumb
            })}
          >
            {thumb && (
              <img
                className="filter-content_container--img"
                alt="item"
                src={thumb}
                width={55}
                height={55}
                // onClick={() => {
                //   selectedItem(item);
                // }}
              />
            )}
            <span className="filter-content_container--text-img">{name}</span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="filter-content_container">
      <Breakpoint sm down>
        <div className="filter-content_container--content">
          {selectedList.map(b => RenderItem(b))}
          {list.map((item, i) => RenderItem(item))}
          {RenderItem({ name: 'View more' }, () => setShowModal(true))}
        </div>
        {showModal && (
          <div
            className="filter-content_container--show_all"
            onClick={() => setShowModal(false)}
          >
            <div
              className="filter-content_container--show_all-content"
              onClick={() => {}}
            >
              <SectionMobile title={label} action={() => {}} />
              <div className="filter-content_container--show_all-content--content">
                {listAll.map((item, i) => RenderItem(item))}
              </div>
            </div>
          </div>
        )}
      </Breakpoint>
    </div>
  );
};

export default FilterContent;
