import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/userSlice'

/** 
 * @function configureStore - Configures redux store using the configureStore() function from redux toolkit
 * @param {object} reducer - The userReducer is used to update the user object in the redux store when the user logs in or logs out
 * @returns {object} - The user object in the redux store is updated when the user logs in or logs out
 */
export default configureStore({
    reducer: {
        user: userReducer
    }
})