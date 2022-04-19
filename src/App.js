import { Navbar ,Header,Product, Footer } from "./components";
import {useTheme,useMediaQuery} from '@mui/material'

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
 <>
   <Navbar matches={matches}/>
   <Header matches={matches}/>
   <Product matches={matches}/>
   <Footer matches={matches}/>

 </>
  );
}

export default App;
