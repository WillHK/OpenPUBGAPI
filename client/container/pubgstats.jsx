import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const DisplayRecords = ({
  season,
  region,
  match,
  nickname,
  ranks,
  records,
}) => (
  <div>
    <h1>Stat Info</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Season</TableHeaderColumn>
          <TableHeaderColumn>Region</TableHeaderColumn>
          <TableHeaderColumn>Match</TableHeaderColumn>
          <TableHeaderColumn>Nickname</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>{season}</TableRowColumn>
          <TableRowColumn>{region}</TableRowColumn>
          <TableRowColumn>{match}</TableRowColumn>
          <TableRowColumn>{nickname}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <h1>Ratings</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Rating</TableHeaderColumn>
          <TableHeaderColumn>Win Points</TableHeaderColumn>
          <TableHeaderColumn>Kill Points</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRow>
          <TableRowColumn>{ranks.Rating}</TableRowColumn>
          <TableRowColumn>{ranks.WinPoints}</TableRowColumn>
          <TableRowColumn>{ranks.KillPoints}</TableRowColumn>
        </TableRow>
      </TableBody>
    </Table>
    <h1>Records</h1>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Assists</TableHeaderColumn>
          <TableHeaderColumn>Avg Move Distance</TableHeaderColumn>
          <TableHeaderColumn>Avg Ride Distance</TableHeaderColumn>
          <TableHeaderColumn>Avg Survival Time</TableHeaderColumn>
          <TableHeaderColumn>Avg Walk Distance</TableHeaderColumn>
          <TableHeaderColumn>Best Rating</TableHeaderColumn>
          <TableHeaderColumn>Boosts</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.Assists}</TableRowColumn>
        <TableRowColumn>{records.AvgMoveDistance}</TableRowColumn>
        <TableRowColumn>{records.AvgRideDistance}</TableRowColumn>
        <TableRowColumn>{records.AvgSurvivalTime}</TableRowColumn>
        <TableRowColumn>{records.AvgWalkDistance}</TableRowColumn>
        <TableRowColumn>{records.BestRating}</TableRowColumn>
        <TableRowColumn>{records.Boosts}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Down-but-not-outs</TableHeaderColumn>
        <TableHeaderColumn>Daily Kills</TableHeaderColumn>
        <TableHeaderColumn>Daily Wins</TableHeaderColumn>
        <TableHeaderColumn>Damage Dealt</TableHeaderColumn>
        <TableHeaderColumn>Days</TableHeaderColumn>
        <TableHeaderColumn>Headshot to Kill Ratio</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.DBNOs}</TableRowColumn>
        <TableRowColumn>{records.DailyKills}</TableRowColumn>
        <TableRowColumn>{records.DailyWins}</TableRowColumn>
        <TableRowColumn>{records.DamageDealt}</TableRowColumn>
        <TableRowColumn>{records.Days}</TableRowColumn>
        <TableRowColumn>{records.HeadshotKillRatio}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Headshot Kills</TableHeaderColumn>
        <TableHeaderColumn>Heals</TableHeaderColumn>
        <TableHeaderColumn>Kill to Death Ratio</TableHeaderColumn>
        <TableHeaderColumn>Kill Points</TableHeaderColumn>
        <TableHeaderColumn>Kills</TableHeaderColumn>
        <TableHeaderColumn>Longest Kill</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.HeadshotKills}</TableRowColumn>
        <TableRowColumn>{records.Heals}</TableRowColumn>
        <TableRowColumn>{records.KillDeathRatio}</TableRowColumn>
        <TableRowColumn>{records.KillPoints}</TableRowColumn>
        <TableRowColumn>{records.Kills}</TableRowColumn>
        <TableRowColumn>{records.LongestKill}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Longest Time Survived</TableHeaderColumn>
        <TableHeaderColumn>Losses</TableHeaderColumn>
        <TableHeaderColumn>Max Kill Streak</TableHeaderColumn>
        <TableHeaderColumn>Most Survival Time</TableHeaderColumn>
        <TableHeaderColumn>Move Distance</TableHeaderColumn>
        <TableHeaderColumn>Rating</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.LongestTimeSurvived}</TableRowColumn>
        <TableRowColumn>{records.Losses}</TableRowColumn>
        <TableRowColumn>{records.MaxKillStreaks}</TableRowColumn>
        <TableRowColumn>{records.MostSurvivalTime}</TableRowColumn>
        <TableRowColumn>{records.MoveDistance}</TableRowColumn>
        <TableRowColumn>{records.Rating}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Revives</TableHeaderColumn>
        <TableHeaderColumn>Ride Distance</TableHeaderColumn>
        <TableHeaderColumn>Road Kills</TableHeaderColumn>
        <TableHeaderColumn>Round Most Kills</TableHeaderColumn>
        <TableHeaderColumn>Rounds Played</TableHeaderColumn>
        <TableHeaderColumn>Suicides</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.Revives}</TableRowColumn>
        <TableRowColumn>{records.RideDistance}</TableRowColumn>
        <TableRowColumn>{records.RoadKills}</TableRowColumn>
        <TableRowColumn>{records.RoundMostKills}</TableRowColumn>
        <TableRowColumn>{records.RoundsPlayed}</TableRowColumn>
        <TableRowColumn>{records.Suicides}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Team Kills</TableHeaderColumn>
        <TableHeaderColumn>Time Survived</TableHeaderColumn>
        <TableHeaderColumn>Top 10 Ratio</TableHeaderColumn>
        <TableHeaderColumn>Top 10s</TableHeaderColumn>
        <TableHeaderColumn>Vehicles Destroyed</TableHeaderColumn>
        <TableHeaderColumn>Walk Distance</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.TeamKills}</TableRowColumn>
        <TableRowColumn>{records.TimeSurvived}</TableRowColumn>
        <TableRowColumn>{records.Top10Ratio}</TableRowColumn>
        <TableRowColumn>{records.Top10s}</TableRowColumn>
        <TableRowColumn>{records.VehicleDestroys}</TableRowColumn>
        <TableRowColumn>{records.WalkDistance}</TableRowColumn>
      </TableBody>
    </Table>
    <Table>
      <TableHeader displaySelectAll={false}>
        <TableHeaderColumn>Weapons Acquired</TableHeaderColumn>
        <TableHeaderColumn>Weekly Kills</TableHeaderColumn>
        <TableHeaderColumn>Weekly Wins</TableHeaderColumn>
        <TableHeaderColumn>Win Points</TableHeaderColumn>
        <TableHeaderColumn>Win Ratio</TableHeaderColumn>
        <TableHeaderColumn>Win Top 10 Ratio</TableHeaderColumn>
        <TableHeaderColumn>Wins</TableHeaderColumn>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        <TableRowColumn>{records.WeaponAcquired}</TableRowColumn>
        <TableRowColumn>{records.WeeklyKills}</TableRowColumn>
        <TableRowColumn>{records.WeeklyWins}</TableRowColumn>
        <TableRowColumn>{records.WinPoints}</TableRowColumn>
        <TableRowColumn>{records.WinRatio}</TableRowColumn>
        <TableRowColumn>{records.WinTop10Ratio}</TableRowColumn>
        <TableRowColumn>{records.Wins}</TableRowColumn>
      </TableBody>
    </Table>
  </div>
);

const PUBGStats = ({
  mode,
  region,
  updateMode,
  updateRegion,
  getLeaderboard,
  getRecords,
  records,
  leaderboard,
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
          <MenuItem value="duo-fpp" primaryText="Duos FPP" />
          <MenuItem value="squad-fpp" primaryText="Squads FPP" />
        </SelectField>
      </div>
      <div>
        <RaisedButton label="Get Leaderboard" onTouchTap={getLeaderboard}/>
        <RaisedButton label="Get Records" onTouchTap={getRecords}/>
      </div>
    </div>
    <div>
      {records ? <DisplayRecords
        season={records.Season}
        region={records.Region}
        match={records.Match}
        nickname={records.Nickname}
        ranks={records.Ranks}
        records={records.Records}
      />:''}
      {leaderboard ? leaderboard:''}
    </div>
  </div>
);

export default PUBGStats;