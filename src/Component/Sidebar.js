import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {  Checkbox, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
 import DeleteIcon from  "@material-ui/icons/Delete";
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItem } from '@mui/material';
// import { ListItemButton } from '@mui/material';
// import { ListItemSecondaryAction } from '@material-ui/core';
import List from '@mui/material/List';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from '@mui/material/Button';
import SearchIcon from "@material-ui/icons/Search"; 
import { TextField } from '@material-ui/core';
import { Fab } from '@mui/material';
import { Grid } from '@material-ui/core';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { green } from '@mui/material/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

 const  Sidebar =({user}) => {
  const classes = useStyles();
  const [searchField, setSearchField] = React.useState("");

  const Users = user.filter(
   list => {
      return (
        list
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        list
        .phoneNumber
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  const searchFilter = (e) =>{
      setSearchField(e.target.value);
      console.log(e.target.value)
    };
  return (
    <Box  sx={{ display: 'flex'}}>
      <CssBaseline />
      <Box>
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
        
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" className={classes.title} sx={{ fontWeight: 600 }}>
           Audience
          </Typography>
        </Toolbar>
        <div style={{margin:"15px"}}>

       <Grid item  >
          <Typography sx={{ mb:1, ml:2 }} variant="h6" component="div">
            Exclude tags:
          </Typography>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>
        </Grid>
        
        <Grid item  >
          <Typography sx={{ mb:1, ml:2 }} variant="h6" component="div">
            Exclude tags:
          </Typography>
            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>

            <List>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                      <Checkbox/>
                    </IconButton>
                  }
                >
                  <ListItemText sx={{ml:1}}
                    primary="Gretting"
                  />
                </ListItem>
            </List>
        </Grid>

         <Typography align="left" variant='h6'>Message Sent</Typography>
         <Box sx={{ display:"flex"}}>
         <TextField  label="Min" variant="filled" />
         <TextField  label="Max" variant="filled" />
         </Box>
           
         <Typography variant='h6'>Message Recieve</Typography>  
         <Box sx={{ display:"flex"}}>
         <TextField  label="Min" variant="filled" />
         <TextField  label="Max" variant="filled" />
         </Box>
         </div> 
         <Button variant="contained" sx={{marginTop:"150px", borderRadius:"10px"}}>Save Filters</Button>
      </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 ,'marginBottom':8}}
      > 
        <div style={{display:"flex" ,justifyContent: "space-between",height:"60px"}}>
          
        <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>All Contact({user.length})</Typography>
        <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
         </Fab>
        </div>
    
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Contacts…"
              onChange={searchFilter}
              // onCancelSearch={() => cancelSearch()}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        <Box>
        <Box sx={{width:11, height:62}}> 
        <SelectAll>
        <Checkbox style={{marginLeft:"16px"}} icon={<RadioButtonUncheckedIcon />}checkedIcon={<CheckCircleIcon />}/>
        <Typography mt={1.1} ml={0.6} variant="subtitle1" display="inline">SelectAll</Typography>
        </SelectAll>
        </Box> 
        
        {Users.map((list) => (
          <>
          <Box  sx={{width:50, height:30 ,marginLeft:"18px"}}>
              <Typography variant="h6" gutterBottom component="div">A</Typography>  
              </Box>
          <Grid>
             
                <ListItem >
                        <Checkbox sx={{color: green[800],'&.Mui-checked': { color: green[600]}, }}icon={<RadioButtonUncheckedIcon />}checkedIcon={<CheckCircleIcon color="success"  />}/>
                        {/* <Avatar  sx={{ width: 54, height: 55 }}>{list.img}{list.name}</Avatar> */}
                        <AvatarContainer>
                             <AvatarLabel>
                                {/* <Avatar style={{ marginRight: "19px" }} alt="Jack Sparrow"/> */}
                                <Avatar  sx={{width: 54, height: 55 , }}></Avatar>
                                <Typography sx={{color: "#000000",fontWeight: "bold" ,textTransform: "capitalize"}} variant="h6" ml={1}>{list.name}</Typography>
                            </AvatarLabel>
                        </AvatarContainer>
                        <Typography>{list.phoneNumber}</Typography>
                </ListItem>
            
          </Grid>
        </>
        ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Sidebar;

// -----------------------------------------------------------------------------------------------------> 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },                                                                                   
  },
}));
const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginRight: "auto",
  },
}));

const AvatarLabel = styled('div') (({ theme }) => ({
  display: "flex",
  alignItems: "start",
  marginTop: theme.spacing(2) 
}))
const AvatarContainer = styled('div') (({theme}) => ({
  display: "flex",
  marginBottom: "14px",
}))
const SelectAll = styled('div') (({theme}) => ({
  display: "flex",
  alignItems: "start",
}))