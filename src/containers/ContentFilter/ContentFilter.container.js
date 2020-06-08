/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Breakpoint } from 'react-socks';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Icon from '../../components/Icon/Icon.component';

import './ContentFilter.stylesheet.scss';

const FilterContent = ({ setSelectedList, setList, selectedList, list }) => {
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

  const RenderItem = item => {
    const itemSelected =
      selectedList.filter(element => element.id === item.id).length === 1;
    console.log(itemSelected);
    const className = classNames(
      'filter-content_container--card',
      itemSelected ? 'filter-content_container--card-color' : ''
    );
    return (
      <motion.div
        initial={{
          x: 100
        }}
        animate={{
          x: -0
        }}
        transition={{
          duration: 0.8
        }}
        className="filter-content_container--card-items"
      >
        <div className="filter-content_container--card-items">
          {itemSelected ? (
            <i
              className="filter-content_container--icon"
              onClick={() => {
                RemoveItem(item);
              }}
            >
              <Icon iconName="close" size={24} />
            </i>
          ) : (
            <i className="filter-content_container--icon-none" />
          )}
          <div className={className}>
            <img
              className="filter-content_container--img"
              alt="item"
              src={item.thumb}
              width={55}
              height={55}
              onClick={() => {
                selectedItem(item);
              }}
            />
            <span className="filter-content_container--text-img">
              {item.name}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="filter-content_container">
      <Breakpoint sm down>
        <div className="filter-content_container--content">
          {selectedList.map(b => {
            return RenderItem(b);
          })}
          {list.map(b => {
            return RenderItem(b);
          })}
        </div>
      </Breakpoint>
    </div>
  );
};

export default FilterContent;
