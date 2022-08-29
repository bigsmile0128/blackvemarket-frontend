import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

 const PageTitle = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <Route {...rest} />;
};
export default PageTitle;