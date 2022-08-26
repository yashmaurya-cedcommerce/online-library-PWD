import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavbarOne from './NavbarOne';

export default function BookDetails() {

    const navigate = useNavigate();

    const location = useLocation();
    const [clickedBook, setClickedBook] = useState({});

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${location.state.bookID}&mode=ebooks&has_fulltext=true`)
            .then(res => res.json())
            .then(temp => { setClickedBook(temp) })
    }, []);

    var handleSearch3 = () => {
        var searchText = document.getElementById("searchInput3").value;
        navigate('/searchResult', { state: { searchText: searchText } });
    }

    return (
        <div className='bookPageContainer'>

            <NavbarOne />

            <div className='navbarTwoContainer'>

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

                        <input type="text" id="searchInput3" placeholder='Search' />

                        <button className='searchBtn' onClick={(event) => handleSearch3(event)}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>

                    </div>

                </div>

            </div>

            {(Object.keys(clickedBook).length > 0) ? <div className='mainBookPageContainer'>

                {(clickedBook.docs[0].hasOwnProperty('cover_edition_key')) ? <div className='openedBookImageDiv'>

                    <img src={`https://covers.openlibrary.org/b/olid/${clickedBook.docs[0].cover_edition_key}-M.jpg`} alt="" />

                    <button className='openedBookBtn'>Want To Read</button>

                </div> : 'N/A'}

                <div className='openedBookDetailsDiv'>

                    <p className='pageBookTitle'>{clickedBook.docs[0].title}</p>
                    <p className='pageBookAuthor'><i> - By {clickedBook.docs[0].author_name}</i></p>
                    <p className='pageBookAuthor'>0 Ratings . 0 Want to read . 0 Currently reading . 0 Have read</p>

                    <h3 className='overviewMainHeading'>Overview</h3>

                    <div className='overviewDiv'>

                        <div className='overviewSubdiv'>
                            <p className='overviewHeading'>Publish Date</p>
                            <p className='overviewSubheading'>{clickedBook.docs[0].publish_date.at(-1)}</p>
                        </div>

                        <div className='overviewSubdiv'>
                            <p className='overviewHeading'>Publisher</p>
                            <p className='overviewSubheading'>{clickedBook.docs[0].publisher[0]}</p>
                        </div>

                        <div className='overviewSubdiv'>
                            <p className='overviewHeading'>Pages</p>
                            <p className='overviewSubheading'>{clickedBook.docs[0].number_of_pages_median}</p>
                        </div>

                    </div>

                    {(clickedBook.docs[0].hasOwnProperty('language')) ? <div className='languagesDiv'>

                        <p className='languagesMainHeading'>Languages Available</p>
                        <div className='allLangDiv'>

                            {clickedBook.docs[0].language.map((lang, index2) => {
                                return <p className='langSubHeading' key={index2}>{lang}</p>
                            })}

                        </div>

                    </div> : ''
                    }

                </div>

            </div> : <><div class="custom-loader"></div><h4>This May Take A While..</h4></>
            }


        </div>
    )
}