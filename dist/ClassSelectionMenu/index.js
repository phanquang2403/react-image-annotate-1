import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import * as muiColors from "@mui/material/colors";
import SidebarBoxContainer from "../SidebarBoxContainer";
import colors from "../colors";
import BallotIcon from "@mui/icons-material/Ballot";
import capitalize from "lodash/capitalize";
import classnames from "classnames";
import SellIcon from '@mui/icons-material/Sell';
var theme = createTheme();
var LabelContainer = styled("div")(function (_ref) {
  var theme = _ref.theme;
  return {
    display: "flex",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    cursor: "pointer",
    opacity: 0.7,
    backgroundColor: "#fff",
    "&:hover": {
      opacity: 1
    },
    "&.selected": {
      opacity: 1,
      fontWeight: "bold"
    }
  };
});

var Tag = function Tag(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement(SellIcon, {
    style: {
      color: color,
      marginRight: 5
    },
    fontSize: 'inherit'
  });
};

var Circle = styled("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginRight: 8
  };
});
var Label = styled("div")(function (_ref4) {
  var theme = _ref4.theme;
  return {
    fontSize: 11
  };
});
var DashSep = styled("div")(function (_ref5) {
  var theme = _ref5.theme;
  return {
    flexGrow: 1,
    borderBottom: "2px dotted ".concat(muiColors.grey[300]),
    marginLeft: 8,
    marginRight: 8
  };
});
var Number = styled("div")(function (_ref6) {
  var theme = _ref6.theme;
  return {
    fontSize: 11,
    textAlign: "center",
    minWidth: 14,
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "bold",
    color: muiColors.grey[700]
  };
});
export var ClassSelectionMenu = function ClassSelectionMenu(_ref7) {
  var selectedCls = _ref7.selectedCls,
      regionClsList = _ref7.regionClsList,
      onSelectCls = _ref7.onSelectCls;
  useEffect(function () {
    var keyMapping = {};

    var _loop = function _loop(i) {
      keyMapping[i + 1] = function () {
        return onSelectCls(regionClsList[i]);
      };
    };

    for (var i = 0; i < 9 && i < regionClsList.length; i++) {
      _loop(i);
    }
  }, [regionClsList, selectedCls]);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(SidebarBoxContainer, {
    title: "Label List",
    subTitle: "",
    icon: /*#__PURE__*/React.createElement(BallotIcon, {
      style: {
        color: muiColors.grey[700]
      }
    }),
    expandedByDefault: true
  }, regionClsList.map(function (label, index) {
    return /*#__PURE__*/React.createElement(LabelContainer, {
      className: classnames({
        selected: label === selectedCls
      }),
      onClick: function onClick() {
        return onSelectCls(label);
      },
      key: index
    }, /*#__PURE__*/React.createElement(Tag, {
      color: colors[index % colors.length]
    }), /*#__PURE__*/React.createElement(Label, {
      className: classnames({
        selected: label === selectedCls
      })
    }, capitalize(label)), /*#__PURE__*/React.createElement(DashSep, null));
  }), /*#__PURE__*/React.createElement(Box, {
    pb: 2
  })));
};
export default ClassSelectionMenu;