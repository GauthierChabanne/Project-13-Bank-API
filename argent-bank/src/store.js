import connectionReduce from './outils/connection';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
        connection: connectionReduce,
    }
})
