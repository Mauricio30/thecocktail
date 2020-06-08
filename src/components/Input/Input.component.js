/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import PropTypes from '../../utils/PropTypes';
import Icon from '../Icon/Icon.component';
// import SelectComponent from '../Select/Select.component';

import './Input.stylesheet.scss';

const InputComponent = ({
  type,
  name,
  id,
  label,
  placeholder,
  className,
  autoFocus,
  onChange,
  onKeyUp,
  onBlur,
  onFocus,
  onIconClick,
  value,
  disabled,
  required,
  readOnly,
  icon,
  iconRight,
  pattern,
  patternHandler,
  maxLength,
  minLength,
  helpertext,
  patternHelper,
  options,
  defaultOption,
  onChangeSelect,
  focus2
}) => {
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const refInput = useRef(null);
  console.log('refInput', refInput);

  useEffect(() => {
    if (autoFocus) {
      refInput.current.focus();
    }
  });

  useEffect(() => {
    if (value) {
      refInput.current.value = value;
      setFocus(true);
    }
  }, [value]);

  const onKeyUpHandler = e => {
    onKeyUp(e.currentTarget.value);
  };

  const onChangeHanlder = e => {
    const valueInput = patternHandler(e.currentTarget.value);
    let regexp = e.currentTarget.checkValidity();

    if (patternHandler) {
      refInput.current.value = valueInput;
      regexp = e.currentTarget.checkValidity();
    }

    // setError(() => {
    //   onChange(valueInput, { error: !regexp });
    //   return !regexp && patternHelper;
    // });
    // if (valueInput.length <= minLength || valueInput.length >= maxLength) {
    // }

    if (onChange) onChange(e.currentTarget.value);
  };

  const onBlurHandle = () => {
    if (onBlur) onBlur();
    if (!refInput.current.value) {
      setFocus(false);
    }
  };

  const onFocusHandle = () => {
    if (onFocus) onFocus();
    setFocus(true);
  };

  const onIconClickHandler = () => {
    if (onIconClick) onIconClick(refInput.current.value);
  };

  return (
    <div
      className={classNames(
        'input__component',
        {
          'input__component--icon_left': icon,
          'input__component--icon_right': iconRight,
          'input__component--disabled': !readOnly,
          'input__component--error': error
        },
        className
      )}
    >
      <div className={classNames('input__component--group')}>
        <div className={`input__component--wrapper ${focus2 ? 'focus' : ''}`}>
          {placeholder && (
            <motion.label
              initial={{
                x: 17,
                y: 13,
                scale: 1
              }}
              animate={
                focus
                  ? {
                      x: 0,
                      y: -25,
                      scale: 0.85
                    }
                  : {
                      x: 17,
                      y: 13,
                      scale: 1
                    }
              }
              transition={{
                duration: 0.2
              }}
              className="input__component--wrapper-placeholder"
              htmlFor={name}
            >
              <p>{}</p>
            </motion.label>
          )}
          {/* {icon && (
            <div className="input__component--icon_left-icon">
              <Icon name={icon} size={24} />
            </div>
          )} */}
          <div className="inner-addon right-addon">
            <input
              ref={refInput}
              id={id}
              type={type}
              name={name}
              required={required}
              aria-required={required}
              aria-label={label}
              aria-placeholder={placeholder}
              placeholder={placeholder}
              pattern={pattern}
              disabled={disabled || readOnly}
              className={classNames('input__component--input', {
                // 'input__component--input-no-empty': value.length > 0,
                'input__component--input-disabled': disabled
              })}
              onChange={onChangeHanlder}
              onKeyUp={onKeyUpHandler}
              onBlur={onBlurHandle}
              onFocus={onFocusHandle}
              value={value}
              minLength={minLength}
              maxLength={maxLength}
            />
            {iconRight && (
              <i className="glyphicon" onClick={onIconClickHandler}>
                <Icon iconName={iconRight} size={24} />
              </i>
            )}
          </div>
          {(helpertext || error) && (
            <div className="input__component--helpertext">
              <p className="caption">{helpertext || error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

InputComponent.defaultProps = {
  id: '',
  name: '',
  type: '',
  value: '',
  label: '',
  className: '',
  patternHelper: '',
  icon: '',
  placeholder: '',
  iconRight: '',
  pattern: null,
  minLength: null,
  helpertext: '',
  patternHandler: val => val,
  maxLength: null,
  autoFocus: false,
  disabled: false,
  readOnly: false,
  required: false,
  onChange: () => {},
  onKeyUp: () => {},
  options: [],
  defaultOption: null,
  onChangeSelect: () => {}
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
  maxLength: PropTypes.stringOrNumber,
  minLength: PropTypes.stringOrNumber,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  patternHandler: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  className: PropTypes.string,
  helpertext: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.string,
  pattern: PropTypes.string,
  patternHelper: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.stringOrNumber,
  value: PropTypes.stringOrNumber,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.oneOfType([PropTypes.object]),
  onChangeSelect: PropTypes.func
};

export default InputComponent;
