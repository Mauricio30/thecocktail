/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import { getRecentSearch } from '../../utils/utils';
import Icon from '../../components/Icon/Icon.component';

import './RecentSearch.stylesheet.scss';

const RecentSearch = ({ setHide }) => {
  const [recentSearch, setRecentSearch] = useState([]);

  const recentSearchClick = searchText => {
    console.log('look for ', searchText);
    setHide();
  };

  useEffect(() => {
    if (!recentSearch.length) setRecentSearch(getRecentSearch());
  }, []);

  const RecentSearchContentMobile = searchText => (
    <div
      className="recent-search_container--card"
      onClick={() => recentSearchClick(searchText)}
    >
      <Icon iconName={'search'} size={13} />
      <span className="recent-search_container--title">{searchText}</span>
    </div>
  );

  return (
    recentSearch && (
      <div className="recent-search_container">
        <Breakpoint sm down>
          <SectionMobile
            title="Recent search"
            action={() => {}}
            showLine={false}
          />
          <div className="recent-search_container--content">
            {recentSearch.map(searchText => {
              return RecentSearchContentMobile(searchText);
            })}
          </div>
        </Breakpoint>
        <Breakpoint sm down />
      </div>
    )
  );
};

export default RecentSearch;
