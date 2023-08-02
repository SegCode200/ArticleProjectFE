import {configureStore} from "@reduxjs/toolkit"
import {FLUSH, PERSIST, REHYDRATE, PURGE, PAUSE, REGISTER, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import reducer from "./globalState"


const persistConfig = {
    key: 'root',
    version : 1,
    storage
}


const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware:any)=>
        getDefaultMiddleware({
                serializableCheck :{
                    igornedActions : [FLUSH, PERSIST, REHYDRATE, PURGE, PAUSE, REGISTER]
                
                },
            
        })
})