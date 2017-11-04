import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const PUBGStats = ({
  mode,
  region,
  updateMode,
  updateRegion,
  getAllRecords,
  getLeaderboard,
  getRecords,
  records,
}) => (
  <div>
    <div>
      <div>
        <SelectField
          floatingLabelText="Region"
          value={region}
          onChange={updateRegion}
        >
          <MenuItem value="na" primaryText="North America" />
          <MenuItem value="eu" primaryText="Europe" />
          <MenuItem value="as" primaryText="Asia" />
          <MenuItem value="sea" primaryText="Southeast Asia" />
          <MenuItem value="oc" primaryText="Oceania" />
          <MenuItem value="sa" primaryText="South America" />
        </SelectField>
        <SelectField
          floatingLabelText="Mode"
          value={mode}
          onChange={updateMode}
        >
          <MenuItem value="solo" primaryText="Solo" />
          <MenuItem value="duo" primaryText="Duos" />
          <MenuItem value="squad" primaryText="Squads" />
        </SelectField>
      </div>
      <div>
        <RaisedButton label="Get All Records" onTouchTap={getAllRecords}/>
        <RaisedButton label="Get Leaderboard" onTouchTap={getLeaderboard}/>
        <RaisedButton label="Get Records" onTouchTap={getRecords}/>
      </div>
    </div>
    <div>
      { records }
    </div>
  </div>
);

export default PUBGStats;