import { Route, Routes, useLocation } from 'react-router-dom';
import GoogleCallBack from './pages/Auth/GoogleCallBack';
import Dashboard from './pages/dashboard/Dashboard';
import RequireAuth from './pages/Auth/RequireAuth';
import Users from './pages/dashboard/Users';
import UserEdit from './pages/dashboard/UserEdit';
import AddUser from './pages/dashboard/AddUser';
import Writer from './pages/dashboard/Writer';
import Err404 from './pages/dashboard/Err404';
import RequireAuthBack from './pages/Auth/RequireAuthBack';
import ProductManager from './pages/dashboard/ProductManager';
import Categories from './pages/dashboard/Categories';
import AddCategory from './pages/dashboard/AddCategory';
import EditCategory from './pages/dashboard/EditCategory';
import Cookie from 'cookie-universal';
import Products from './pages/dashboard/Products';
import AddProduct from './pages/dashboard/AddProduct';
import AuthPage from './pages/Auth/AuthPage';
import Ecommerce from './pages/E-Commerce/Ecommerce';
import SallaPage from './pages/E-Commerce/SallaPage/SallaPage';
import CartPage from './pages/E-Commerce/CartPage/CartPage';

export default function App() {
    let pathName = useLocation().pathname;
    let currentPath;
    if (useLocation().pathname != '/') {
        currentPath = pathName;
    }
    const cookie = Cookie();
    cookie.set('lastPath', currentPath);

    return (
        <div className='App bg-white min-h-screen'>
            <Routes>
                {/* puplic routes */}
                <Route path='/' element={<Ecommerce />}>
                    <Route path='' element={<SallaPage/>}/>
                    <Route path='cart' element={<CartPage/>}/>
                </Route>
                <Route element={<RequireAuthBack />}>
                    <Route path='/register' element={<AuthPage />} />
                    <Route path='/login' element={<AuthPage />} />
                </Route>
                <Route path={'/auth/google/callback'} element={<GoogleCallBack />} />
                <Route path={'/*'} element={<Err404 />} />

                {/* protected routes */}
                <Route element={<RequireAuth allowedRole={['1995', '1996', '1999']} />}>
                    <Route path='dashboard' element={<Dashboard />}>

                        <Route element={<RequireAuth allowedRole={['1995']} />}>
                            {/* <Route path='homepage' element={<HomePage />} /> */}
                            <Route path='users' element={<Users />} />
                            <Route path='user/add' element={<AddUser />} />
                            <Route path='user/:id' element={<UserEdit />} />
                        </Route>

                        <Route element={<RequireAuth allowedRole={['1995', '1996']} />}>
                            <Route path='writer' element={<Writer />} />
                        </Route>

                        <Route element={<RequireAuth allowedRole={['1995', '1999']} />}>
                            <Route path='categories' element={<Categories />} />
                            <Route path='category/add' element={<AddCategory />} />
                            <Route path='products' element={<Products />} />
                            <Route path='product/add' element={<AddProduct />} />
                            <Route path='category/edit/:id' element={<EditCategory />} />
                            <Route path='product-manager' element={<ProductManager />} />
                        </Route>
                    </Route>
                </Route>

            </Routes>
        </div>
    );
}
