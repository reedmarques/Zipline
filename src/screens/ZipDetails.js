import React, { Component } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../styling/Dash.css';
import CustomListItem from '../components/CustomListItem';
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle } from 'react-icons/fa';
import firebase from '../firebase';


const priorities = [{value: 'Low', text: 'Low'}, {value: 'High', text: 'High'}, {value: 'Completed', text: 'Completed'}]

export default class ZipDetails extends Component {

  state = {
    pendingMaintenance: [],
    completedMaintenance: [],
  }

  componentWillMount() {
    this.getAllMaintenance()
  }

  // call on mount
  getAllMaintenance(){
    var tempPending = [];
    var tempCompleted = [];
    var that = this;
    const zipID = this.props.history.location.state.row.id

    // get pending list
    const pendingRef = firebase.database().ref(`Zips/${zipID}/pendingMaintenance`)
    pendingRef.once('value', (snap)=> {
      snap.forEach(function(data) {
        const result = data.val();
        tempPending.push(result);
      })
    }).then(function(){
      that.setState({pendingMaintenance:tempPending})
    })

    // get completed list
    const completedRef = firebase.database().ref(`Zips/${zipID}/completedMaintenance`)
    completedRef.once('value', (snap)=> {
      snap.forEach(function(data) {
        const result = data.val();
        tempCompleted.push(result);
      })
    }).then(function(){
      that.setState({completedMaintenance:tempCompleted})
    })


  }

  // call after completion
  getPendingMaintenance(){

  }

  // call after completion
  getCompletedMaintenance(){

  }

  iconFormat(cell, row) {
    if (row.priority == 'Low') {
      return (<FaExclamationTriangle color='gold'/>)
    } else {
      return (<FaExclamationCircle color='red'/>)
    }
  }

  completedIconFormat(cell, row) {
    return (<FaCheckCircle color='green'/>)
  }

  handleRowSelect(row, isSelected, e) {
    console.log(row, isSelected, e);
    console.log(this.state.selectedRows);

    // var temp = []
    // if (isSelected) {
    //   temp.push(row)
    // }
    //
    // this.setState({completedMaintenance:row}, () => console.log('completedMaintenance', this.state.completedMaintenance))

  }

  afterSaveCell(row, cellName, cellValue) {
    console.log('saved', row);
    const zipID = this.props.history.location.state.row.id
    const ref = firebase.database().ref(`Zips/${zipID}`)
    const tempPending = Object.assign([], this.state.pendingMaintenance)
    const tempCompleted = Object.assign([], this.state.completedMaintenance)
    const index = tempPending.indexOf(row);
    if (index !== -1) {
      if (cellValue == 'Completed'){
        tempPending.splice(index, 1);
        this.setState({pendingMaintenance:tempPending})
        tempCompleted.push(row)
        this.setState({completedMaintenance:tempCompleted})
        ref.update({completedMaintenance: tempCompleted})
        ref.update({pendingMaintenance: tempPending})
      } else {
        tempPending[index] = row
        this.setState({pendingMaintenance:tempPending})
        ref.update({pendingMaintenance: tempPending})
      }
    }
  }

  onAddRow(row) {
    const zipID = this.props.history.location.state.row.id
    const ref = firebase.database().ref(`Zips/${zipID}`)
    const tempPending = Object.assign([], this.state.pendingMaintenance)
    tempPending.push(row)
    this.setState({pendingMaintenance:tempPending})
    ref.update({pendingMaintenance: tempPending})
  }

  render() {
    const zip = this.props.history.location.state.row

    const selectRow = {
      mode: 'checkbox',
      bgColor: 'pink',
      className: 'my-selection-custom',
      onSelect: this.handleRowSelect.bind(this)
    };

    const cellEdit = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.afterSaveCell.bind(this)
    };

    const options = {
      onAddRow: this.onAddRow.bind(this)
    };

    return (
      <div className="Dash">
        <h1 style={{paddingTop:20, paddingLeft: 30}}>{zip['id']} Details</h1>
        <h3 style={{paddingTop:20, paddingLeft: 30}}>Pending Maintenance Tasks</h3>
        <BootstrapTable data={ this.state.pendingMaintenance } striped hover insertRow={true} cellEdit={cellEdit}
          containerStyle={{paddingLeft:30, paddingLeft:50, paddingRight:50}} options={options}
          headerStyle={{justifyContent:'center', alignSelf: 'center'}}
          bodyStyle={{justifyContent:'center', alignSelf: 'center'}}
          >
            <TableHeaderColumn width="10%" dataField='issueNo' isKey dataAlign='center'>Issue No.</TableHeaderColumn>
            <TableHeaderColumn width="70%" dataField='problem' dataAlign='left'>Maintenance Description</TableHeaderColumn>
            <TableHeaderColumn width="10%" dataField='priority' dataAlign='center' dataFormat={this.iconFormat}
              editable={ { type: 'select', options: { values: priorities } } }
              >Priority</TableHeaderColumn>
        </BootstrapTable>

        <h3 style={{paddingTop:30, paddingLeft: 30}}>Completed Maintenance Tasks</h3>
        <BootstrapTable data={ this.state.completedMaintenance } striped hover
          containerStyle={{paddingLeft:30, paddingLeft:50, paddingRight:50}}
          headerStyle={{justifyContent:'center', alignSelf: 'center'}}
          bodyStyle={{justifyContent:'center', alignSelf: 'center'}}
          >
            <TableHeaderColumn width="10%" dataField='issueNo' isKey dataAlign='center'>Issue No.</TableHeaderColumn>
            <TableHeaderColumn width="70%" dataField='problem' dataAlign='left'>Maintenance Description</TableHeaderColumn>
            <TableHeaderColumn width="10%" dataField='priority' dataAlign='center' dataFormat={this.completedIconFormat}
              >Priority</TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}
