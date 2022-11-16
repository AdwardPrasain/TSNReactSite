import React from 'react'
import '../Assets/Styles/Navbar.css'
import {Link} from 'react-router-dom';
import '../Assets/Styles/AboutUs.css'
import Modal from 'react-modal';


//react reveal
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';

//import images
import dotted from '../Assets/Images/dotted.png'
import png from '../Assets/Images/PNG.png'
import backimg from '../Assets/Images/back.png'
import img1 from '../Assets/Images/1.png'
import img2 from '../Assets/Images/Net1.png'
import transparency from '../Assets/Images/transparency.png'
import commitment from '../Assets/Images/commitment.jpg'
import ontime from '../Assets/Images/ontime.jpg'
import service from '../Assets/Images/service.png'
import client from '../Assets/Images/client1.png'
import client2 from '../Assets/Images/client2.jfif'
import clients from '../Assets/Images/clients.png'
import work1 from '../Assets/Images/work1.png'
import work2 from '../Assets/Images/work2.png'
import arrow from '../Assets/Images/arrow.png'
import outcome from '../Assets/Images/outcome.jpg'
import municipal from '../Assets/Images/municipal.png'
import digital from '../Assets/Images/digital.png'
import website from '../Assets/Images/website.png'
import mob from '../Assets/Images/mob.png'
import location from '../Assets/Images/location.png'
import mail from '../Assets/Images/mail.png'
import phone from '../Assets/Images/phone.png'

// import left from '../Assets/Images/left.png'
// import desk from '../Assets/Images/desk.png'
// import right from '../Assets/Images/right.png'

//importing icons
import { FaRegLightbulb } from "react-icons/fa"; 
import { MdDesignServices } from "react-icons/md"; 
import { FcClapperboard} from "react-icons/fc";
import { FcBinoculars } from "react-icons/fc"; 
import { GiHypodermicTest } from "react-icons/gi";
import { FaTools } from "react-icons/fa"; 
import { GrDocumentPerformance,GrClose} from "react-icons/gr"; 
import { TbLivePhoto} from "react-icons/tb"; 
import { MdSecurityUpdateGood} from "react-icons/md"; 
import {GrFacebook} from "react-icons/gr";
import {SiLinkedin} from "react-icons/si";
import {BsTwitter} from "react-icons/bs";
import Navbar from './Navbar';

