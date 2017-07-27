class LocalStorageService {

  activate() {
    if (this.isLocalStorageSupported() && !localStorage.likes) {
      localStorage.likes = JSON.stringify({});
      return localStorage.likes;
    }
    return false;
  }

  upsert(key, value) {
    if (this.isLocalStorageSupported() && localStorage.likes) {
      var likesObj = JSON.parse(localStorage.likes);
      likesObj[key] = value;
      likesObj = JSON.stringify(likesObj);
      localStorage.likes = likesObj;
      return true;
    }
    return false;
  }

  get(key) {
    if (this.isLocalStorageSupported() && localStorage.likes) {
      return JSON.parse(localStorage.likes)[key];
    }
    return false;
  }

  isLocalStorageSupported() {
    let value = 'likestest';

    try {
        localStorage.setItem(value, value);
        localStorage.removeItem(value);
        return true;
    } catch(e) {
        return false;
    }
  }
}

export default LocalStorageService;