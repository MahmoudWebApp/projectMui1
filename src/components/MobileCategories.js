import { Autocomplete, TextField } from "@mui/material";
const data = [
  { label: "BabySitter" },
  { label: "sports" },
  { label: "Pets" },
  { label: "Fitness" },
  { label: "Movie" },
  { label: "Music" },
  { label: "Elecrical" },
  { label: "Power" },
  { label: "Clothes" },
  { label: "Kitchen" },
  { label: "Travel" },
];
const MobileCategories = () => {
  return (
    <Autocomplete
      sx={{ mt: 8, mb: 8 }}
      disablePortal
      options={data}
      renderInput={(params) => (
        <TextField {...params} label="Select Products" aling="center" />
      )}
    />
  );
};

export default MobileCategories;
