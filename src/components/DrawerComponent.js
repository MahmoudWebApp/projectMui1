import React from 'react';
import { Drawer,List,ListItem,ListItemIcon, ListItemText } from '@mui/material';

const DrawerComponent = ({openDrawer,setOpenDrawer}) => {
  return (
    <Drawer anchor='right' open={openDrawer}>
       <List>
           <ListItem button divider onClick={()=>setOpenDrawer(false)}>
               <ListItemIcon>
                   <ListItemText>
                       Men
                   </ListItemText>
               </ListItemIcon>
           </ListItem>
           <ListItem button divider onClick={()=>setOpenDrawer(false)}>
               <ListItemIcon>
                   <ListItemText>
                       Women
                   </ListItemText>
               </ListItemIcon>
           </ListItem>
           <ListItem button divider onClick={()=>setOpenDrawer(false)}>
               <ListItemIcon>
                   <ListItemText>
                       Categories
                   </ListItemText>
               </ListItemIcon>
           </ListItem>
       </List>
    </Drawer>
  )
}

export default DrawerComponent