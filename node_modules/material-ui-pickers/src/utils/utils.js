import Moment from 'moment';
import { extendMoment } from 'moment-range';

var moment = extendMoment(Moment);

export function formatNumber(num) {
  return num;
}

export function getCalendarHeaderText(date) {
  return date.format('MMMM YYYY');
}

export function getDatePickerHeaderText(date) {
  return date.format('ddd, MMM DD');
}

export function getDateTimePickerHeaderText(date) {
  return date.format('MMM DD');
}

export function getDayText(date) {
  return date.format('DD');
}

export function getHourText(date, ampm) {
  return date.format(ampm ? 'hh' : 'HH');
}

export function getMinuteText(date) {
  return date.format('mm');
}

export function getMeridiemText(ampm) {
  return ampm === 'am' ? 'AM' : 'PM';
}

export function getYearText(date) {
  return date.format('YYYY');
}

export function getMonthNumber(date) {
  return date.get('month');
}

export function getStartOfMonth(date) {
  return date.clone().startOf('month');
}

export function getNextMonth(date) {
  return date.clone().add(1, 'month');
}

export function getPreviousMonth(date) {
  return date.clone().subtract(1, 'month');
}

export function getYear(date) {
  return date.get('year');
}

export function setYear(date, year) {
  return date.clone().set('year', year);
}

export function getWeekdays() {
  return [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
    return moment().weekday(dayOfWeek).format('dd');
  });
}

export function getWeekArray(date) {
  var start = date.clone().startOf('month').startOf('week');
  var end = date.clone().endOf('month').endOf('week');

  var weeks = Array.from(moment.range(start, end).by('week'));

  var nestedWeeks = [];

  weeks.forEach(function (week) {
    var endOfWeek = week.clone().endOf('week');
    nestedWeeks.push(Array.from(moment.range(week, endOfWeek).by('day')));
  });

  return nestedWeeks;
}