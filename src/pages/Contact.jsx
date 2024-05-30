import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {


    return (
        <div>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-head text-center">
                        <h2 className="text-3xl font-bold">CONTACT US</h2>
                        <p className="cont m-5"> <strong>Wisdom Forage</strong> encapsulates the pursuit of knowledge and insight a journey through the realms of wisdom. It represents an exploration of ancient wisdom and modern discoveries, inviting seekers to delve into the depths of understanding. It is a reminder that wisdom is not static but dynamic, found in the everyday experiences and the quest for enlightenment.</p>
                    </div>
                    <div className="row mb-24">
                        
                            <iframe className="w-[1180px] mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.7411477005267!2d-9.111213489268524!3d38.79256807162887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193204393402ab%3A0x6ee2ce429f9fc816!2sSTUDY%20%26%20SMILE%20-%20Centro%20de%20Estudos%20e%20Explica%C3%A7%C3%B5es!5e0!3m2!1spt-PT!2spt!4v1715773999940!5m2!1spt-PT!2spt" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                        
                    </div>
                    <div className="grid grid-cols-2 align-center items-center bg-blue-300">
                        <div className="bg-blue-300 p-6 text-center"><div className="info">
                                <div className="address text-center flex justify-center gap-2"> <FaLocationDot className="text-blue-950 flex justify-center text-xl" />
                                    <h4>Location:</h4>
                                    <p>A108 Sacavem Street, Portugal-1700</p>
                                </div>
                                <div className="email mt-4 text-center flex justify-center gap-2"> <TfiEmail className="text-blue-950" />
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                                <div className="phone mt-4 text-center flex justify-center gap-2"> <BsFillTelephonePlusFill className="text-blue-950" />
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div></div>
                        <div className="bg-blue-300 p-6"> <div className="space-y-4">
                            <form className="email-form">
                                <div className="row space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" />
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                    
                                    </div>
                                    
                                    <div className="grid grid-cols-1">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="form-group grid grid-cols-1">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                    </div>
                                    <div className="text-center grid grid-cols-1"><button type="submit" className="btn btn-send">Send Message</button></div>
                                </div>
                            </form>
                        </div></div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-4">
                            
                        </div>

                       
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
