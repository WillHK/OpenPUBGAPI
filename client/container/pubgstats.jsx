import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const PUBGStats = ({
  mode,
  region,
  updateMode,
  updateRegion,
  getAllRecords,
  getLeaderboard,
  getRecords,
}) => (
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
      <RaisedButton label="Get All Records" />
      <RaisedButton label="Get Leaderboard" />
      <RaisedButton label="Get Records" />
    </div>
  </div>
);

export default PUBGStats;