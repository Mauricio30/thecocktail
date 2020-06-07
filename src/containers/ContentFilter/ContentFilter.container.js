/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import classNames from 'classnames';
import { motion, useMotionValue } from 'framer-motion';
import Botella from '../../assets/images/Bote.png';
import Icon from '../../components/Icon/Icon.component';

import './ContentFilter.stylesheet.scss';

const FilterContent = () => {
  const a = [
    {
      id: '1',
      value: true
    },
    {
      id: '2',
      value: false
    },
    {
      id: '3',
      value: true
    }
  ];
  const [selectedList, setSelectedList] = useState([]);
  const [list, setList] = useState(a);

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
    const x = useMotionValue(0);
    console.log(x, x.get());
    return (
      <motion.div
        animate={{ x: 100 }}
        transition={{
          duration: 0.3
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
              src={Botella}
              width={55}
              height={55}
              onClick={() => {
                selectedItem(item);
              }}
            />
            <span className="filter-content_container--text-img">
              {item.id}
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
