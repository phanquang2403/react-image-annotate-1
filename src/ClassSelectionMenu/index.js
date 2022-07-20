import React, { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import * as muiColors from "@mui/material/colors"
import SidebarBoxContainer from "../SidebarBoxContainer"
import colors from "../colors"
import BallotIcon from "@mui/icons-material/Ballot"
import capitalize from "lodash/capitalize"
import classnames from "classnames"
import SellIcon from '@mui/icons-material/Sell';

const theme = createTheme()
const LabelContainer = styled("div")(({ theme }) => ({
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
    opacity: 1,
  },
  "&.selected": {
    opacity: 1,
    fontWeight: "bold",
  },
}))
const Tag = ({ color }) => {
  return (
      <SellIcon style={{ color: color, marginRight: 5 }} fontSize={'inherit'} />
  )
}

const Circle = styled("div")(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: 12,
  marginRight: 8,
}))
const Label = styled("div")(({ theme }) => ({
  fontSize: 11,
}))
const DashSep = styled("div")(({ theme }) => ({
  flexGrow: 1,
  borderBottom: `2px dotted ${muiColors.grey[300]}`,
  marginLeft: 8,
  marginRight: 8,
}))
const Number = styled("div")(({ theme }) => ({
  fontSize: 11,
  textAlign: "center",
  minWidth: 14,
  paddingTop: 2,
  paddingBottom: 2,
  fontWeight: "bold",
  color: muiColors.grey[700],
}))

export const ClassSelectionMenu = ({
  selectedCls,
  regionClsList,
  onSelectCls,
}) => {
  useEffect(() => {
    const keyMapping = {}
    for (let i = 0; i < 9 && i < regionClsList.length; i++) {
      keyMapping[i + 1] = () => onSelectCls(regionClsList[i])
    }

  }, [regionClsList, selectedCls])

  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Label list"
        subTitle=""
        icon={<BallotIcon style={{ color: muiColors.grey[700] }} />}
        expandedByDefault
      >
        {regionClsList.map((label, index) => (
          <LabelContainer
            className={classnames({ selected: label === selectedCls })}
            onClick={() => onSelectCls(label)}
          >
            <Tag
              color={colors[index % colors.length]}

            />
            <Label className={classnames({ selected: label === selectedCls })}>
              {capitalize(label)}
            </Label>
            <DashSep />
          </LabelContainer>
        ))}
        <Box pb={2} />
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default ClassSelectionMenu
