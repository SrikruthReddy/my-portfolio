import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.scss';
import Sidebar from '../Sidebar';

const Layout = ({ location }) => {
  return (
    <div className="App">
      <Sidebar location={location} />
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
