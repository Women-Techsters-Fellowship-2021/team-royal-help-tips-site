import "../components/styles/about.css"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about">
          <h2> About This Project</h2>  
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto est nulla quod harum laudantium, deleniti, recusandae tempore dolorem eligendi voluptatem maxime quaerat ad officia sit quibusdam ipsum excepturi molestiae deserunt eaque magnam? Illum quae ipsum autem vitae natus aliquam vel quos. Nemo modi ipsa enim ab impedit quas, quam ratione.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eligendi perspiciatis? Sit tenetur aperiam nostrum optio architecto mollitia. Earum itaque maxime, dolore necessitatibus quaerat vel blanditiis recusandae accusamus tempore non?</p>

            
            <div className='sub-about'>
                <div className='sub'>
                    <h1>1505</h1>
                    <p>Notes Written</p>
                </div>
                <div className='line'></div>
                <div className='sub'>
                    <h1>109</h1>
                    <p>Projects Contributed</p>
                </div>
                <div className='line'></div>
                <div className='sub'>
                    <h1>87</h1>
                    <p>Happy Subscribers</p>
                </div>
            </div>
 
         <div className="about-btn">
             <Link className="btn btn-lg btn-add-note" to="/user/notes" role="button">
           Add Notes
          </Link>
           <Link className="btn btn-lg btn-add-note" to="/contact" role="button">
           Contact Us
          </Link>
         </div>
        </div>
    )
}
