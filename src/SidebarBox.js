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
// import EditIcon from '@material-ui/icons/Edit';
// ==============================|| SAMPLE PAGE ||============================== //

const SidebarBox = ({ name, Ficon, Licon }) => {
  // const n = name;
  const FIcon = Ficon;
  const LIcon = Licon;

  const stylingObject = {
    LIcon: {
      marginTop: 10,
      marginRight: 20,
      color: "#CCCCCC",
    },
    FIcon: {
      marginTop: 10,
      marginLeft: 20,
      color: "#CCCCCC",
    },
    text: {
      marginLeft: 22,
      fontSize: 13,
      color: "#CCCCCC",
    },
  };

  return (
    <Grid item xs={0.3} style={{ display: "flex", backgroundColor: "#2F2F2F" }}>
      <Box display="flex" flexGrow={1}>
        <FIcon style={stylingObject.FIcon} />
        {/* <FIcon /> */}
        <p style={stylingObject.text}>{name}</p>
      </Box>
      <LIcon style={stylingObject.LIcon} />
    </Grid>
  );
};

export default SidebarBox;
