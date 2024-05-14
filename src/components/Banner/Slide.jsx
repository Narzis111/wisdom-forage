import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import PropTypes from 'prop-types';


const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[29rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {text}
          </h1>
          <br />
          <Link
            to='/assignment/add'><motion.button className='w-full py-4 mr-4 px-4 mt-4 text-sm font-medium text-white'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}> <button>Create Your Assignment </button>
            </motion.button></Link>


          <Link
            to='/submit'><motion.button className='w-full py-4 mr-4 px-4 mt-4 text-sm font-medium text-white'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}> <button>Submit your Challenges </button>
            </motion.button></Link>

        </div>
      </div>
    </div>
  )
}

export default Slide
Slide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};