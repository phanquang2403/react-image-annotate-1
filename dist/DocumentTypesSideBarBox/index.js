import React, { setState, memo } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SidebarBoxContainer from "../SidebarBoxContainer";
import HistoryIcon from "@mui/icons-material/History";
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
      currentDocumentType = _ref.currentDocumentType;
  var classes = useStyles();
  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(SidebarBoxContainer, {
    title: "Document Types",
    icon: React.createElement(HistoryIcon, {
      style: {
        color: grey[700]
      }
    }),
    expandedByDefault: true
  }, React.createElement(List, null, documentTypes === null || documentTypes === void 0 ? void 0 : documentTypes.map(function (item, index) {
    return React.createElement("div", {
      className: (currentDocumentType === item.id ? 'document-selected' : '') + ' document-type-item',
      key: index,
      style: {
        padding: 10
      },
      onClick: function onClick() {
        return onSelectDocumentTypes(item === null || item === void 0 ? void 0 : item.id);
      }
    }, item === null || item === void 0 ? void 0 : item.name);
  }))));
};
export default DocumentTypesSideBarBox;