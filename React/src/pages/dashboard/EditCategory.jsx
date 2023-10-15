import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import PropTypes from 'prop-types'
import { MuiFileInput } from 'mui-file-input';
import { useEffect, useState } from 'react';
import Loading from '../../components/website/Loading';
import { baseUrl } from '../../API/Api';
import axios from 'axios';
import Cookie from 'cookie-universal';
import { useNavigate, useParams } from 'react-router-dom';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#2dd4bf',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2dd4bf',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2dd4bf',
      borderWidth: '2px'
    },
    '&:hover fieldset': {
      borderColor: '#2dd4bf',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2dd4bf',
    },
  },
});
const CssFileField = styled(MuiFileInput)({
  '& label.Mui-focused': {
    color: '#2dd4bf',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#2dd4bf',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#2dd4bf',
      borderWidth: '2px'
    },
    '&:hover fieldset': {
      borderColor: '#2dd4bf',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2dd4bf',
    },
  },
});

function EditCategory({ className }) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('');
  // const [status, setStatus] = useState(0);
  const [accept, setAccept] = useState(false);

  // to show loading window untill sending form data
  const [loading, setLoading] = useState(false);

  // navigate to categoris page to see the new category
  const nav = useNavigate();

  // import current user token in order to authentation
  const cookie = Cookie();
  const token = cookie.get('userToken');

  const categoryId = useParams().id;

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseUrl}/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        setTitle(res.data.title);
        setImage(res.data.image);
        setLoading(false)
      })
  }, [categoryId])


  async function handleSubmite(e) {
    e.preventDefault();
    setAccept(true);

    const form = new FormData();
    form.append('title', title);
    form.append('image', image);
    console.log(image, title)
    if (title && image) {
      setLoading(true);
      console.log('done')
      try {
        await axios.post(`${baseUrl}/category/edit/${categoryId}`, form, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => console.log(res))
        nav('../categories');

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <>
      {loading ? <Loading /> : (
        <div className={'EditCategory flex-1 p-5 ' + className} >
          <h1 className=' mb-4'>Edit Category</h1>

          <form onSubmit={(e) => { handleSubmite(e) }}
            className='flex flex-col bg-white shadow-md max-w-lg p-5 rounded-lg mx-auto mt-14'
          >
            <CssTextField
              name="title"
              id="title"
              label={'Add Category Title'}
              variant="outlined"
              size="small"
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={accept && !title}
              helperText={accept && !title && 'Please, enter categry title'}
            />
            <CssFileField
              name="image"
              id='image'
              label='choose image'
              size='small'
              margin='dense'
              value={image}
              onChange={e => setImage(e)}
              error={accept && !image && !categoryId}
              helperText={(accept && !title)
                ? 'Please, enter categry image'
                : (categoryId && image) && 'you can change the image if you want'}
            />
            <Button
              type='submit'
              className=' bg-teal-500 text-white mt-2 hover:bg-teal-600 transition'
            >
              Edit Category
            </Button>
          </form>
        </div >
      )
      }
    </>
  )
}

EditCategory.propTypes = {
  className: PropTypes.string
}

export default EditCategory
