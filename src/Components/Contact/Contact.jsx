import React from 'react'
import './Contact.css';
import {assets} from '../../assets/assets';
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending Response....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d07b869-e9fd-411b-8dd2-7e359706ed9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us a Message
          <img src={assets.msg_icon} alt="" />
        </h3>
        <p>Contact Us for more details of new batches , fees  and schemes.</p>
        <ul>
          <li><a href="mailto:pawan.sangare05@gmail.com"><img src={assets.mail_icon} alt="" /> pk.english@gmail.com</a></li>
          <li><a href='tel:+919009240816'><img src={assets.phone_icon} alt="" />+91 9009240816</a></li>
          <li><a href='https://www.google.com/maps/search/?api=1&query=2 Floor Housing Board Building ,Jagjivan Ram Nagar , Near Patnipura Indore'><img src={assets.location_icon} alt="" />2 Floor Housing Board Building ,Jagjivan Ram Nagar , Near Patnipura Indore</a></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='enter Your Name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={assets.white_arrow} alt="" /></button>
        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contact