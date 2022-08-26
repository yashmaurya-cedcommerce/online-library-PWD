import React from 'react';
import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function NavbarTwo(props) {

    const navigate = useNavigate();

    var handleSearch=(event)=>
    {
        var searchText = document.getElementById("searchInput").value;

        navigate('/searchResult',{state:{searchText: searchText}});
    }


  return (
    <div className='navbarTwoContainer'>

        
            
            <div className='logoDiv'>
            <Link to={{pathname: "/"}} className="navLink" id="homeLink">
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

                <input type="text" id="searchInput" placeholder='Search' />
                
                <button className='searchBtn' onClick={(event)=>handleSearch(event)}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>

            </div>

        </div>

    </div>
  )
}