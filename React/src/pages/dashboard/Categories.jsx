import PropTypes from 'prop-types'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import TableCom from '../../components/dashboard/TableCom';
import { baseUrl } from '../../API/Api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../Store/Actions/getCategories';



function Categories({ className }) {
    const {
        loading,
        categories,
        error,
        success
    } = useSelector(state => state.products);

    const category = {
        created_at: "",
        id: 0,
        image: "",
        title: "",
        updated_at: "",
    }

    const dispatch = useDispatch();
    // getting data
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className={'Categories p-5 ' + className} >
            <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-2 justify-between items-center mb-4">
                <h1 className=' max-md:text-xl '>Categories Page</h1>
                <Link className='text-white' to={'/dashboard/category/add'}>
                    <Button
                        color='primary'
                        variant='contained'
                        className=' capitaliz text-xs'

                    >
                        add Category
                    </Button>
                </Link>
            </div>
            <TableCom apiUrls={apiUrls} action={getCategories} loading={loading} items={categories} item4Headers={category} error={error} success={success} />
        </div>
    )
}


const apiUrls = {
    type: 'categories',
    editItem: `/dashboard/category/edit`,
    deleteItem: `${baseUrl}/category`
}

Categories.propTypes = {
    className: PropTypes.string
}

export default Categories

