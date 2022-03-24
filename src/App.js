import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    );
  }
}
