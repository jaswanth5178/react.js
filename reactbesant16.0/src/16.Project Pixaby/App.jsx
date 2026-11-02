import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [currentPage, setCurrentpage] = useState(1)

  function handleNext() {
    setCurrentpage((pre) => pre + 1)
  }

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentpage((pre) => pre - 1)
    }
  }

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=57883203-f43bd55718b47323a7fafcc9c&q=${search}&image_type=photo&per_page=10&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((d) => setData(d.hits))
  }, [search, currentPage])

  return (
    <div className="app">

      {/* Header */}
      <header className="header">

        <nav className="navbar">

          <div className="logo">
            ImageGallery
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </nav>

      </header>


      {/* Main Content */}
      <main>

        <div className="search-box">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentpage(1)
            }}
            placeholder="Search image..."
          />
        </div>


        {/* Image Gallery */}
        <section className="gallery" id="gallery">

         {data.map((item) => {
  console.log(item.webformatURL)

  return (
    <div className="image-card" key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
      />
    </div>
  )
})}

        </section>


        {/* Pagination */}
        <div className="pagination">

          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <span>{currentPage}</span>

          <button onClick={handleNext}>
            Next
          </button>

        </div>

      </main>


      {/* Footer */}
      <footer className="footer">

        <div className="footer-content">

          <h2>ImageGallery</h2>

          <p>
            Search and explore beautiful images using Pixabay.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <p className="copyright">
            © 2026 ImageGallery. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App