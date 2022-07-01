import React from 'react'

function Menu(props) {

  return (
    <section className="menu">
        <div className="content-menu">
              <ul>
                  <li onClick={(e) => props.activeSection(1, e)}>
                      <i className="fa-solid fa-house"></i>
                      <p>Home</p>
                  </li>
                  <li onClick={(e) => props.activeSection(2, e)}>
                      <i className="fa-solid fa-signs-post"></i>
                      <p>Services</p>
                  </li>
                  <li onClick={(e) => props.activeSection(3, e)}>
                      <i className="fa-solid fa-ticket"></i>
                      <p>Tickets</p>
                  </li>
                  <li onClick={(e) => props.activeSection(4, e)}>
                      <i className="fa-solid fa-people-roof"></i>
                      <p>Sponsors</p>
                  </li>
                  <li onClick={(e) => props.activeSection(5, e)}>
                      <i className="fa-solid fa-clipboard"></i>
                      <p>Menu</p>
                  </li>
              </ul>
          </div>
      </section>
  )
}

export default Menu;