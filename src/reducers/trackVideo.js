export const trackVideoReducer = (state=0, action) => {
    switch (action.type) {
     case "INCREMENTVIEWVIDEO":
        return state+1;
        default:
        return state
    }
  }