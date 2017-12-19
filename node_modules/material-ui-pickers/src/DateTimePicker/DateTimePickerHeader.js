import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import PickerToolbar from '../_shared/PickerToolbar';
import ToolbarButton from '../_shared/ToolbarButton';
import * as viewType from '../constants/date-picker-view';
import * as defaultUtils from '../utils/utils';

export var DateTimePickerHeader = function DateTimePickerHeader(props) {
  var date = props.date,
      classes = props.classes,
      openView = props.openView,
      meridiemMode = props.meridiemMode,
      onOpenViewChange = props.onOpenViewChange,
      setMeridiemMode = props.setMeridiemMode,
      theme = props.theme,
      utils = props.utils,
      ampm = props.ampm;


  var changeOpenView = function changeOpenView(view) {
    return function () {
      return onOpenViewChange(view);
    };
  };

  var rtl = theme.direction === 'rtl';
  var hourMinuteClassname = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

  return React.createElement(
    PickerToolbar,
    { className: classes.toolbar },
    React.createElement(
      'div',
      { className: classes.dateHeader },
      React.createElement(ToolbarButton, {
        type: 'subheading',
        onClick: changeOpenView(viewType.YEAR),
        selected: openView === viewType.YEAR,
        label: utils.getYearText(date)
      }),
      React.createElement(ToolbarButton, {
        type: 'display1',
        onClick: changeOpenView(viewType.DATE),
        selected: openView === viewType.DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    React.createElement(
      'div',
      { className: classes.timeHeader },
      React.createElement(
        'div',
        { className: hourMinuteClassname },
        React.createElement(ToolbarButton, {
          type: 'display2',
          onClick: changeOpenView(viewType.HOUR),
          selected: openView === viewType.HOUR,
          label: utils.getHourText(date, ampm)
        }),
        React.createElement(ToolbarButton, {
          type: 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        React.createElement(ToolbarButton, {
          type: 'display2',
          onClick: changeOpenView(viewType.MINUTES),
          selected: openView === viewType.MINUTES,
          label: utils.getMinuteText(date)
        })
      ),
      ampm && React.createElement(
        'div',
        { className: classes.ampmSelection },
        React.createElement(ToolbarButton, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        React.createElement(ToolbarButton, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'pm',
          type: 'subheading',
          label: utils.getMeridiemText('pm'),
          onClick: setMeridiemMode('pm')
        })
      )
    )
  );
};

DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired,
  utils: PropTypes.object,
  ampm: PropTypes.bool
};

DateTimePickerHeader.defaultProps = {
  utils: defaultUtils,
  ampm: true
};

var styles = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 10,
      marginRight: -10
    },
    ampmLabel: {
      fontSize: 18
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelReverse: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    },
    dateHeader: {
      width: '42%',
      height: 65
    },
    timeHeader: {
      height: 65,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }
  };
};

export default withStyles(styles, { withTheme: true })(DateTimePickerHeader);