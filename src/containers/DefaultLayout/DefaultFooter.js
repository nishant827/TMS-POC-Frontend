import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};
const DefaultFooter=(props)=>{
  const { children, ...attributes } = props;
  
  return (
    <React.Fragment>
      <span style={{color:"cornsilk"}} >TMS &copy; 2020 TMS.</span>
      <span className="ml-auto" style={{color:"cornsilk"}}>Powered by TMS</span>
    </React.Fragment>
  );
}


DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