function Dashboard() {

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width:'650px',
      height:'300px',
      outline:'none',
      border:'none',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Navbar/>
         <div className='background' id='home'>
            <img className='dotted' src={dotted} alt='dot'/>
            
            <div className='halfcircle'>
            <div className='backimg'>
          <img src={backimg} alt='backimg'/>
        </div>
            </div>
        </div>
        
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>

        <div className='backgroundContent'>
        <h2>Software Development Company</h2>
        <h3> building all shots of application i.e.</h3><span></span>
        <button className='button' onClick={openModal}>Let's Communicate</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Contact Us</h2>
        <button onClick={closeModal}><GrClose/></button>
        <div>
          <div className='contact-us'>
          <div className='group'>
          <label>Name</label>
          <input type="text"/>
          </div>
          <div className='group'>
          <label>Email</label>
          <input type="text"/>
          </div>
          <div className='Sbutton'>Submit</div>
        </div>
        </div>
        
      </Modal>
        <div className='png'>
        <img src={png} alt='backgroundimg'/>
        </div>
      </div>
      
      <div className='tabDownBackground'>
        <div className='tabimg'>
        {/* <img src={dim} alt='dim'/> */}
        </div>
       
      <div className='tabDown'>
        <div className='tabDownimg'>
        <div className='picture'>
      <div className="cf">
        <img class="bottom" src={img2} alt='img' />
        <img class="top" src={img1} alt='img' />
    </div>
    
    </div>
        </div>
        
       <div className='tabDownContent'>   
        <Slide bottom>
        <h3>We Aspire To Meet Your Commercial Expectations</h3>
        <h4>With Us, Boost Your Digital Branding</h4>
        </Slide>
       <Slide up>
       <h2>Technology Solution Nepal</h2>
        <h4>Start using our software development service which comes with best in class smart features to help your business grow.</h4>
       </Slide>
       <p id='tech'>Developing a better web design</p>
      <p>We've been in development for more than 18 years for a reason!</p>
        </div>
      </div>
    </div>

      <div className="Container-fuild">
        
          <h1>What is the finest about our development?</h1>
        <div className='form-row'>
          <div className='form-group col-md-4'>
            <label> <FaRegLightbulb/> We provide framework, architectural, and navigational suggestions.</label>
            
          </div>
          <div className='form-group col-md-4'>
            <label><MdDesignServices/> We work on the front end to develop the user interface and user experience</label>
        
          </div>
          <div className='form-group col-md-4'>
            <label><FcClapperboard/> including media components like music, video, and photos</label>
            
          </div>
          </div>

          <div className='form-row'>
          <div className='form-group col-md-4'>
            <label><FcBinoculars /> Creating material, publishing it, and optimizing it in accordance with best practices</label>
           
          </div>
          <div className='form-group col-md-4'>
            <label><GiHypodermicTest/> Before launch, the website and app will be tested (beta testing)</label>
          
          </div>
          <div className='form-group col-md-4'>
            <label><FaTools/> locating issues and addressing bugs</label>
         
          </div>
      </div>

      <div className='form-row'>
          <div className='form-group col-md-4'>
            <label> <GrDocumentPerformance/> testing for performance and speed</label>
           
          </div>
          <div className='form-group col-md-4'>
            <label><TbLivePhoto/> Implementing codes in place and going live</label>
         
          </div>
          <div className='form-group col-md-4'>
            <label><MdSecurityUpdateGood/> constant upkeep and update of this internet real time</label>
           
          </div>
        </div>

      </div>

      <div className='WorkProcess'>
        <h2>Our work <span>process</span></h2>
        <h3>Have a look on <span>how we work.</span></h3>
        <div className='workImg'>
          <Slide left><img src={work1} alt="work process"/></Slide>
          <span><img src={arrow} alt='arrow'/></span>
         <Slide right> <img src={work2} alt="work process"/></Slide>
          
        </div>
        <div className='outcome'>
          <h2>Final Outcome</h2>
        <Slide bottom><img src={outcome} alt="outcome"/></Slide>
        </div>

       <div className='AboutUs' id='aboutUs'>
       <div className='Section'>
      <RubberBand>
        <h2>Our Company Values</h2>
        </RubberBand>
      </div>
      <div className='Values'>
        <div className='ValueImg'>
          <img src={transparency} alt='transparency'/>
          <div className='intro'>
            <h1>Transparency</h1>
            <p>Openess with our team and clients.
              We raise issues and provide solutions promptly.
            </p>
          </div>
          </div>

          <div className='ValueImg'>
          <img src={commitment} alt='commitment'/>
          <div className='intro'>
            <h1>Commitment</h1>
            <p>Our word and hard work over everything else. 
              Our clients and vision are our guiding beacons.
            </p>
          </div>
          </div>
          
          <div className='ValueImg'>
          <img src={ontime} alt='ontime'/>
          <div className='intro'>
            <h1>Ontime Deliver</h1>
            <p>Deliver the product on time with all the 
              feautures as specified by our clients.
            </p>
          </div>
          </div>

          <div className='ValueImg'>
          <img src={service} alt='service'/>
          <div className='intro'>
            <h1>Service & Support</h1>
            <p>We strive to provide excellent customer service to our clients and
               ensure that they are satisfied from our work and service
            </p>
          </div>
          </div>
          
        </div>
       
        <div className='wholeClient'>
        <div className='customer'>
        <h2>Some of our valuable customers</h2>
        </div>
        <div className='x'>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>महालेखा नियन्त्रक कार्यालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client2} alt='client'/>
          <div className='client'>
          <p>राष्ट्रिय वाणिज्य बैंक</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>युवा तथा साना व्यवसायी स्वरोजगार कोष सचिवालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>५० + स्थानीय तहहरु</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>प्रदेश-१ यातायात व्यवस्था निर्देशनालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={clients} alt='client'/>
          <div className='client'>
            <p>100 + Private Clients</p>
          </div>
          </div>

          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>महालेखा नियन्त्रक कार्यालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client2} alt='client'/>
          <div className='client'>
          <p>राष्ट्रिय वाणिज्य बैंक</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>युवा तथा साना व्यवसायी स्वरोजगार कोष सचिवालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>५० + स्थानीय तहहरु</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>प्रदेश-१ यातायात व्यवस्था निर्देशनालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={clients} alt='client'/>
          <div className='client'>
            <p>100 + Private Clients</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>महालेखा नियन्त्रक कार्यालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client2} alt='client'/>
          <div className='client'>
          <p>राष्ट्रिय वाणिज्य बैंक</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>युवा तथा साना व्यवसायी स्वरोजगार कोष सचिवालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>५० + स्थानीय तहहरु</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>प्रदेश-१ यातायात व्यवस्था निर्देशनालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={clients} alt='client'/>
          <div className='client'>
            <p>100 + Private Clients</p>
          </div>
          </div>

          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>महालेखा नियन्त्रक कार्यालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client2} alt='client'/>
          <div className='client'>
          <p>राष्ट्रिय वाणिज्य बैंक</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
          <p>युवा तथा साना व्यवसायी स्वरोजगार कोष सचिवालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>५० + स्थानीय तहहरु</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={client} alt='client'/>
          <div className='client'>
            <p>प्रदेश-१ यातायात व्यवस्था निर्देशनालय</p>
          </div>
          </div>
          <div className='boxContent'>
          <img src={clients} alt='client'/>
          <div className='client'>
            <p>100 + Private Clients</p>
          </div>
          </div>
          </div>
          </div>
      
        </div>       


        <div className='service' id='services'>
          <h2>Our Services</h2>
          <div className='service-form'>
            <div className='service-section col-mod-4'>
              <img src={municipal} alt='municipal erp'/>
              <label>MUNICIPAL ERP</label>
              <p>Enterprise Resource Planning system for Local Government bodies. 
                This system is made up of latest technologies and designed to provide easy, 
                faster and hassle free service through the local bodies with implementation of proper data security and safety. 
                It help manageday to day functions like Land Taxation,Revenue Taxation, Company Registration,Inventory Management, 
                Planning Management and so on.</p>
            </div>
            <div className='service-section col-mod-4'>
              <img src={digital} alt='digital marketing'/>
              <label>DIGITAL MARKETING</label>
              <p>The promotion of brands to connect with potential customers using the internet and other forms of digital communication. 
                This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
            </div>
            </div>
            <div className='service-form'>
            <div className='service-section col-mod-4'>
              <img src={website} alt='website development'/>
              <label>WEBSITE DEVELOPMENT</label>
              <p>Website Development for different private and local government bodies with CMS to facilitate 
                our clients to provide their service and information through internet accesible by multiple users.</p>
            </div>
            <div className='service-section col-mod-4'>
              <img src={mob} alt='mob app'/>
              <label>MOBILE APP DEVELOPMENT</label>
              <p>Mobile app development for portable, easily accesible and user friendly way of providing business 
                services with extensive range of functions like Database connectivity , API connection, UI/UX and Database requiered for 
                complete development of app. Provided services to business and private organizations.</p>
            </div>
          </div>
        </div>

        <div className='Contact' id='contact'>
          <div className='ContactContainer'>
            <div className='contactUs'>
              <h2>Contact Us</h2>
              <div className='info'>
                <img src={location} alt='location'/>
                <label>Itahari, Sunsari</label>
              </div>

              <div className='info'>
                <img src={mail} alt='mail'/>
                <label>tsnpl@gmail.com</label>
              </div>

              <div className='info'>
                <img src={phone} alt='location'/>
                <label>9800000000</label>
              </div>
            </div>
            <div className='contactForm'>
              <h2>Get in Touch</h2>
            
            <div className='formInfo'>
              <label>Full Name</label>
              <input type='text'/>
            </div>
            <div className='formInfo'>
              <label>Phone Number</label>
              <input type='number'/>
            </div>
            <div className='formInfo'>
              <label>E-mail</label>
              <input type='email'/>
            </div>
            <div className='formInfo'>
              <label>Your message</label>
              <textarea className='textarea' rows="4" cols="24"/>
            </div>
            <div className='Sbutton'>Submit</div>
          </div>
          </div>
          </div>

        <div className='footer'>
        <div className='form'>
          <div className='form-column col-md-4'>
            <h3>Technology Solution Nepal.</h3> 
            <p>We at tsnpl are a group of enthusiastic young professionals who share a love of digital and creative. 
              We have clients from all around the country as well as from abroad and we are based in Itahari, the hub of Nepalese events. 
              Our team has more than 18 years of combined experience, which is helpful as we work now to provide answers for tomorrow.</p>
          </div>
          <div className='form-column col-md-4'>
            <h3>Useful Links</h3>
            <div className='link'>
            <div className='link1'>
          
          <Link to ="/" className="l" id='hover'>HOME</Link>
          <Link to ="/aboutUs" className="l" id='hover'>ABOUT</Link>
          <Link to ="/" className="l" id='hover'>SERVICES</Link>
         
          </div>
          <div className='link2'>
          
          <Link to ="/" className="l" id='hover'>PRODUCT</Link>
          <Link to ="/" className="l" id='hover'>CONTACT</Link>
          </div>
          </div>
          </div>
          <div className='form-column col-md-4'>
          <h3>Network</h3>
          <div className='network'>
          <Link to ="/" className="N" id='hover'><GrFacebook size={25}/></Link>
          <Link to ="/" className="N" id='hover'><SiLinkedin size={25}/></Link>
          <Link to ="/" className="N" id='hover'><BsTwitter size={25}/></Link>
          </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Dashboard