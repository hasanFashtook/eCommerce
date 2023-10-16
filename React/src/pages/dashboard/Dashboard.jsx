import { Outlet } from "react-router-dom";
import TopBar from "../../components/dashboard/TopBar";
import SideBar from "../../components/dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { storeCurrentSize } from "../../Store/Reducers/screenSize";

export default function Dashboard() {
  const isOpen = useSelector(state => state.menu);
  const screenSize = useSelector(state => state.screen)
  const dispatch = useDispatch();

  function changerScreenWidth() {
    dispatch(storeCurrentSize(window.innerWidth))
  }

  useEffect(() => {
    window.addEventListener('resize', changerScreenWidth)
    return () => {
      window.removeEventListener('resize', changerScreenWidth)
    }
  })
  return (
    <div className='Dashboard relative bg-slate-100 min-h-screen'>
      <TopBar className=' flex justify-between items-center h-20 bg-white shadow-sm' />
      <div className={`flex min-h-[calc(100vh-80px)] transition-all
      ${screenSize <= 768
          ? (isOpen ? ' translate-x-0 w-full' : 'w-[calc(100%+5rem)] -translate-x-20')
          : ' w-auto'}
      `}>
        <SideBar className={`transition-all bg-white p-3 min-h-full shadow-sm
      ${screenSize <= 768
            ? ' w-20'
            : ' translate-x-0' + (isOpen ? ' w-60' : ' w-20')
          }
      `} />
        <div className={` ${screenSize <= 768
          ? (isOpen
            ? ' w-[calc(100vw-5rem)]'
            : ' w-full')
          : (isOpen
            ? ' w-[calc(100vw-15rem)] '
            : ' w-[calc(100vw-5rem)]')
          } `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
