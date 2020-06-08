/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import { useQuery } from '@apollo/react-hooks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import gql from 'graphql-tag';
import SectionMobile from '../Section/SectionHeaderMobile/SectionHeaderMobile.container';
import FilterContent from '../ContentFilter/ContentFilter.container';
import './Filter.stylesheet.scss';

const QUERY = gql`
  {
    liquors {
      id
      name
      thumb
    }
    complements {
      id
      name
      thumb
    }
  }
`;

console.log(QUERY);

const Filter = () => {
  const { data, error, loading } = useQuery(QUERY);
  console.log(data, error, loading);
  const [selectedLiquorsList, setSelectedLiquorsList] = useState([]);
  const [liquorsList, setLiquorsList] = useState([]);
  const [selectedComplementsList, setSelectedComplementsList] = useState([]);
  const [complementsList, setComplementsList] = useState([]);

  useEffect(() => {
    if ((!loading || error) && data) {
      setLiquorsList(data.liquors);
      setComplementsList(data.complements);
    }
  }, [loading, data, error]);

  const firstTenSelectedLiquorsList = selectedLiquorsList.slice(0, 10);
  const firstTenLiquorsList = liquorsList.slice(
    0,
    10 - firstTenSelectedLiquorsList.length
  );

  const firstTenSelectedComplementsList = selectedComplementsList.slice(0, 10);
  const firstTenComplementsList = complementsList.slice(
    0,
    10 - firstTenSelectedComplementsList.length
  );

  return (
    <div className="filter_container">
      <SectionMobile title="Filters" action={() => {}} />
      <Breakpoint sm down>
        <Tabs>
          <TabList className="filter_container--tab-title">
            <Tab>
              {`Liquors${
                firstTenSelectedLiquorsList.length > 0
                  ? ` (${firstTenSelectedLiquorsList.length})`
                  : ''
              }`}
            </Tab>
            <Tab>
              {`Complements${
                firstTenSelectedComplementsList.length > 0
                  ? ` (${firstTenSelectedComplementsList.length})`
                  : ''
              }`}
            </Tab>
          </TabList>

          <TabPanel>
            <FilterContent
              setSelectedList={setSelectedLiquorsList}
              setList={setLiquorsList}
              selectedList={firstTenSelectedLiquorsList}
              list={firstTenLiquorsList}
            />
          </TabPanel>
          <TabPanel>
            <FilterContent
              setSelectedList={setSelectedComplementsList}
              setList={setComplementsList}
              selectedList={firstTenSelectedComplementsList}
              list={firstTenComplementsList}
            />
          </TabPanel>
        </Tabs>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Filter;
