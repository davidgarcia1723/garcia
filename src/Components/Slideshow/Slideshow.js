import React from 'react';
import './Slideshow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
	{
		name: 'photo1',
		img: 'images/Gateway.png',
		alt: 'gateway'
	},
	{
		name: 'photo2',
		img: 'images/Hotel-Delfino.png',
		alt: 'hotel'
	},
	{
		name: 'photo3',
		img: 'images/Navbar.png',
		alt: 'navbar'
	},
	{
		name: 'photo4',
		img: 'images/Switch.png',
		alt: 'ecommerce'
	},
	{
		name: 'photo5',
		img: 'images/TicTacToe.png',
		alt: 'tictactoe'
	}
]

class Slideshow extends React.Component {
    render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			arrows: true,
			slidesToScroll: 1,
			className: "slides"
		}
        return (
            <div className="slideshow">
				<Slider {...settings}>
					{photos.map((photo) => {
						return (
							<div>
								<img src={photo.img} alt={photo.alt} />
							</div>
						)
					})}
				</Slider>
			</div>
		);
	}}

export default Slideshow;