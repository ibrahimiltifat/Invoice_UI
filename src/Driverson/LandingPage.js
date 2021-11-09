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
import logo1 from "../icons/logo1.png";

const LandingPage = () => {

  const stylingObject = {
    headerText: {
      color: "#CCCCCC",
    }
  };

  return (
    <Grid container direction="column">
      <Grid container xs={12}>
        <Grid item>
          <img
            style={{ marginTop: -40, height: 140, width: 140 }}
            src={logo1}
          />
        </Grid>
        <Grid item>
          <Box
            style={{ marginLeft: 450, marginTop: 10 }}
            display="flex"
            flexGrow={1}
            gap="1rem"
          >
            <p style={stylingObject.headerText}>Home</p>
            <p>Find Schools</p>
            <p>Request a Call</p>
            <p>FAQ</p>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
