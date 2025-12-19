import React, { useEffect} from 'react';
import ContactUsForm from './contactUsForm';
import ContactUsMap from './contactUsMap';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col items-center">
      <h1 className='text-4xl font-extrabold text-center mt-10 mb-10 relative'>CONTACT US</h1>
      <div className="w-full xl:w-width mx-auto flex flex-col">
        <ContactUsForm />
        <ContactUsMap />
      </div>
    </div>
  );
};

export default Contact;
