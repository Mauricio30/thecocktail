import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { setDefaultBreakpoints } from 'react-socks';
import PropTypes from '../../utils/PropTypes';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary.component';
import PageContainer from '../Page/Page.container';

import '../../assets/stylesheets/index.scss';

setDefaultBreakpoints([
  { xs: 0 },
  { sm: 576 },
  { md: 768 },
  { lg: 992 },
  { xl: 1200 }
]);

// eslint-disable-next-line no-unused-vars
const AppContainer = ({ isLoading, hideLoading }) => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AnimatePresence exitBeforeEnter>
          <motion.div exit={{ opacity: 0 }}>
            <main>
              <PageContainer />
            </main>
          </motion.div>
        </AnimatePresence>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

AppContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hideLoading: PropTypes.func.isRequired
};

export default AppContainer;
