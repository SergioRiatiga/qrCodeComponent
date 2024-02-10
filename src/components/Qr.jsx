const Qr = () => {
  return (
    <div className='bg-slate-300 h-screen flex flex-col justify-center items-center'>
      <div className='bg-white max-w-[330px] p-4 rounded-2xl drop-shadow-xl'>
        <header className='rounded-2xl overflow-hidden'>
          <img src='../../images/image-qr-code.png' alt='QR code' />
        </header>
        <article className='py-6 text-center'>
          <h1 className='text-2xl font-bold pb-6'>
            Improve your front-end skills by bulding projects
          </h1>
          <span className='text-gray-500'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </span>
        </article>
      </div>
    </div>
  )
}

export default Qr
