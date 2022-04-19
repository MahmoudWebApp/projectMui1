import {
  Grid,
  Box,
  Typography,
  List,
  ListItemText,
  ListItemIcon,
  ListItem,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box mt={2}>
      <Grid container spacing={2} sx={{ py: 2, backgroundColor: "#729bae" }}>
        <Grid xs={12} md={4} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Categories</Typography>
            <List sx={{ color: "#fff" }}>
              <ListItemText>Woman</ListItemText>

              <ListItemText>Man</ListItemText>

              <ListItemText>FAQ</ListItemText>

              <ListItemText>Brand</ListItemText>
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={4} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Contact Us</Typography>
            <List >
              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "#fff" }} />
                  <ListItemText> mahmoud@gmail.com</ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon sx={{ color: "#fff" }} />
                  <ListItemText> 0933971101</ListItemText>
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="#fff" width="80%">
            copyright<CopyrightIcon fontSize="5px"/>
            from Mahmoud ahmed Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Rem possimus quibusdam asperiores consequuntur
            sapiente nemo quis illo.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
