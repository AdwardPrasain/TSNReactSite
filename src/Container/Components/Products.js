import React from 'react'
import { useState } from 'react';
import '../Assets/Styles/Product.css'
import Navbar from './Navbar';

function Products() {

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " ...show less"}
        </span>
      </p>
    );
  };
  return (
    <div>


        <div className="container">
     
      <div className='product' id='product'>
          <h2>Our Products</h2>
          <div className='product-form'>
            <div className='product-section '>
              {/* <img src={municipal} alt='municipal erp'/> */}
              <label>Local Government Planning Management System (LGPMS)</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
            <div className='product-section'>
              {/* <img src={digital} alt='digital marketing'/> */}
              <label>Local Government Revenue Management</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
            </div>
            <div className='product-form'>
            <div className='product-section'>
              {/* <img src={website} alt='website development'/> */}
              <label>Local Government IDcard Management System</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
            <div className='product-section'>
              {/* <img src={mob} alt='mob app'/> */}
              <label>Local Government Fuel Management System</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
          </div>

          <div className='product-form'>
            <div className='product-section'>
              {/* <img src={website} alt='website development'/> */}
              <label>Local Government Nyayik Samiti</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
            <div className='product-section'>
              {/* <img src={mob} alt='mob app'/> */}
              <label>PIS</label>
              <p>
        <ReadMore>
                Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.
        </ReadMore>
      </p>
      <button className='Pbutton'>Link</button>
            </div>
          </div>

          </div>
    </div>
    </div>
  )
}

export default Products