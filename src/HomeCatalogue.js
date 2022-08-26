import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function HomeCatalogue(props) {

  const navigate = useNavigate();

  var openBook2 = (event, index, isbn) => {
    navigate('/bookDetails', { state: { bookID: isbn } });
  }

  return (
    <div className='catalogueContainer' id="catalogueContainerID">

      <h2 className='catalogueHeading'>Trending Books</h2>

      {(Object.keys(props.books).length > 0) ? (<div className='mainCatalogueContainer'>

        {props.books.docs.map((item, index) => {
          return (<div className='bookContainer popOverDiv' key={index} onClick={(event) => openBook2(event, index, (item.hasOwnProperty('isbn')) ? item.isbn[0] : "N/A")}>

            <img src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`} alt="" />
            <p className='bookTitle'>{item.title}</p>
            <p className='bookAuthor'>{item.author_name}</p>

            <div className='popoverContent'>

              <p className='popoverMessage'>{item.title}</p>
              <p className='popoverMessage2'> - By {item.author_name}</p>
              
            </div>

          </div>
          )
        })}

      </div>

      ) : <><div class="custom-loader"></div><h4>This May Take A While..</h4></>}

    </div>
  )
}