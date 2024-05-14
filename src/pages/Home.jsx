import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import FAQs from "../components/FAQs/FAQs";
import Feature from "../components/Feature/Feature";

const Home = () => {
    return (
       <>
       <Helmet>
        <title>Wisdom Forge | Home</title>
       </Helmet>
        <div>
          <Banner></Banner>  
          <Feature></Feature>
          <FAQs></FAQs>
        </div>
        </>
    );
};

export default Home;