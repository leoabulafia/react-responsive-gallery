# react-responsive gallery

## Idea

This is a simple gallery made with react and redux. It loads images from the
FlickrApi.

* It shows images that can be hovered and show the username owner.
* You can scroll down and load new images.
* When a picture is clicked, the image is loaded in a lightbox
* Inside the lightbox, you can navigate to the previous and next images
* Under the picture you can find the title and tags related to the image
* If you reach the end, and no more images were loaded, the first one will be displayed
* If you go to previous from the first, the last until the moment loaded will be shown
* The gallery that shows the images to select is fully responsive
* The lightbox resizes the displayed photo to be also responsive

## How it Works

* The inner parts of the app are pretty straightforward thanks to redux
* It makes a request in componentDidMount and fetches 20 images in thumbnail quality that are displayed in the gallery. If you scroll to the bottom and load more images, a new request with 10 new pictures will be done and displayed immediately.
* These images are urls of the type: <img src='the url here'/>. The url is constructed by data fetched from Flickr.
* Redux manages the whole state of the app. For example, it has in its store an array of objects that contains images data, and every time an action is dispatched to fetch more images, the state changes via the imagesReducer
* There's also a currentImageReducer that manages the data of the current picture displayed in the lightbox
* componentDidUpdate is used to check updates for the current image displayed in the lightbox
* The styles are managed by JSS and avoid completely flexbox, css grids, etc in order to be the most cross-old-browser friendly possible

## Tech Stack

Project bootstraped with create-react-app

* `React v16`
* `React Router v4`
* `Redux` (and its helper libraries)
* `NodeJS` with `Express`
* `JSS`
