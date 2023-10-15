import PropTypes from 'prop-types'
import { PRODUCTS, baseUrl } from '../../API/Api';
import { Button } from '@mui/material';
import TableCom from '../../components/dashboard/TableCom';
import { Link } from 'react-router-dom';

function Products({ className }) {
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
      <TableCom headerDetails={sections} apiUrls={apiUrls} />
    </div>
  )
}

const sections = [
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'title',
    name: 'Title'
  },
  {
    key: 'description',
    name: 'Description'
  },
  {
    key: 'price',
    name: 'Price'
  },
  {
    key: 'rating',
    name: 'Rating'
  }
];

const apiUrls = {
  type: 'products',
  items: `${baseUrl}/${PRODUCTS}`,
  editItem: `/dashboard/product/edit`,
  deleteItem: `${baseUrl}/product`
}

Products.propTypes = {
  className: PropTypes.string
}

export default Products
