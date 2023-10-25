import PropTypes from 'prop-types'
import { baseUrl } from '../../API/Api';
import { Button } from '@mui/material';
import TableCom from '../../components/dashboard/TableCom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../Store/Actions/getProducts';

function Products({ className }) {
    const {
        loading,
        products,
        error,
        success
    } = useSelector(state => state.products);

    const dispatch = useDispatch();
    // getting data
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className={'Products p-5 ' + className} >
            <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-2 justify-between items-center mb-4">
                <h1 className=' max-md:text-xl '>Products Page</h1>
                <Link className='text-white' to={'/dashboard/category/add'}>
                    <Button
                        color='primary'
                        variant='contained'
                        className=' capitaliz text-xs'
                    >
                        add product
                    </Button>
                </Link>
            </div>
            <TableCom apiUrls={apiUrls} action={getProducts} loading={loading} items={products} item4Headers={product} error={error} success={success} />
        </div>
    )
}
const product = {
    id:0,
    title:'',
    rating:'',
    About:'',
    description:''
}

const apiUrls = {
    type: 'products',
    editItem: `/dashboard/product/edit`,
    deleteItem: `${baseUrl}/product`
}

Products.propTypes = {
    className: PropTypes.string
}

export default Products
