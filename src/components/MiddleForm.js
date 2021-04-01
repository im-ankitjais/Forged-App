import { useContext, useState } from 'react';
import '../assets/css/Newsletter.css'
import axios from 'axios';
// import {DataContext} from '../context/DataContext'

const MiddleForm = () => {
//   const { setcloseModal } = useContext(DataContext);

    const [email,setEmail] = useState('');
    const[show,setShow] = useState({
        success:false,
        error:false
    })

    const postSubscribe = async  (e) => {
        e.preventDefault();
       
        axios.post(`https://pennystocksmailchimp.herokuapp.com/subscribe`,{
            email:email
        },{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            setShow({
                success:true,
                error:false
            })
            setEmail('')
            // setTimeout(function(){ setcloseModal(false) }, 1000);
        })
        .catch(err => {
            setShow({
                success:false,
                error:true
            })
        })
    }
    return(      
        <div className="home-newsletter bg-newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={postSubscribe}>
                        <div className="single">
                            <h5> Subscribe Now and get a e-Book for free.</h5>
                            <div className="input-group">
                                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
                                <span className="input-group-btn">
                                    <button  label="Your email"  className="btn btn-theme" type="submit" required>Subscribe</button>
                                </span>
                            </div>
                        </div>
                        </form>

                        {show.success && <p className="mail_mgge">Thank You for subscribing to our Newsletter.</p>}
                        {show.error && <p className="mail_mgge">Opps! Something went wrong. Please try again.</p>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleForm;