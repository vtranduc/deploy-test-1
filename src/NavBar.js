import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render () {
    return (
      <>
        <Link to={'/page1'}>Page 1</Link>
        <Link to={'/page2'}>Page 2</Link>
        <Link to={'/page3'}>Page 3</Link>
      </>
    )
  }
}
