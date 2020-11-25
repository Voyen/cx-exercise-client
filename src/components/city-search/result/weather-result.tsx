/* eslint-disable no-plusplus */
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import CityWeatherEntry, { CityWeatherEntryDetails } from '../../../interfaces/city-weather-entry';
import useStyles from './styles';

interface IWeatherResult {
  city?: CityWeatherEntry;
}

interface DayWeather {
  day: string;
  temps: Temps[];
}

interface Temps {
  time: string;
  temp: number;
  desc: string;
  cloud: number;
}

const WeatherResult: React.FC<IWeatherResult> = ({ city }): JSX.Element => {
  const classes = useStyles();

  const formatAmPm = (date: Date): string => {
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    return `${hours} ${ampm}`;
  };

  const formatDay = (date: Date): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    return `${days[date.getDay()]} ${date.getDate()}/${months[date.getMonth()]}`;
  };

  const splitDays = (details: CityWeatherEntryDetails[]) => {
    let date;
    let dayName;
    let time;

    let iter = 0;
    let dayCount = 0;
    const days: DayWeather[] = [];

    details.forEach((detail) => {
      date = new Date(detail.epoch * 1000);
      dayName = formatDay(date);
      time = formatAmPm(date);
      if (iter === 0) {
        // days.push({ day: detail.timestamp.substr(0, 10), temps: [] });
        days.push({ day: dayName, temps: [] });
      }
      days[dayCount].temps.push({
        time,
        temp: detail.temp,
        desc: detail.description,
        cloud: detail.cloudiness,
      });

      iter++;
      if (iter === 3) {
        dayCount++;
        iter = 0;
      }
    });

    return (
      days.map((d) => (
        <>
          <TableRow key={d.day + d.temps[0].time}>
            <TableCell rowSpan={3} align="center">{d.day}</TableCell>
            <TableCell align="left">{d.temps[0].time}</TableCell>
            <TableCell align="right">
              {d.temps[0].temp}
              {' '}
              ℃
            </TableCell>
            <TableCell align="right">{d.temps[0].desc.charAt(0).toUpperCase() + d.temps[0].desc.slice(1)}</TableCell>
            <TableCell align="right">
              {d.temps[0].cloud}
              %
            </TableCell>
          </TableRow>
          <TableRow key={d.day + d.temps[1].time}>
            <TableCell align="left">{d.temps[1].time}</TableCell>
            <TableCell align="right">
              {d.temps[1].temp}
              {' '}
              ℃
            </TableCell>
            <TableCell align="right">{d.temps[1].desc.charAt(0).toUpperCase() + d.temps[1].desc.slice(1)}</TableCell>
            <TableCell align="right">
              {d.temps[1].cloud}
              %
            </TableCell>
          </TableRow>
          <TableRow key={d.day + d.temps[2].time}>
            <TableCell align="left">{d.temps[2].time}</TableCell>
            <TableCell align="right">
              {d.temps[2].temp}
              {' '}
              ℃
            </TableCell>
            <TableCell align="right">{d.temps[2].desc.charAt(0).toUpperCase() + d.temps[2].desc.slice(1)}</TableCell>
            <TableCell align="right">
              {d.temps[2].cloud}
              %
            </TableCell>
          </TableRow>
        </>
      ))
    );
  };

  const displayCacheAge = (date: number): number => (
    new Date().getMinutes() - new Date(date).getMinutes()
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeading} align="center" colSpan={5}>
              {city ? `${city.name}, ${city.country} (cached ${displayCacheAge(city.cachedAt)} mins ago)` : ''}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Day</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="right">Temp</TableCell>
            <TableCell align="right">Desc</TableCell>
            <TableCell align="right">Cloud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {city ? splitDays(city.details) : ''}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherResult;
