import Typewriter from 'react-ts-typewriter';


const TypewriterComponent = () => {
    const text =['keep learning' ,
        'share it widely',
        'seek it constantly',
        'apply it wisely',
        'empower others']
        
  return (
    <>
      <div style={{ fontSize: '24px', textAlign: 'center', fontWeight: 'bold', margin: '20px' }}>
<h1>
    Knowledge is Power         <Typewriter
          text={text}
          loop={true}
          speed={250}
        />
</h1>
      </div>
  

    </>
  );
};

export default TypewriterComponent;
