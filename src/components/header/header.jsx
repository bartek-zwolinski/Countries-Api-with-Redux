import React from 'react'
import '../../../src/index.css'

const Header = () => {
  
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const filter = document.querySelector(".form-control")

    filter.classList.toggle("light-theme");
    details.forEach((detail) => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    document.body.classList.toggle("light-theme")
  }
  
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world?</h1>
        </div>

        <div>
          <button className="btn" onClick={() => changeTheme()}>
          Change theme</button>
        </div>
      </header>
    </>
  )
}

export default Header
    



