import React from 'react';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import GTranslateIcon from '@mui/icons-material/GTranslate';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { Button } from '@mui/material';

export default function NavbarOne() {
  return (
    <div className='navbarOneContainer'>

        <div style={{textAlign: "start"}}>

            <p><i class="fa-solid fa-landmark"></i>INTERNET ARCHIVE</p>

        </div>

        <div style={{textAlign: "end"}}>

            {/* <button className='donateBtn'>Donate <FavoriteIcon sx={{"fontSize": "1vw", "color": "red"}} /></button> */}
            {/* <i class="fa-solid fa-language"></i> */}

        </div>

    </div>
  )
}