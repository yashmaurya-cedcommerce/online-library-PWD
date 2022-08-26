import React from 'react';
import NavbarOne from './NavbarOne';
import NavbarTwo from './NavbarTwo';
import Welcome from './Welcome';
import { useEffect, useState } from 'react';
import HomeCatalogue from './HomeCatalogue';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function Home() {


    var [vision, setVision] = useState(false);
    var [seizure, setSeizure] = useState(false);
    var [dark, setDark] = useState(false);
    var [border, setBorder] = useState(false);
    // var [cursor, setCursor] = useState(false);

    const [drawerFlag, setDrawerFlag] = useState(false)
    var openDrawer = (event) => {
        setDrawerFlag(true);
    }


    var closeDrawer = () => {
        setDrawerFlag(false);
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://openlibrary.org/search.json?q=america&mode=ebooks&has_fulltext=true')
            .then(res => res.json())
            .then(temp => { setBooks(temp) })
    })

    var settingsToggled = (event, setting) => {

        if (setting === 'vision') {
            if (event.currentTarget.checked === true) {
                setVision(true);
                setSeizure(false);
                setDark(false);
                document.getElementById("homeContainerID").style.filter = "saturate(200%)";
                document.getElementById("seizureCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                document.getElementById("welcomeID").style.backgroundColor = "white";
                document.getElementById("welcomeID").style.color = "black";
                document.getElementById("catalogueContainerID").style.backgroundColor = "white";
            }
            else {
                setVision(false);
                document.getElementById("homeContainerID").style.filter = "saturate(100%)";
                document.getElementById("seizureCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                document.getElementById("welcomeID").style.backgroundColor = "white";
                document.getElementById("welcomeID").style.color = "black";
                document.getElementById("catalogueContainerID").style.backgroundColor = "white";
            }
        }

        else if (setting === 'seizure') {
            if (event.currentTarget.checked === true) {
                setSeizure(true);
                setVision(false);
                setDark(false);
                document.getElementById("homeContainerID").style.filter = "saturate(50%)";
                document.getElementById("visionCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                document.getElementById("welcomeID").style.backgroundColor = "white";
                document.getElementById("welcomeID").style.color = "black";
                document.getElementById("catalogueContainerID").style.backgroundColor = "white";
            }
            else {
                setSeizure(false);
                document.getElementById("homeContainerID").style.filter = "saturate(100%)";
                document.getElementById("visionCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                document.getElementById("welcomeID").style.backgroundColor = "white";
                document.getElementById("welcomeID").style.color = "black";
                document.getElementById("catalogueContainerID").style.backgroundColor = "white";
            }
        }

        else if (setting === 'dark') {
            if (event.currentTarget.checked === true) {
                setDark(true);
                setSeizure(false);
                setVision(false);
                document.getElementById("welcomeID").style.backgroundColor = "#333";
                document.getElementById("welcomeID").style.color = "white";
                document.getElementById("catalogueContainerID").style.backgroundColor = "#333";
                document.getElementById("homeContainerID").style.filter = "saturate(100%)";
                document.getElementById("visionCheck").checked = false;
                document.getElementById("seizureCheck").checked = false;

            }
            else {
                setDark(false);
                document.getElementById("visionCheck").checked = false;
                document.getElementById("welcomeID").style.backgroundColor = "white";
                document.getElementById("welcomeID").style.color = "black";
                document.getElementById("catalogueContainerID").style.backgroundColor = "white";
                document.getElementById("homeContainerID").style.filter = "saturate(100%)";
                document.getElementById("visionCheck").checked = false;
                document.getElementById("seizureCheck").checked = false;
            }
        }
    }

    var rangeHandler=(event)=>
    {   
        var newFont = event.currentTarget.value+"vw";
        var newFont2 = event.currentTarget.value-0.3;
        newFont2 = newFont2+"vw";
        var tempName = document.getElementsByClassName("bookTitle");
        var tempAuthor = document.getElementsByClassName("bookAuthor");
        
        for(var i=0; i<tempName.length; i++)
        {
            tempName[i].style.fontSize = newFont;
            tempAuthor[i].style.fontSize = newFont2;
        }
    }

    var borderHandler=(event)=>
    {
        if(event.currentTarget.checked === true)
        {
            var tempName = document.getElementsByClassName("bookTitle");
            var tempAuthor = document.getElementsByClassName("bookAuthor");

            for(var i=0; i<tempName.length; i++)
            {
                tempName[i].style.border = "2px solid #02598b";
                tempAuthor[i].style.border = "2px solid rgb(68, 68, 68)";
            }

            setBorder(true);
        }
        

        else
        {
            setBorder(false);
            var tempName2 = document.getElementsByClassName("bookTitle");
            var tempAuthor2 = document.getElementsByClassName("bookAuthor");

            for(var i=0; i<tempName2.length; i++)
            {
                tempName2[i].style.border = "none";
                tempAuthor2[i].style.border = "none";
            }

        }
    }

    var resetSettings=(event)=>
    {
        setSeizure(false);
        setVision(false);
        setDark(false);
        setBorder(false);
        document.getElementById("homeContainerID").style.filter = "saturate(100%)";
        document.getElementById("welcomeID").style.backgroundColor = "white";
        document.getElementById("welcomeID").style.color = "black";
        document.getElementById("catalogueContainerID").style.backgroundColor = "white";
        document.getElementById("seizureCheck").checked = false;
        document.getElementById("visionCheck").checked = false;
        document.getElementById("darkCheck").checked = false;
        document.getElementById("borderCheck").checked = false;
        var tempName = document.getElementsByClassName("bookTitle");
        var tempAuthor = document.getElementsByClassName("bookAuthor");

        for(var i=0; i<tempName.length; i++)
        {
            tempName[i].style.fontSize = "1.5vw";
            tempAuthor[i].style.fontSize = "1.3vw";
        }

        var tempName2 = document.getElementsByClassName("bookTitle");
            var tempAuthor2 = document.getElementsByClassName("bookAuthor");

            for(var j=0; j<tempName2.length; j++)
            {
                tempName2[j].style.border = "none";
                tempAuthor2[j].style.border = "none";
            }
    }

      


    return (
        <div className='homeContainer' id='homeContainerID'>

            <NavbarOne />

            <NavbarTwo />

            <Welcome openDrawer={openDrawer} />

            <HomeCatalogue books={books} />

            <button className='toggleDrawer' onClick={(event) => openDrawer(event)}><i class="fa-solid fa-person"></i></button>

            <SwipeableDrawer open={drawerFlag} anchor='right' onClose={() => closeDrawer()} PaperProps={{ sx: { width: "50%", height: "60vw", borderRadius: "6px" } }}>

                <div className='drawerHeader'>
                    <p className='drawerHeading'>Accessibility Adjustments</p>

                    <div className='drawerSubheadingDiv'>

                        <p className='drawerSubheadingText'>Choose the right accessibility profile for you</p>
                        <p className='drawerSubheadingBtn'>
                            <button className='resetPageBtn' onClick={(event)=>resetSettings(event)}>Reset <i class="fa-solid fa-arrows-rotate"></i></button>
                        </p>

                    </div>
                </div>

                <div className='drawerContentDiv'>

                    <div className='settingDiv'>

                        <label class="switch">
                            {(seizure === true) ? <input type="checkbox" id="seizureCheck" onChange={(event) => settingsToggled(event, "seizure")} checked /> : <input type="checkbox" id="seizureCheck" onChange={(event) => settingsToggled(event, "seizure")} />}
                            <span class="slider round"></span>
                        </label>

                        <p className='settingName'>Seizure Safe Profile</p>

                        <p className='settingIcon'><i class="fa-solid fa-bolt-lightning"></i></p>

                    </div>

                    <div className='settingDiv'>

                        <label class="switch">
                            {(vision === true) ? <input type="checkbox" id="visionCheck" onChange={(event) => settingsToggled(event, "vision")} checked /> : <input type="checkbox" id="visionCheck" onChange={(event) => settingsToggled(event, "vision")} />}
                            <span class="slider round"></span>
                        </label>

                        <p className='settingName'>Vision Impaired Profile</p>

                        <p className='settingIcon'><i class="fa-solid fa-eye-low-vision"></i></p>

                    </div>

                    <div className='settingDiv'>

                        <label class="switch">
                            {(dark === true) ? <input type="checkbox" id="darkCheck" onChange={(event) => settingsToggled(event, "dark")} checked /> : <input type="checkbox" id="darkCheck" onChange={(event) => settingsToggled(event, "dark")} />}
                            <span class="slider round"></span>
                        </label>

                        <p className='settingName'>Dark Theme</p>

                        <p className='settingIcon'><i class="fa-solid fa-cloud-moon"></i></p>

                    </div>

                    <div className='settingDiv fontSizeDiv'>

                        <p className='settingName'>Set Font Size</p>

                        <div className='rangeInputDiv'>
                            <input type="range" min="1" max="2.5" step="0.1" id="slider" onChange={(event)=>rangeHandler(event)}  />
                        </div>

                    </div>

                    <div className='settingDiv'>

                        <label class="switch">
                            {(border === true) ? <input type="checkbox" id="borderCheck" onChange={(event) => borderHandler(event)} checked /> : <input type="checkbox" id="borderCheck" onChange={(event) => borderHandler(event)} />}
                            <span class="slider round"></span>
                        </label>

                        <p className='settingName'>Cognitive Disability Profile</p>

                        <p className='settingIcon'><i class="fa-brands fa-readme"></i></p>

                    </div>


                    {/* <div className='cursorFlex'>

                        <div className='cursorDiv' onClick={(event)=>changeCursor(event, "black")}>

                                <i class="fa-solid fa-arrow-pointer"></i>
                                <p>Big Black Cursor</p>

                        </div>

                        <div className='cursorDiv'>

                                <i class="fa-solid fa-arrow-pointer"></i>
                                <p>Big White Cursor</p>

                        </div>

                    </div> */}

                </div>

            </SwipeableDrawer>


        </div>
    )
}