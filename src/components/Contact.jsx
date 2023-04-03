import React from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
   
    const formRef = React.useRef();

    function handleSubmit(evt) {
      evt.preventDefault();
      /*
          1. Usamos FormData para obtener la información
          2. FormData requiere la referencia del DOM,
             gracias al REF API podemos pasar esa referencia
          3. Finalmente obtenemos los datos serializados
        */
      const formData = new FormData(formRef.current);
      const values = Object.fromEntries(formData);
  console.log(values)
  if(values.message > "   " ){
    toast.success("Your email was sent successfully")
  }else{
    return toast.error("Please fill all the fields")
  }
  emailjs.sendForm('service_t8i902t', 'template_q2vz2lp', evt.target, 'NCN9d1RiqFfKH16Pl')
  evt.target.reset()
    }

    return (
        <div className="contactForm max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl">Let´s work together!</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Contact me
                </p>

                <form onSubmit={handleSubmit} ref={formRef} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p className="text-lg font-medium"></p>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Name</label>

                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="name"
                                name='name'
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter your name"
                               
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >

                                    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter email"
                                                          
                            />

                            <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <div>
                        <textarea
                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                            type="text"
                            placeholder="Message"
                            name="message"
                            rows="8"
                            id="message"
                       
                                                    ></textarea>
                    </div>

                    <button type="submit" className="buttonContact block w-full px-5 py-3 text-sm font-medium text-dark bg-black text-[#ffc23d] rounded-lg">
                        Submit
                    </button>
                </form>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    className="Toaster"
                />
            </div>
        </div>

    )
}

export default Contact

