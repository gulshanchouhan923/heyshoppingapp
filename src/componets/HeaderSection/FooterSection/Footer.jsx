import React, { Fragment } from 'react'
import '../../Styles/footer.css'

function Footer() {
  return (
   <Fragment>
          <div className="footer-main-div">
        {/* left-side-details */}
           
        <div className="left-side-section">
             <div className="left-side-details-div">
                Product and Services
             </div>
             <ul>
                <li>
                     Lorem ipsum 
                </li>
                <li>
                     Lorem ipsum 
                </li>
                <li>
                     Lorem ipsum 
                </li>
             </ul>
        </div>

    {/* right side details */}
       <div className="right-side-section">
        <div className="right-side-details-div">
            <h4>  <div className="about-us"></div>About-us</h4>
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Voluptates maiores ex molestias id, ab
                 aliquam cum minus nam a consequatur 
                 eligendi quos perferendis nihil odit quasi possimus?
                  Amet, ullam perferendis.</p>
        </div>
       </div>




          </div>
          {/* bottom section copy right  */}
<div className="copy-right-section">
    <p>Copy Rihgt 2024 OF HEY SHOPPING Lorem ipsumperiores odit, tecto fugiat nihil act! A.</p>
</div>
   </Fragment>
  )
}

export default Footer