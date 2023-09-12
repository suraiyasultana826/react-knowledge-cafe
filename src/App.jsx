


import { useState } from 'react'
import './App.css'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Header/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks, setBookmarks] =useState([]);
 const [readingTime, setReadingTime] = useState(0)
 const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);

 }

 const handleMarkAsRead = (id, time) => {
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  //remove the read blog from bookmark
  // console.log('remove bookmark', id)
  const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookMarks);
 }
  return (
    <>
      
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
      
    </>
  )
}

export default App
