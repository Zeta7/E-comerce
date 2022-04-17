import './App.css';
import './css/StyleCreateUser.css';
import './css/StyleHead.css';
import './css/StyleLoadingScreen.css';
import './css/StyleProductCard.css';
import './css/StyleProfile.css';
import './css/StyleSingIn.css';
import './css/StyleProductDetail.css';
import Head from './components/Head';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Home, ProductDetail, Profile, Pucharses, ShoppingCart, SingIn, CreateUser} from './pages';
import LoadingScreen from './components/LoadingScreen';
import { useSelector } from 'react-redux';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <>
      <HashRouter>
      
        <Head />

        {isLoading && <LoadingScreen /> }

          
          <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/singin' element={<SingIn />}/>
            <Route path='/createuser' element={<CreateUser />}/>

            <Route element={<ProtectedRoutes />}>
              <Route path='/profile' element={<Profile />}/>  
              <Route path='/shoppingcart' element={<ShoppingCart />}/>
              <Route path='/pucharses' element={<Pucharses />}/>
            </Route>
          </Routes>
        
      </HashRouter>

    </> 
  );
}

export default App;
