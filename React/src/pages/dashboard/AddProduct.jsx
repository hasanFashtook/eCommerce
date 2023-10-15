import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookie from 'cookie-universal';
import axios from 'axios';
import { CATEGORIES, baseUrl } from '../../API/Api';
import Loading from '../../components/website/Loading';
import { MuiFileInput } from 'mui-file-input';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import {
  Button,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


function AddProduct({ className }) {

  const [form, setForm] = useState({
    category: 'select category',
    title: '',
    description: '',
    price: '',
    discount: '',
    About: ''
  })

  const dummyForm = {
    category: null,
    title: 'dummy',
    description: 'dummy',
    price: 111,
    discount: 0,
    About: 'dummy'
  };




  const [images, setImages] = useState([]);

  // This state is to prevent the user from uploading images or any input data before choosing the product category.
  // This state prevents the user from creating more than one product during the input process
  // This is to create the product in the database and create a simulation of progress, 
  // which is represented in the process of uploading images for the product already created in the backend
  const [sent, setSent] = useState(false);

  // Once the product has been created in the database,
  // we will receive its ID to be modified by adding images and product data,
  // giving the user the impression that they are just creating the product.
  const [id, setId] = useState(0);

  // store porgresses of products in array to edit them one by one;
  const progress = useRef([])

  // This condition is to manage the time that will appear in error messages,
  // which is represented by the time when the add button is clicked
  const [accept, setAccept] = useState(false);

  // category
  const [categories, setCategories] = useState([]);

  // to show loading window untill sending form data
  const [loading, setLoading] = useState(false);

  // navigate to categoris page to see the new category
  const nav = useNavigate();

  // import current user token in order to authentation
  const cookie = Cookie();
  const token = cookie.get('userToken');
  const imageFile = useRef(null)

  // get Categories to enable to user select one of them
  useEffect(() => {
    async function getCategories() {
      try {
        let data = await axios.get(`${baseUrl}/${CATEGORIES}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setCategories(data.data);
      } catch (err) {
        console.log(err)
      }
    }
    getCategories();
  }, [token]);


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(true);
    if (!sent) {
      handleSubmiteForm();
    }
  }

  // this function to send dummy data then we can edit them
  async function handleSubmiteForm() {
    try {
      await axios.post(`${baseUrl}/product/add`, dummyForm, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => setId(res.data.id))
    } catch (err) {
      console.log(err)
    }
  }

  // If the user is uploading images in multiple stages,
  // the download must be resumed from where it left off the previous time.
  // Therefore, we save the last index of for loop.
  const tracker = useRef(0);

  // handle upload product images
  async function uploadImages(imgs) {

    setImages((prev) => [...prev, ...imgs]);
    const data = new FormData();
    for (let i = 0; i < imgs.length; i++) {
      data.append('image', imgs[i]);
      data.append('product_id', id);

      try {
        await axios.post(`${baseUrl}/product-img/add`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          onUploadProgress: (ProgressEvent) => {
            let { loaded, total } = ProgressEvent;
            let percent = Math.floor((loaded / total) * 100);
            progress.current[tracker.current].children[0].children[0].style.width = `${percent}%`
            progress.current[tracker.current].children[1].innerHTML = `${percent}%`
          }
        })
      } catch (err) {
        console.log(err)
      }
      tracker.current++;
    }
  }

  // this function to repleace dummy data with real data
  async function handleEdit(e) {
    e.preventDefault();
    setAccept(true);
    if (form.category != 'select category' && form.title != '' && form.description != '' && form.price != '' && form.discount != '' && form.About != '') {
      setLoading(true);
      try {
        const data = new FormData();
        data.append('category', form.category)
        data.append('title', form.title)
        data.append('description', form.description)
        data.append('price', form.price)
        data.append('discount', form.discount)
        data.append('About', form.About)
        for (let i = 0; i < images.length; i++) {
          data.append('images[]', images[i])
        }

        await axios.post(`${baseUrl}/product/edit/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setLoading(false);
        nav('/dashboard/products');
      } catch (err) {
        console.log(err)
      }
    }
  }


  // show images
  // transform images form files opject to object iterable in order to mapping on it
  const imagesShow = Object.values(images).map((file, i) => (
    <div className='flex gap-4' key={i}>
      <div className="image w-16 h-16">
        <img src={URL.createObjectURL(file)} alt={file.title} />
      </div>
      <div className="details ">
        <p>{file.title}</p>
        <p className=' capitalize'>
          size:
          {
            file.size.toString().length < 7
              ? `${(file.size / 1024).toFixed(2)} KB`
              : `${(file.size / Math.pow(1024, 2)).toFixed(2)} MB`
          }
        </p>
        <div
          className="progress flex items-center gap-2 mt-4 "
          ref={e => progress.current[i] = e}
        >
          <div className=' w-full h-2 bg-slate-300 rounded-full overflow-hidden'>
            <span className={`block h-full bg-blue-600 w-0 transition-all duration-300`}></span>
          </div>
          <span className=' percent block'>0%</span>
        </div>
      </div>
    </div>
  ))

  return (
    <>
      {loading ? <Loading /> : (
        <div className={`AddProduct p-5 ` + className} >
          <h1 className=' mb-4'>Add Product</h1>
          <form onSubmit={(e) => { handleEdit(e) }}
            className='flex gap-0 flex-col sm:flex-row sm:gap-8 justify-center bg-white shadow-md p-5 rounded-lg mt-14'
          >
            <div className=' flex flex-col flex-1'>
              {/* category select */}
              <FormControl fullWidth margin='normal' error={accept && form.category == 'select category'}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  name="category"
                  value={form.category}
                  onChange={(e) => { handleChange(e) }}
                // error={accept && form.category == 'select category'}
                >
                  <MenuItem
                    disabled
                    value={'select category'}
                    className=' capitalize'
                  >
                    Select Category
                  </MenuItem>
                  {
                    categories.map((category, i) => (
                      <MenuItem
                        key={i}
                        value={category.id}
                        className=' capitalize'
                      >
                        {category.title}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              {/* title */}
              <TextField
                disabled={!sent}
                name="title"
                id="title"
                label={'Add Product Title'}
                variant="outlined"
                size="small"
                margin='dense'
                value={form.title}
                onChange={(e) => handleChange(e)}
                error={accept && !form.title}
                helperText={accept && !form.title && 'Please, enter product title'}
              />
              {/* description */}
              <TextField
                disabled={!sent}
                name="description"
                id="description"
                label={'Add Product Description'}
                variant="outlined"
                size="small"
                margin="normal"
                value={form.description}
                onChange={(e) => handleChange(e)}
                error={accept && !form.description}
                helperText={accept && !form.description && 'Please, enter product description'}
              />
              {/* price */}
              <TextField
                disabled={!sent}

                name="price"
                id="price"
                label={'Add Product Price'}
                variant="outlined"
                type='number'
                size="small"
                margin="normal"
                value={form.price}
                onChange={(e) => handleChange(e)}
                error={accept && !form.price}
                helperText={accept && !form.price && 'Please, enter product price'}
              />
              {/* discount */}
              <TextField
                disabled={!sent}

                name="discount"
                id="discount"
                label={'Add Product Discount'}
                variant="outlined"
                size="small"
                margin="normal"
                type='number'
                value={form.discount}
                onChange={(e) => handleChange(e)}
                error={accept && !form.discount}
                helperText={accept && !form.discount && 'Please, enter product discount'}
              />
              {/* About */}
              <TextField
                disabled={!sent}

                name="About"
                id="About"
                label={'Add Product About'}
                variant="outlined"
                size="small"
                margin="normal"
                value={form.About}
                onChange={(e) => handleChange(e)}
                error={accept && !form.About}
                helperText={accept && !form.About && 'Please, enter product about'}
              />
              {/* select images for product */}
              <MuiFileInput
                disabled={!sent}
                inputRef={imageFile}
                className=' hidden'
                name="image"
                id='image'
                label='choose image'
                size='small'
                margin='dense'
                multiple={true}
                value={images}
                onChange={imgs => uploadImages(imgs)}
                error={accept && !images}
                helperText={accept && !images && 'Please, enter product images'}
              />
              <Button
                type='submit'
                className={` mt-4 ${sent ? ' bg-blue-700' : ' bg-gray-400 cursor-auto'} text-white`}
              >
                Add Product
              </Button>
            </div>
            <div
              onClick={() => imageFile.current.click()}
              className={`uploadSection flex-2 my-5 sm:my-0 sm:mt-4 p-5 border-2 border-dashed ${sent ? 'border-blue-700 cursor-pointer' : ' border-gray-400 cursor-auto'} flex flex-col justify-center items-center`}>
              <CloudArrowUpIcon className={` w-20 h-20 ${sent ? ' text-blue-700' : 'text-gray-400'}`} />
              <p className=' capitalize text-gray-400'>choose product images</p>
            </div>
          </form>
          <div className="galleryContainer bg-white rounded-lg p-5 my-5 grid gap-5 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
            {imagesShow}
          </div>
        </div>
      )}
    </ >
  )
}

AddProduct.propTypes = {
  className: PropTypes.string
}

export default AddProduct