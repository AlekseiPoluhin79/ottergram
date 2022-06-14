const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
const HIDDEN_DETAIL_CLASS = 'hidden-detail';
const ESC_KEY = 27;

function setDetails(imageUrl, titleText) {
	'use strict';
	var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
	detailImage.setAttribute('src', imageUrl);

	var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
	detailTitle.textContent = titleText;
}

// thumb - листать или бегунок
// thumbnail - картинка,миниатюра.

function imageFromThumb(thumbnail) {
	'use strict';
	return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
	'use strict';
	return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
	'use strict';
	setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
	'use strict';
	thumb.addEventListener('click', function(event) {
		event.preventDefault();
		setDetailsFromThumb(thumb);
		showDetails();
	});
}

function getThumbnailsArray() {
	'use strict';
	var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
	var thumbnailArray = [].slice.call(thumbnails);
	return thumbnailArray;
}

// hideDetails() - eё задача — добавление имени класса в элемент <body>
// Для работы с именем класса воспользовались  методом DOM classList.add.

function hideDetails() {
	document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

// showDetails() eё задача — удаление имени класса в элемент <body>

function showDetails() {
	document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
	document.body.addEventListener('keyup', function(event) {
		event.preventDefault();
		if (event.keyCode === ESC_KEY) {
			hideDetails();
		}
	});
}

function initializeEvents() {
	'use strict';
	var thumbnails = getThumbnailsArray();
	thumbnails.forEach(addThumbClickHandler);
	addKeyPressHandler();
}

initializeEvents();
