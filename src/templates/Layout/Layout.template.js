import React from 'react';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';
import { Container } from '../../components/Grid/Grid.component';

import './Layout.stylesheet.scss';

const LayoutTemplate = ({
  children,
  childrenNoContainer,
  className,
  style,
  center,
  full,
  paw,
  fluid
}) => {
  return (
    <article
      style={style}
      className={classNames(
        'layout_template',
        {
          'layout_template--full_screen': full,
          'layout_template--center': center,
          'layout_template--paw': paw
        },
        className
      )}
    >
      <div className="layout_template--childrenNoContainer">
        {childrenNoContainer}
      </div>
      <Container fluid={fluid}>{children}</Container>
    </article>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.children.isRequired,
  childrenNoContainer: PropTypes.children,
  style: PropTypes.style,
  className: PropTypes.string,
  center: PropTypes.bool,
  full: PropTypes.bool,
  fluid: PropTypes.bool,
  paw: PropTypes.bool
};

LayoutTemplate.defaultProps = {
  childrenNoContainer: null,
  center: false,
  full: false,
  paw: false,
  fluid: false,
  className: '',
  style: {}
};

export default LayoutTemplate;
