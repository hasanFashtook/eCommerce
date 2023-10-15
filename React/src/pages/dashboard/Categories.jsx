import PropTypes from 'prop-types'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import TableCom from '../../components/dashboard/TableCom';
import { CATEGORIES, baseUrl } from '../../API/Api';



function Categories({ className }) {
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
      <TableCom headerDetails={sections} apiUrls={apiUrls} />
    </div>
  )
}

const sections =
[
  {
    key: 'id',
    name: 'Id'
  },
  {
    key: 'title',
    name: 'Title'
  },
  {
    key: 'image',
    name: 'Image'
  }
];

const apiUrls = {
type: 'categories',
items: `${baseUrl}/${CATEGORIES}`,
editItem: `/dashboard/category/edit`,
deleteItem: `${baseUrl}/category`
}

Categories.propTypes = {
  className: PropTypes.string
}

export default Categories

