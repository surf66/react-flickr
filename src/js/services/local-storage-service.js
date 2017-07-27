class LocalStorageService {

  saveToLocalStorage(favourite) {
    localStorage.setItem('favourites', JSON.stringify(favourite));
  }

}

export default LocalStorageService;