import React from 'react';
import PropTypes from 'prop-types';

const breakePointsDefaultsKerys = ['sm','md','lg','xl'];

const queryBreakPointUp = {
  sm: 600, // >=
  md: 960, // >=
  lg: 1280, // >=
  xl: 1920, // >=
};

const queryBreakPointDown= {
  sm: 599.98, // <=
  md: 959.99, // <=
  lg: 1279.99, // <=
  xl: 1919.99, // <=
};

const HiddenMediaQuery = (props) => {
  const { children, queryKey, breakPoint, range } = props;
  const [match, setMatch] = React.useState(false);

  const prefix = queryKey === 'down' ? 'min' : 'max';
  const query = queryKey === 'down' ? queryBreakPointDown : queryBreakPointUp;
  
  const rangeMin = range && range[0];
  const rangeMax = range && range[1];
  const breakPointMin = queryBreakPointUp[rangeMin];
  const breakPointMax = queryBreakPointDown[rangeMax];

  React.useEffect(() => {
    const queryListWithOutRange = window.matchMedia(`(${prefix}-width:${query[breakPoint]}px)`);
    const queryListWithRange = window.matchMedia(`(min-width:${breakPointMin}px) and (max-width:${breakPointMax}px)`);
    const queryList = range && range.length ? queryListWithRange : queryListWithOutRange;
    const updateMatch = () => {
      setMatch(queryList.matches);
    };
    updateMatch();
    queryList.addListener(updateMatch);
    return () => {
      queryList.removeListener(updateMatch);
    };
  }, [breakPoint, breakPointMax, breakPointMin, match, prefix, query, range]);

  if (match) {
    return children;
  }
  return null;
};

HiddenMediaQuery.defaultProps = {
  // Tell the component in which direction the children should hide
  queryKey: 'down',
  // Tell the component when you should start hiding the children
  breakPoint: 'sm',
  // range use for show the children
  range: null,
}

HiddenMediaQuery.propTypes = {
  queryKey: PropTypes.oneOf(['down', 'up']), 
  breakPoint: PropTypes.oneOf(['sm', 'md','lg','xl']),
  range: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.arrayOf(
      (propValue, key, componentName, location, propFullName) => {
        if (breakePointsDefaultsKerys.indexOf(propValue[0], propValue[1]) === -1) {
          return new Error(
            'Invalid prop `' + propFullName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
          );
        }
    })
  ]),
};

export default HiddenMediaQuery;