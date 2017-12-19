import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tab, Tabs, withStyles, withTheme } from 'material-ui';
import * as viewType from '../constants/date-picker-view';

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === viewType.DATE || openView === viewType.YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return viewType.DATE;
  }

  return viewType.HOUR;
};

export var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var view = props.view,
      onChange = props.onChange,
      classes = props.classes,
      theme = props.theme,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon;


  var indicatorColor = theme.palette.type === 'light' ? 'accent' : 'primary';
  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return React.createElement(
    Paper,
    null,
    React.createElement(
      Tabs,
      {
        fullWidth: true,
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      },
      React.createElement(Tab, { value: 'date', icon: dateRangeIcon }),
      React.createElement(Tab, { value: 'time', icon: timeIcon })
    )
  );
};

DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node
};

DateTimePickerTabs.defaultProps = {
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time'
};

var styles = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.background.default
    }
  };
};

export default withTheme()(withStyles(styles, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));