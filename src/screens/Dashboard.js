import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styling/Dash.css';
import CustomListItem from '../components/CustomListItem';
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle } from 'react-icons/fa';
import ZipDetails from './ZipDetails';
import {data} from '../data';
import firebase from '../firebase';

export default class Dashboard extends Component {

  state = {
    data:[],
    redirect: false,
    location: null
  }

  componentWillMount() {
    // this.setState({ data })

    this.fetchData()
  }

  fetchData(){
    var that = this;
    var temp = [];
    const ref = firebase.database().ref('Zips');
    ref.once('value', (snap)=> {
      snap.forEach(function(data) {
        const result = data.val();
        temp.push(result);
      })
    }).then(function(){
      that.setState({data:temp})
    })
  }

  iconFormat(cell, row) {
    const statuses = ['Ready', 'Warning', 'Not Ready']
    var status = 'Ready'
    const maintenance = row['pendingMaintenance']
    for (const m in maintenance){
      if (maintenance[m].priority == 'High') {
        return (<FaExclamationCircle color='red'/>)
      } else if (maintenance[m].priority == 'Low') {
        status = 'Warning'
      }
    }

    if (status == 'Warning') {
      return (
        <div style={{
          display: 'flex',
          flexDirection:'row',
          justifyContent:'center'
        }}>
          <FaCheckCircle color='green'/>
          <div style={{width:10}}></div>
          <FaExclamationTriangle color='gold'/>
        </div>)
    } else {
      return (<FaCheckCircle color='green'/>)
    }

  }

  maintenanceFormat(cell, row) {
    console.log('ROW', row);
    if (row['pendingMaintenance']) {
      return row['pendingMaintenance'].length
    } else {
      return 0
    }

  }

  onRowClick(row) {
    // navigate to new page of Zip details
    this.props.history.push(`/zips/${row['id']}`, { row })

    // return ( <Link to={`/zips/${row['id']}`}/>)

  }

  render() {
    const selectRow = {
      mode: 'checkbox',
      bgColor: 'pink',
      className: 'my-selection-custom'
    };

    const options = {
      onRowClick: this.onRowClick.bind(this)
    };


    return (
      <div className="Dash">

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BootstrapTable data={ this.state.data } striped hover options={options}
          // tableStyle={{padding:30}}
          containerStyle={{paddingLeft:30, paddingLeft:50, paddingRight:50}}
          headerStyle={{justifyContent:'center', alignSelf: 'center'}}
          bodyStyle={{justifyContent:'center', alignSelf: 'center'}}
          >
          <TableHeaderColumn width="33%" dataField='id' isKey dataAlign='center'>Zip ID</TableHeaderColumn>
          <TableHeaderColumn width="33%" dataField='pendingMaintenance' dataAlign='center' dataFormat={this.maintenanceFormat}>Pending Maintenance</TableHeaderColumn>
          <TableHeaderColumn width="33%" dataField='status' dataAlign='center' dataFormat={this.iconFormat}>Status</TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}
