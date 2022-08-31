import React, { setState, memo, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SidebarBoxContainer from "../SidebarBoxContainer";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import UndoIcon from "@mui/icons-material/Undo";
import moment from "moment";
import { grey } from "@mui/material/colors";
import isEqual from "lodash/isEqual";
import Box from "@mui/material/Box";
import { without } from "seamless-immutable";
var theme = createTheme();
var useStyles = makeStyles(function (theme) {
  return {
    emptyText: {
      fontSize: 14,
      fontWeight: "bold",
      color: grey[500],
      textAlign: "center",
      padding: 20
    }
  };
});
var listItemTextStyle = {
  paddingLeft: 16
};
export var DocumentTypesSideBarBox = function DocumentTypesSideBarBox(_ref) {
  var documentTypes = _ref.documentTypes,
      onSelectDocumentTypes = _ref.onSelectDocumentTypes,
      currentDocumentType = _ref.currentDocumentType,
      initalState = _ref.initalState;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(SidebarBoxContainer, {
    title: "Document Types",
    icon: /*#__PURE__*/React.createElement(FormatListBulletedIcon, {
      style: {
        color: grey[700]
      }
    })
  }, /*#__PURE__*/React.createElement(List, null, documentTypes === null || documentTypes === void 0 ? void 0 : documentTypes.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: (currentDocumentType === (item === null || item === void 0 ? void 0 : item.id) ? 'document-selected' : '') + ' document-type-item',
      key: index,
      style: {
        padding: 10,
        fontSize: 13
      },
      onClick: function onClick() {
        return onSelectDocumentTypes(item === null || item === void 0 ? void 0 : item.id, without(initalState, "history"));
      }
    }, item === null || item === void 0 ? void 0 : item.name);
  }))));
};
export default DocumentTypesSideBarBox;