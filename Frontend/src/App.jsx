  import React from 'react'
  import Body from "./Body"
  import Login from './Login'
  import Profile from './Profile'

  import {BrowserRouter , Route, Routes} from 'react-router-dom';
  import {Provider} from 'react-redux'
  import appStore from './utils/appStore.js'
  import Feed from './Feed.jsx';
  
  const App = () => {
    return ( 
         <>

             <Provider store={appStore}>

             <BrowserRouter basename="/">
              <Routes>
                <Route path="/" element={<Body/>}>
                <Route path="/" element={<Feed/>}/> 
                  <Route path="/login" element={<Login/>} />
                  <Route path="/profile" element={<Profile />} />
                   
                </Route>
              </Routes>
            </BrowserRouter>

             </Provider>

           
           
         </>


    )
  }
  
  export default App