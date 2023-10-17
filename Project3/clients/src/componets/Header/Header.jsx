// Header.js
import { useState } from 'react'
import './header.css' // Import the CSS file

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [isSelectedexterior,setisSelectedexterior]=useState(false);
  const [exteriorprevprice,setexteriorprevprice]=useState(0);
  const [selectedOption, setSelectedOption] = useState(null)
  const [totalprice, settotalprice] = useState(65000)
  const handleButtonClick = (option) => {
    setSelectedOption(option)
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  const handleOptionClick = (option, price) => {
    if(option=='exterior'){
      if(isSelectedexterior)
       
      }
   
  }

  const options = {
    roof: [
      {
        image:
          'https://boltbucket.up.railway.app/assets/background-240dddc4.jpg',
        price: 1000,
      },
      {
        image:
          'https://boltbucket.up.railway.app/assets/background-240dddc4.jpg',
        price: 1200,
      },
      {
        image:
          'https://boltbucket.up.railway.app/assets/background-240dddc4.jpg',
        price: 1500,
      },
    ],
    wheels: [
      { image: '', price: 800 },
      { image: '', price: 1000 },
      { image: '', price: 1200 },
    ],
    interior: [
      { image: '', price: 500 },
      { image: '', price: 700 },
      { image: '', price: 900 },
    ],
    exterior: [
      { image: '', price: 500 },
      { image: '', price: 700 },
      { image: '', price: 900 },
    ],
  }
  const renderOptionCards = (option) => {
    return options[option].map((option, index) => (
      <div
        className="option-card"
        key={index}
        onClick={() => handleOptionClick(option,option.price)}
      >
        <div className="option-image">
          <img src={option?.image} alt="" />
        </div>
        <div className="option-details">
          <div className="option-price">${option?.price}</div>
        </div>
      </div>
    ))
  }

  return (
    <>
      <header className="header">
        <div className="options">
          <input type="checkbox" id="checkbox-btn" />
          <label htmlFor="checkbox-btn">Convertible</label>
          <button onClick={() => handleButtonClick('exterior')}>
            Exterior
          </button>
          <button onClick={() => handleButtonClick('roof')}>Roof</button>
          <button onClick={() => handleButtonClick('wheels')}>Wheels</button>
          <button onClick={() => handleButtonClick('interior')}>
            Interior
          </button>
        </div>
        <div className="user-input">
          <input type="text" placeholder="Enter car name" />
          <button className="create-button">Create</button>
        </div>
      </header>

      <section id="modal">
        {showModal && selectedOption && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="box-card">
                {renderOptionCards(selectedOption)}
              </div>
            </div>
          </div>
        )}
      </section>
      <div className="price">
        <span className="logo-price">💰 $</span>
        <span className="price-number">{totalprice}</span>
      </div>
    </>
  )
}

export default Header
