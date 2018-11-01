import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class CustomListItem extends Component {
  render() {
    const item = this.props.item
    return (
      <div className="Custom-list-item">
        <p>{item.title}</p>
        <div style={{ display: 'flex',
          flexDirection: 'row',
          width: '30%',
          justifyContent: 'space-between'
        }}>
          <p>{item.maintenance}</p>
          <p>{item.status}</p>
        </div>
      </div>
    );
  }
}
