export default function Loading() {
  return (
    <div className="Loading Fade bg-slate-200 opacity-50 grid place-items-center fixed top-0 z-[1000] w-screen h-screen ">
      <div
        className="spinner w-20 h-20 rounded-full border-4 border-solid border-x-white border-b-white border-t-transparent animate-spin"
      >
      </div>
    </div>
  )
}