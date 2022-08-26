import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavbarOne from './NavbarOne';
import { Link, useNavigate } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


export default function SearchResult() {

    const navigate = useNavigate();
    const location = useLocation();
    const [allBooks, setAllBooks] = useState([]);

    var [vision, setVision] = useState(false);
    var [seizure, setSeizure] = useState(false);
    var [dark, setDark] = useState(false);
    var [border, setBorder] = useState(false);

    const [drawerFlag2, setDrawerFlag2] = useState(false);

    var openDrawer2 = (event) => {
        setDrawerFlag2(true);
    }

    var closeDrawer2 = () => {
        setDrawerFlag2(false);
    }

    var openBook = (event, index, isbn) => {
        navigate('/bookDetails', { state: { bookID: isbn } });
    }

    var handleSearch2 = () => {
        setAllBooks([]);
        var searchFor = document.getElementById("searchInput2").value;

        fetch(`https://openlibrary.org/search.json?q=${searchFor}&mode=ebooks&has_fulltext=true`)
            .then(res => res.json())
            .then(temp => { setAllBooks(temp) })
    }

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${location.state.searchText}&mode=ebooks&has_fulltext=true`)
            .then(res => res.json())
            .then(temp => { setAllBooks(temp) })
    }, [])


    var settingsToggled = (event, setting) => {

        if (setting === 'vision') {
            if (event.currentTarget.checked === true) {
                setVision(true);
                setSeizure(false);
                setDark(false);
                document.getElementById("resultPageContainerID").style.filter = "saturate(200%)";
                document.getElementById("seizureCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                var searchedBooks4 = document.getElementsByClassName("resultBookDiv");

                for (var x = 0; x < searchedBooks4.length; x++) {
                    searchedBooks4[x].style.backgroundColor = "#f3edd7";
                    searchedBooks4[x].style.color = "black";
                }
            }
            else {
                setVision(false);
                document.getElementById("resultPageContainerID").style.filter = "saturate(100%)";
                document.getElementById("seizureCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
            }
        }

        else if (setting === 'seizure') {
            if (event.currentTarget.checked === true) {
                setSeizure(true);
                setVision(false);
                setDark(false);
                document.getElementById("resultPageContainerID").style.filter = "saturate(50%)";
                document.getElementById("visionCheck").checked = false;
                document.getElementById("darkCheck").checked = false;
                var searchedBooks3 = document.getElementsByClassName("resultBookDiv");

                for (var k = 0; k < searchedBooks3.length; k++) {
                    searchedBooks3[k].style.backgroundColor = "#f3edd7";
                    searchedBooks3[k].style.color = "black";
                }
            }
            else {
                setSeizure(false);
                document.getElementById("resultPageContainerID").style.filter = "saturate(100%)";

                document.getElementById("visionCheck").checked = false;
                document.getElementById("darkCheck").checked = false;

            }
        }

        else if (setting === 'dark') {
            if (event.currentTarget.checked === true) {
                setDark(true);
                setSeizure(false);
                setVision(false);
                var searchedBooks = document.getElementsByClassName("resultBookDiv");

                for (var i = 0; i < searchedBooks.length; i++) {
                    searchedBooks[i].style.backgroundColor = "#333";
                    searchedBooks[i].style.color = "white";
                }

                document.getElementById("resultPageContainerID").style.filter = "saturate(100%)";

            }
            else {
                setDark(false);
                var searchedBooks2 = document.getElementsByClassName("resultBookDiv");

                for (var j = 0; j < searchedBooks2.length; j++) {
                    searchedBooks2[j].style.backgroundColor = "#f3edd7";
                    searchedBooks2[j].style.color = "black";
                }
            }
        }
    }



    var borderHandler = (event) => {
        if (event.currentTarget.checked === true) {
            var tempName = document.getElementsByClassName("bookNameDetail");
            var tempAuthor = document.getElementsByClassName("bookAuthorDetail");

            for (var i = 0; i < tempName.length; i++) {
                tempName[i].style.border = "2px solid #02598b";
                tempAuthor[i].style.border = "2px solid rgb(68, 68, 68)";
            }

            setBorder(true);
        }


        else {
            setBorder(false);
            var tempName2 = document.getElementsByClassName("bookNameDetail");
            var tempAuthor2 = document.getElementsByClassName("bookAuthorDetail");

            for (var j = 0; j < tempName2.length; j++) {
                tempName2[j].style.border = "none";
                tempAuthor2[j].style.border = "none";
            }

        }
    }


    var resetSettings=(event)=>
    {
        setSeizure(false);
        setVision(false);
        setDark(false);
        setBorder(false);
        document.getElementById("resultPageContainerID").style.filter = "saturate(100%)";
        
        var searchedBooks2 = document.getElementsByClassName("resultBookDiv");

                for (var j = 0; j < searchedBooks2.length; j++) {
                    searchedBooks2[j].style.backgroundColor = "#f3edd7";
                    searchedBooks2[j].style.color = "black";
                }


        var tempName2 = document.getElementsByClassName("bookNameDetail");
        var tempAuthor2 = document.getElementsByClassName("bookAuthorDetail");
    
        for (var k = 0; k < tempName2.length; k++) {
            tempName2[k].style.border = "none";
            tempAuthor2[k].style.border = "none";
            }


        
        
        document.getElementById("seizureCheck").checked = false;
        document.getElementById("visionCheck").checked = false;
        document.getElementById("darkCheck").checked = false;
        document.getElementById("borderCheck").checked = false;
        
    }







    return (
        <div className='resultPageContainer' id="resultPageContainerID">

            <NavbarOne />

            <div className='navbarTwoContainer'>

                <button className='toggleDrawer2' onClick={(event) => openDrawer2(event)}><i class="fa-solid fa-person"></i></button>

                <div className='logoDiv'>
                    <Link to={{ pathname: "/" }} className="navLink" id="homeLink">
                        <img src="../libLogo.png" alt="" className='logoImg' />
                    </Link>
                </div>

                <div className='myBooksDiv'>

                    <p>My Books</p>

                </div>

                <div className='browseDiv'>

                    <p>Browse</p>

                </div>

                <div className='searchOuterDiv'>

                    <div className='searchInnerDiv'>

                        <input type="text" id="searchInput2" placeholder='Search' />

                        <button className='searchBtn' onClick={(event) => handleSearch2(event)}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>

                    </div>

                </div>

            </div>


            <div className='resultHeader'>

                <h1 className='searchHeading'>Showing Search Results :</h1>

            </div>

            {(Object.keys(allBooks).length > 0) ? (<div className='mainResultsContainer'>

                {allBooks.docs.map((book, index) => {
                    return (
                        <div className='resultBookDiv' key={index}>

                            <div className='resultBookImageDiv' id={index} onClick={(event) => openBook(event, index, (book.hasOwnProperty('isbn')) ? book.isbn[0] : "N/A")}>

                                <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} alt="" />

                            </div>

                            <div className='resultBookDetailsDiv'>

                                <div className='actualDetailsDiv'>
                                    <p className='bookNameDetail'>{book.title}</p>
                                    <p className='bookAuthorDetail'> - By <b>{book.author_name}</b></p>
                                    <p className='bookTimeDetail'>First Published In <b>{(book.hasOwnProperty('publish_year')) ? book.publish_year[0] : "N/A"}</b></p>
                                    <p className='bookSubDeails'>{book.edition_count} Editions in <u>{(book.hasOwnProperty('edition_count')) ? book.edition_count : "N/A"} Language</u></p>
                                </div>

                            </div>

                            <div className='resultBookBtnDiv'>

                                <div className='actualBtnDiv'>

                                    <button className='bookBtn1'>Not in Library</button>
                                    <button className='bookBtn2'>Want To Read</button>

                                </div>

                            </div>

                        </div>
                    )
                })}

            </div>) : <><div class="custom-loader"></div><h4>This May Take A While..</h4></>}


            <SwipeableDrawer open={drawerFlag2} anchor='right' onClose={() => closeDrawer2()} PaperProps={{ sx: { width: "50%", height: "60vw", borderRadius: "6px" } }}>

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



                    <div className='settingDiv'>

                        <label class="switch">
                            {(border === true) ? <input type="checkbox" id="borderCheck" onChange={(event) => borderHandler(event)} checked /> : <input type="checkbox" id="borderCheck" onChange={(event) => borderHandler(event)} />}
                            <span class="slider round"></span>
                        </label>

                        <p className='settingName'>Cognitive Disability Profile</p>

                        <p className='settingIcon'><i class="fa-brands fa-readme"></i></p>

                    </div>


                </div>

            </SwipeableDrawer>




        </div>
    )
}