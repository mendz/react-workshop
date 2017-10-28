import store from './store';

let startX;
let startWidth;

const onDragStart = (e) => {
	startX = e.pageX;
	startWidth = store.width;
	document.addEventListener("mousemove", onDragMove);
	document.addEventListener("mouseup", onDragEnd);
};

const onDragMove = (e) => {
	store.setWidth(startWidth + e.pageX - startX);
};

const onDragEnd = (e) => {
	document.removeEventListener("mousemove", onDragMove);
	document.removeEventListener("mouseup", onDragEnd);
};

export default onDragStart;