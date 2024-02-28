import { useState } from "react";
import React from 'react'
import './intro.css'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Intro = () => {
    const [mobileN , setMobile] = useState("");
    // const [password, setPassword] = useState("");
    const [count, setCount] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(count <= 0){
            toast.error('Enter the valid count', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }
        else if(count > 10){
            toast.warn("Enter the secret code to send more than 10 messages. If you don't have the secret code than you can't spam more than 10 messages", {
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
        }
        else{
            toast.success('Spamming is started', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });

            const url = 'http://localhost:3001/send/send';
            const data = {
                mobile: mobileN
            };
            console.log(mobileN);
            try {
                const response = await axios.post(url, data);
                console.log('API call successful:', response.data);
            } catch (error) {
                console.error('Error during API call:', error);
            }
        }        
    }

  return (
    <div className='spamBox'>
      <h1 className='boxHeading'> SMS Bomber 💣 </h1>
      <form onSubmit={handleSubmit}>
        <label>Mobile No.</label>
        <input type='tel' placeholder='Mobile No.' required={true} onChange={(e) => setMobile(e.target.value)} />
        <label>Count</label>
        <input type='number' placeholder='Number of messages' required={true} onChange={(e) => setCount(e.target.value)} />
        <br/><br/>
        <input type='submit' className='submitBtn' />
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Intro
