import {Link} from 'react-router-dom';
import Contact from '../Contact/Contact';
// import Navbar from './navbar';
import './App.css';

function Landing() {
    return(
		<>
	<div className='bg-banner'>
	    {/* <Navbar /> */}
	    <div className='land-container'>
		<p className='text-center land-intro'>EASY LEARNING WITH OUR NOTES</p>
		<div className='btn-container'>
		    <Link to='/login' role='button' className='py-2 my-2 mr-4 btn-c'>Login</Link>
		    <Link to='/register' role='button' className='btn-c btn-cf my-2 py-2'>Register</Link>
		</div>
	    </div>
	</div>
	<Contact />
	</>
    )
}
export default Landing;
