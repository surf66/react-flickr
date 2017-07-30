import LocalStorageService from '../services/local-storage-service';

export default class ComponentUtils {
  
  constructor() {
    this.localStorageService = new LocalStorageService();
  }

  combineArrays(arr1, arr2) {
    var newArray = [];
    for(var i in arr1) {
      var shared = false;
      for (var j in arr2)
          if (arr2[j].media.m === arr1[i].media.m) {
              shared = true;
              break;
          }
      if(!shared) newArray.push(arr1[i])
    }
    newArray = newArray.concat(arr2);
    return newArray;
  }

  saveToLocalStorage(photo) {
    let currentLikes = this.localStorageService.get('likes');
    currentLikes = currentLikes || [];

    let alreadyLiked;
    for(var i in currentLikes) {
      if(currentLikes[i].media.m === photo.media.m) {
        currentLikes.splice(i, 1);
        alreadyLiked = true;
        break;
      }
    }

    if(!alreadyLiked) {
      photo.liked = true;
      currentLikes.push(photo);
    }
    
    this.localStorageService.upsert('likes', currentLikes);
  }
}