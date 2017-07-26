import $ from 'jquery';

const url = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=surfing';

export default class ImageService {

  getImages() {
    return new Promise((resolve, reject) => {
      $.getJSON(url, function(data) {
        resolve(data);
      });
    });
  }

}