import React from "react"
import ReactDOM from "react-dom"
import App from './App.js'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from "redux-persist/lib/integration/react"

//for persistence
const store = configureStore();
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={configureStore()}>
        <PersistGate
            loading={<div>loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, document.getElementById('root'))