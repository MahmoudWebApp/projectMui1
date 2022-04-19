import { Menu, MenuItem } from "@mui/material";

const DropdownMenu = ({ items, id, anchorEl, open,onClose }) => {
  return (
    <Menu id={id} anchorEl={anchorEl} open={open} onClose={onClose}>
      {items.map((item,index) => (
        <MenuItem key={index+1} onClick={onClose}>{item.title}</MenuItem>
      ))}
    </Menu>
  );
};

export default DropdownMenu;
