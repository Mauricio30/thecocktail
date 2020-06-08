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
    if (!loading || error) {
      setLiquorsList(data.liquors);
      setComplementsList(data.complements);
    }
  }, [loading, data, error]);

  return (
    <div className="filter_container">
      <SectionMobile title="Filters" action={() => {}} />
      <Breakpoint sm down>
        <Tabs>
          <TabList className="filter_container--tab-title">
            <Tab>
              {`Liquors ${
                selectedLiquorsList.length > 0 ? selectedLiquorsList.length : ''
              }`}
            </Tab>
            <Tab>
              {`Complements ${
                selectedComplementsList.length > 0
                  ? selectedComplementsList.length
                  : ''
              }`}
            </Tab>
          </TabList>

          <TabPanel>
            <FilterContent
              setSelectedList={setSelectedLiquorsList}
              setList={setLiquorsList}
              selectedList={selectedLiquorsList}
              list={liquorsList}
            />
          </TabPanel>
          <TabPanel>
            <FilterContent
              setSelectedList={setSelectedComplementsList}
              setList={setComplementsList}
              selectedList={selectedComplementsList}
              list={complementsList}
            />
          </TabPanel>
        </Tabs>
      </Breakpoint>
      <Breakpoint sm down />
    </div>
  );
};

export default Filter;
