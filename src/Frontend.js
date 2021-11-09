// project imports
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import SidebarBox from "./SidebarBox";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import WorkIcon from "@mui/icons-material/Work";
import DomainIcon from "@mui/icons-material/Domain";
import ExplicitIcon from "@mui/icons-material/Explicit";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ForumIcon from "@mui/icons-material/Forum";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Frontend = () => {
  const m = 5;
  return (
    <Grid container>
      <Grid container xs={2.15} direction="column">
        <Grid item style={{ display: "flex", backgroundColor: "white" }}>
          <Box display="flex" flexGrow={1}>
            <EmailIcon
              style={{ marginTop: 19, marginLeft: 20, color: "black" }}
            />
            <p style={{ fontSize: 19, color: "black", marginLeft: 22 }}>
              New Company
            </p>
          </Box>
          <ArrowDropDownIcon
            style={{ marginTop: 19, marginRight: 20, color: "black" }}
          />
        </Grid>
        <SidebarBox name="Dashboard" Ficon={ViewQuiltIcon} Licon={SearchIcon} />
        <SidebarBox
          name="clients"
          Ficon={PeopleIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Products"
          Ficon={AttachFileIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Invoices"
          Ficon={AccountBoxIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Recurring Invoices"
          Ficon={RestorePageIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Payments"
          Ficon={CreditCardIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Quotes"
          Ficon={AccountBoxIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Credits"
          Ficon={KeyboardReturnIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Projects"
          Ficon={WorkIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Tasks"
          Ficon={AccessTimeIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Vendors"
          Ficon={DomainIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Expenses"
          Ficon={ExplicitIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Recurring Expenses"
          Ficon={RestorePageIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Reports"
          Ficon={ShowChartIcon}
          Licon={AddCircleOutlineIcon}
        />
        <SidebarBox
          name="Settings"
          Ficon={SettingsIcon}
          Licon={AddCircleOutlineIcon}
        />
        <Grid
          item
          xs={0.48}
          style={{ display: "flex", backgroundColor: "white" }}
        >
          <Box display="flex" flexGrow={1} gap="1rem">
            <ArrowCircleUpIcon
              style={{ marginTop: 6, marginLeft: 8, color: "black" }}
            />
            <EmailIcon style={{ marginTop: 6, color: "black" }} />
            <ForumIcon style={{ marginTop: 6, color: "black" }} />
            <HelpOutlineIcon style={{ marginTop: 6, color: "black" }} />
            <ErrorOutlineIcon style={{ marginTop: 6, color: "black" }} />
          </Box>
          <div style={{ display: "flex", backgroundColor: "grey" }}>
            <KeyboardArrowLeftIcon
              style={{
                alignSelf: "center",
                marginTop: 5,
                marginRight: 4,
                paddingLeft: 5,
                paddingBottom: 11,
                color: "black",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Frontend;
