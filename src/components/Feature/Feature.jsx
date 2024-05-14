import axios from "axios";
import { useEffect, useState } from "react";
import { Zoom } from "react-reveal";
import { motion } from "framer-motion"



const Feature = () => {
    const [submit, setSubmit] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const url = `https://assignment-11-server-ruby.vercel.app/features`;

    useEffect(() => {
        axios(url)
            .then(res => {
                console.log(res.data);
                setSubmit(res.data)
                setLoading(false)})
    }, [url]);



    
    return (
        <div className="mb-36">
            <div>
                <Zoom>
                    <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">
                        Discover Our Features View<br />
                        <span className="text-xs">Special Features : {submit.length}</span>
                    </h2>
                </Zoom>
                <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }}     // Animation state to transition to
      transition={{ duration: 0.5 }}    // Transition duration
    >
      {/* Content to animate */}
      <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                        Our feature section is your gateway to discovering the rich array of tools and resources available to enhance your learning experience. Dive into a world of possibilities as you explore the key features that set Wisdom Forge apart.
                    </p>
    </motion.div>
    
               
                    
              
            </div>

            <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {loading ? ( 
        <div className="text-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
       
        submit.map((assign) => (
          <div key={assign._id}>
            <div className="card bg-base-100 h-96 shadow-xl border-2 border-slate-300 hover:border-secondary">
              <div className="max-h-[190px] rounded-xl p-3">
                <img className='w-full h-full rounded-xl object-fit hover:scale-105' src={assign.image} alt="Item" />
              </div>
              <div className="flex justify-between w-full p-4">
                <div className='space-y-2'>
                  <h2 className="card-title hover:underline">{assign.title}</h2>
                  <h2 className="card-title hover:underline"></h2>
                  <p className="text-xs">Description: {assign.description.slice(0,100)}</p>
                  <button className="btn btn-info">Explore More</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
            </div>
        </div>
    );
};

export default Feature;
