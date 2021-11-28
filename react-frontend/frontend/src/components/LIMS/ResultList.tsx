import React from 'react';
import Box from './Result';

const ResultList = () => {

  // Using the ES6 map function to iterate over the robots object
  // map has two parameters, the object name and the index
  // results.map((user, i) => {
      return (
          <Box
            // These are the properties that get passed to the Card component
            // The key prop shouldn't change. Therefore we'll use id instead of index or i
            // The key prop is required for React to effeiciently target specific DOM elements
            // key={ robots[i].id }
            // id={ robots[i].id }
            // name={ robots[i].name }
            // email={ robots[i].email }
          />
      );
  // })
}

export default ResultList;