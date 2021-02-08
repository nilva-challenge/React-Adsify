export const trackPhotoReducer = (state=0, action) => {
    switch (action.type) {
     case "INCREMENTVIEWPHOTO":
        return state+1;
        default:
        return state
    }
  }