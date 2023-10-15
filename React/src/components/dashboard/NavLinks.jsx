import {
  UsersIcon,
  UserPlusIcon,
  PencilSquareIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  FolderIcon,
  FolderPlusIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'

export const links = [
  {
    role: ['1995'],
    path: 'users',
    label: 'users',
    icon: <UsersIcon className='w-5 h-6' />
  },
  {
    role: ['1995'],
    path: 'user/add',
    label: 'add user',
    icon: <UserPlusIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1996'],
    path: 'writer',
    label: 'writer',
    icon: <PencilSquareIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1999'],
    path: 'product-manager',
    label: 'product manager',
    icon: <UserCircleIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1999'],
    path: 'categories',
    label: 'Categories',
    icon: <FolderIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1999'],
    path: 'category/add',
    label: 'add category',
    icon: <FolderPlusIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1999'],
    path: 'products',
    label: 'products',
    icon: <BuildingStorefrontIcon className='w-5 h-6' />
  },
  {
    role: ['1995', '1999'],
    path: 'product/add',
    label: 'add product',
    icon: <PlusCircleIcon className='w-5 h-6' />
  }
]