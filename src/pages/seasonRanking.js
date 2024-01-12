import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ElaineAvatar from '../images/Elaine.png'
import JoeZAvatar from '../images/JoeZ.png'
import JoeSAvatar from '../images/JoeS.png'
import ChloeAvatar from '../images/Chloe.png'
import JackAvatar from '../images/Jack.png'
import LinyiAvatar from '../images/Linyi.png'
import TJinAvatar from '../images/TJin.png'
import golduckGif from '../images/golduck.gif'
import sylveon from '../images/sylveon.gif'
import ElaineAvatar1 from '../images/Elaine.gif'
import JoeZAvatar1 from '../images/JoeZ.gif'
import JoeSAvatar1 from '../images/JoeS.gif'
import ChloeAvatar1 from '../images/Chloe.gif'
import JackAvatar1 from '../images/Jack.gif'
import LinyiAvatar1 from '../images/Linyi.gif'
import TJinAvatar1 from '../images/TJin.gif'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Podium from '../images/podium.png';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { TypeAnimation } from 'react-type-animation';

import './seasonRanking.css'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SeasonRanking() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        variant="scrollable" scrollButtons="auto">
          <Tab label="2023 Oct-Dec" {...a11yProps(0)} />
          <Tab label="2024 Jan-March" {...a11yProps(1)} />
          <Tab label="2024 Apr-Jun" {...a11yProps(2)} />
          <Tab label="2024 Jul-Sept" {...a11yProps(3)} />
          <Tab label="2024 Oct-Dec" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Coming soon ...      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Coming soon ...
      </CustomTabPanel>
    </Box>
  );
}