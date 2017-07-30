# Development
Install dependencies: `npm i`

Run locally: `npm start`

# Architecture

## ReactJS
As you can tell by the name, React Flickr is built using ReactJS. React is a JavaScript library specifically built for developing user interfaces for the web browser. React allows you to create reusable, testable components. This made React the ideal solution for this project.

## Router
The application required some routing as there is a page displaying photos from Flickr and another to display a users likes. I chose to use React Router as it's lightweight and built specifically for use within ReactJS applications.

## Flickr Data
React does not provide any method of retreiving data from a server. It's simply for creating UI components. I created an ES6 service which retreives the data from the public Flickr API via jQuery's `getJSON` method.

## Local Storage
The application allows users to like photos from Flickr. These liked photos are saved to the users browser in Local Storage, so when they return they can see photos they were interested in. Any interaction with the users local storage is managed through a [LocalStorageService](https://github.com/surf66/react-flickr/blob/master/src/js/services/local-storage-service.js) which again, like the [PhotosService](https://github.com/surf66/react-flickr/blob/master/src/js/services/photos-service.js) is an ES6 class.

## Styles
While styling the application, I have followed the Atomic Design methodology. Atomic Design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are: Atoms. Molecules. Organisms.

Using Atomic Design has lead to the creation of reusable CSS components like the `card` molecule for example. This is used on both the photos and likes pages in the application.

## Build
To get started I built a basic React application using [create react app](https://github.com/facebookincubator/create-react-app). This is a cli tool which enables you to create a simple React application and provides you with a build process. This allowed me to get up and running quickly and focus on writing code instead of build process.

I had to slightly amend the build process so that I could add in a SASS compilation and watch task. I used `node-sass-chokidar` to compile SASS into CSS and also to watch for any changes to SASS files. I used `concurrently` in order to run the build process and SASS compilation tasks at the same time.

## Challenges
One part of the development which I struggled with was with Flickrs public API. I have never worked with `JSONP` in the past and struggled to parse the data into my application. It took me a while to realise the reason JSONP exists is to get around CORS issues. I was trying to retreive the data using JavaScripts `XMLHttpRequest`. In the end I used jQuery's `getJSON` method. Not ideal to have to use a large JavaScript library for one request, however this issue was slowing me down.

## Future Development
If I was to continue working on this project, the next step would be to remove the dependency on jQuery. As mentioned in the challenges, it's not ideal to rely on jQuery for one ajax request. I would need to gain more experience in working with JSONP and find a way to parse the data from Flickr without using jQuery.