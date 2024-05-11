import { NavLink } from 'react-router-dom'
import logo from '../../assets/LogoMakr-8qeBOH.png'
const Footer = () => {
  return (
    <footer className='bg-white shadow-sm'>
      <hr />
      <div className='container px-6 py-8 mx-auto'>
        <div className='flex flex-col items-center text-center'>
        <NavLink to="/">
            <div className="flex items-center gap-1">
              <img className="w-[50px]" src={logo} alt="" />
              <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">
                <span className="text-2xl">W</span>
                <span>isdom</span>
                <span className="text-2xl text-pretty text-blue-400">F</span>
                <span className="font-semibold text-pretty text-blue-400">orge</span>
              </h1>
            </div>
          </NavLink>

          <div className='flex flex-wrap justify-center mt-6 -mx-4'>
            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Home{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Blog{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Services{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Policies{' '}
            </a>

            <a
              href='#'
              className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
              aria-label='Reddit'
            >
              {' '}
              Newsletter{' '}
            </a>
          </div>
        </div>

        <hr className='my-6 border-gray-200 md:my-10 ' />

        <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
          <p className='text-sm text-gray-500 '>
            © Copyright 2024 All Rights Reserved by WisdomForage
          </p>

          <div className='flex -mx-2'>
          <nav className="grid-flow-col gap-4 flex md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer