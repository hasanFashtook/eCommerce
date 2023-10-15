import PropTypes from 'prop-types'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookie from 'cookie-universal';
import { useNavigate } from 'react-router-dom';


function TableCom({ apiUrls }) {
  const [isFetched, setIsFetched] = useState(false);
  const [headers, setHeaders] = useState([])
  const [data, setData] = useState([]);
  const [ID, setID] = useState(0);

  const nav = useNavigate();
  const cookie = Cookie();
  const token = cookie.get('userToken');
  let idCurrentUser = cookie.get('userDetails').id;
  let nameCurrentUser = cookie.get('userDetails').name;

  // getting data
  useEffect(() => {
    async function showData() {
      try {
        let itemsDetails = await axios.get(apiUrls.items, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setData(itemsDetails.data);
        setHeaders(Object.keys(itemsDetails.data[0]).filter((ele) => !ele.includes('_') && !ele.includes('images')))
      } catch (err) {
        console.log(err)
      } finally {
        setIsFetched(true)
      }
    }
    showData();
  }, [ID]);

  // show header
  const showHeader = headers.map((item, index) => (
    <TableCell key={index} className=' capitalize'>{item}</TableCell>
  ))


  // show body
  const showBody = data.map((item, index) => (
    <TableRow className=' odd:bg-slate-200 even:bg-slate-50' key={index}>

      {
        headers.map((item2, i) => (
          <TableCell key={i}>
            {item[item2] === '1995'
              ? 'Admin'
              : item[item2] === '1996'
                ? 'Writer'
                : item[item2] === '1999'
                  ? 'Product Manger'
                  : item[item2] === '2001'
                    ? 'User'
                    : (item.id == idCurrentUser && item[item2] == nameCurrentUser)
                      ? `${item[item2]} (You)`
                      : (apiUrls.type == 'categories' && item2 == 'image')
                        ? (
                          <div className=' w-10 h-10 rounded overflow-hidden'>
                            <img className=' w-full' src={`${item[item2]}`} alt={item.title} />
                          </div>
                        ) : item[item2]}
          </TableCell>
        )
        )}
      <TableCell colSpan={(item.id == idCurrentUser && apiUrls.type == 'users') ? 2 : 1}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => nav(`${apiUrls.editItem}/${item.id}`)}>edit</Button>
      </TableCell>
      {(item.id == idCurrentUser && apiUrls.type == 'users') ? null :
        <TableCell>
          <Button
            variant='outlined'
            color='error'
            onClick={() => handleDelete(item.id)}>delete</Button>
        </TableCell>
      }
    </TableRow>
  ))

  // delete item of data
  async function handleDelete(id) {
    try {
      // to prevent admin user deleting himself
      (id == idCurrentUser && apiUrls.type == 'users') ? null : (
        await axios.delete(`${apiUrls.deleteItem}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(() => {
            setID(id);
          })
      )
    } catch (err) {
      console.log(err)
    }
  }





  return (
    <div className="TableCom overflow-x-scroll">
      <Table size='small'>
        <TableHead>
          <TableRow>
            {showHeader}
            <TableCell className=' capitalize'>edit</TableCell>
            <TableCell className=' capitalize'>delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {isFetched == false
              ? (
                // if pending
                <TableRow>
                  <TableCell colSpan={5} className='text-center'>Loading...</TableCell>
                </TableRow>
              )
              : (data.length <= 0
                ? (
                  // if no data
                  <TableRow>
                    <TableCell colSpan={5} className='text-center'>no {apiUrls.type} found yet</TableCell>
                  </TableRow>
                )
                : showBody)}
          </>
        </TableBody>
      </Table>
    </div>
  )
}

TableCom.propTypes = {
  className: PropTypes.string,
  apiUrls: PropTypes.object
}

export default TableCom
