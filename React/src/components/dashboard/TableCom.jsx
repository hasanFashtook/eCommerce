import PropTypes from 'prop-types'
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import axios from 'axios';
import Cookie from 'cookie-universal';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function TableCom({ apiUrls, action, item4Headers, items, loading }) {
    // IF item4Headers WAS A CURRENT USER WE NEED ID AND NEME OF IT
    const idCurrentUser = item4Headers.id;
    const nameCurrentUser = item4Headers.name;
    const dispatch = useDispatch();
    const nav = useNavigate();
    const cookie = Cookie();
    const token = cookie.get('userToken');

    // show header
    const headers = Object.keys(item4Headers).filter((ele) => !ele.includes('_') && !ele.includes('images'));
    const showHeader = headers.map((item, index) => (
        <TableCell key={index} className=' capitalize'>{item}</TableCell>
    ))

    // show body
    const showBody = items.map((item, index) => (
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
                        onClick={() => handleDelete(item.id)}
                    >delete</Button>
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
            )
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(action())
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
                        {loading
                            ? (
                                // if pending
                                <TableRow>
                                    <TableCell colSpan={5} className='text-center'>Loading...</TableCell>
                                </TableRow>
                            )
                            : (items.length <= 0
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
    item4Headers: PropTypes.object,
    items: PropTypes.array,
    loading: PropTypes.bool,
    action: PropTypes.func,
    apiUrls: PropTypes.object
}

export default TableCom
