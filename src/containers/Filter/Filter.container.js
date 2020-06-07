/* eslint-disable react/button-has-type */
import React from 'react';
import { Breakpoint } from 'react-socks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import FilterContent from '../ContentFilter/ContentFilter.container';
import './Filter.stylesheet.scss';

const Filter = () => {
  //   const a = [
  //     {
  //       id: '1',
  //       value: true
  //     },
  //     {
  //       id: '2',
  //       value: false
  //     },
  //     {
  //       id: '3',
  //       value: true
  //     }
  //   ];
  return (
    <div className="filter_container">
      <SectionMobile title="Filters" action={() => {}} />
      <Breakpoint sm down>
        <Tabs>
          <TabList className="filter_container--tab-title">
            <Tab>Liquors</Tab>
            <Tab>Complements</Tab>
            <Tab>Taste</Tab>
          </TabList>

          <TabPanel>
            <FilterContent />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Filter;
