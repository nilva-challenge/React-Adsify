import {combineReducers } from 'redux'
import { trackPhotoReducer } from './trackPhoto'
import { trackVideoReducer } from './trackVideo'

export const redusers=combineReducers({
    TrakPhotos:trackPhotoReducer,
    TrakVideos:trackVideoReducer
})