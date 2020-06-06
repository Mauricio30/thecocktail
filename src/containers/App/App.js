import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { setDefaultBreakpoints } from 'react-socks';

import PropTypes from '../../utils/PropTypes';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary.component';

import { hideLoading as hideLoadingAction } from '../../actions/Application/Application.action';

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
              <div> The Cocktail APP</div>
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

const mapStateToProps = state => ({
  isLoading: state.application.isLoading
});

const mapDispatchToProps = dispatch => ({
  hideLoading: () => dispatch(hideLoadingAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
