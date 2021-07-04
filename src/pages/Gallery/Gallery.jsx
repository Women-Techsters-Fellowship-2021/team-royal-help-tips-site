import Evelyn from '../../images/Evelyn.jpg';
import Immaculate from '../../images/Immaculate.jpg';
import Remilekun from '../../images/Remilekun.jpg';
import './gallery.css'

import React from 'react'

export default function Gallery() {
    return (
		<div className="wrapper">
			<h1> Project Contributors</h1>
			<div className="gallery">
			<div className="gallery-img">
				<p className="gallery-info">Evelyn</p>
				<img src={Evelyn} alt="Evelyn" />
				<p className="gallery-email">www.evelyn.com</p>
				</div>
			<div className="gallery-img">
				<p className="gallery-info">Immaculate</p>
				<img src={Immaculate} alt="Immaculate" />
				<p className="gallery-email">www.immaculate.com</p>
			</div>
			<div className="gallery-img">
				<p className="gallery-info"> Remilekun</p>
				<img src={Remilekun} alt="Remilekun" />
				<p className="gallery-email">remdev22@gmail.com</p>
			</div>
				<div className="gallery-img">
				<p className="gallery-info">Evelyn</p>
				<img src={Evelyn} alt="Evelyn" />
				<p className="gallery-email">www.evelyn.com</p>
				</div>
			<div className="gallery-img">
				<p className="gallery-info">Immaculate</p>
				<img src={Immaculate} alt="Immaculate" />
				<p className="gallery-email">www.immaculate.com</p>
			</div>
			<div className="gallery-img">
				<p className="gallery-info"> Remilekun</p>
				<img src={Remilekun} alt="Remilekun" />
				<p className="gallery-email">remdev22@gmail.com</p>
			</div>
        </div>
		</div>
    )
}

