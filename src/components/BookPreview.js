import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import "../styles/components/bookPreview.css";

const BookPreview = ({ id = "carousel", children }) => {
	const carouselArrow = ({ type, onClick, isEdge }) => {
		const pointer =
			type === consts.PREV ? (
				<span className="material-icons">arrow_back_ios</span>
			) : (
				<span className="material-icons">arrow_forward_ios</span>
			);

		return (
			<a className="previewArrows" onClick={onClick} disabled={isEdge}>
				{pointer}
			</a>
		);
	};

	return (
		<div id="component-preview-container">
			<Carousel
				itemsToShow={3}
				pagination={false}
				renderArrow={carouselArrow}
			>
				{children}
			</Carousel>
		</div>
	);
};

export default BookPreview;
