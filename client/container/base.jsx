import React from 'react';
import { PropTypes, instanceOf } from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PUBGStats from './pubgstats';


class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.register = this.register.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateRegion = this.updateRegion.bind(this);
    this.updateMode = this.updateMode.bind(this);
    this.getRecords = this.getRecords.bind(this);
  }
  
  updateName(event, something, name) {
    this.setState({ name });
  }
  
  updateRegion(event, something, region) {
    this.setState({ region })
  }

  updateMode(event, something, mode) {
    this.setState({ mode });
  }

  register() {
    let that = this;
    const body = {
      name: this.state.name
    }
    const headers = new Headers({"Content-Type": "application/json", "withCredentials": true });
    const init = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    return fetch('/register', init)
    .then( response => {
      response.json().then((data) => {
        console.log(data);
        that.setState({ AccountId: data[0].AccountId, SteamName: data[0].SteamName, AvatarUrl: data[0].AvatarUrl });
      });
    });
  }

  getRecords() {
    let that = this;
    const body = {
      AccountId: this.state.AccountId,
      region: this.state.region,
      mode: this.state.mode,
    }
    const headers = new Headers({"Content-Type": "application/json", "withCredentials": true });

    const init = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    return fetch('/records', init)
    .then( response => {
      response.json().then((data) => {
        that.setState({ records: data.Records });
      });
    });
  }

  getAllRecords() {
    let that = this;
    const body = {
      AccountId: this.state.AccountId
    }
    const headers = new Headers({"Content-Type": "application/json", "withCredentials": true });

    const init = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    return fetch('/allrecords', init)
    .then( response => {
      response.json().then((data) => {
        console.log(data);
        that.setState({ records: data});
      });
    });
  }

  getLeaderboard() {
    let that = this;
    const body = {
      AccountId: this.state.AccountId,
      region: this.state.region,
      mode: this.state.mode,
    }
    const headers = new Headers({"Content-Type": "application/json", "withCredentials": true });

    const init = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };
    return fetch('/leaderboard', init)
    .then( response => {
      response.json().then((data) => {
        console.log(data);
        that.setState({ records: data });
      });
    });
  }

  displayNames(key) {
    const values = {
      "na": "North America",
      "eu": "Europe",
      "as": "Asia",
      "duo": "Duo",
      "squad": "Squads",
    }
    return values[key];
  }

  render() {
      return (
        <div>
          <div>
            <h1>Enter Battlegrounds In-Game Name</h1>
            <TextField
              hintText="Battlegrounds In-Game Name"
              onChange={this.updateName}
            />
            <RaisedButton
              label="Submit"
              onClick={this.register}
            />
          </div>
          { this.state.accountId ? (
          <PUBGStats
            mode={this.mode}
            region={this.region}
            updateMode={this.updateMode}
            updateRegion={this.updateRegion}
            getRecords={this.getRecords}
            getAllRecords={this.getAllRecords}
            getLeaderBoard={this.getLeaderboard}
            records={this.state.records}
          />):''}
        </div>  
    )
  }
};

export default Base;
