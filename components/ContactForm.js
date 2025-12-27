import React, { useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        toast.info('Sending!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setResult("");
        const formData = new FormData(event.target);

        formData.append("access_key", "1ebc9cc5-5530-4535-a330-89b7569fb5ce");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success('Message sent successfully!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            event.target.reset();
            setResult("");
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (


        <div className="p-5 md:p-8 bg-gray-50">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="max-w-md mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Send a Message</h3>
                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none" type="submit">Submit Form</button>

                </form>
                <span>{result}</span>

            </div>
        </div>
    );
}


export default ContactForm



//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     // Handle form submission here
//   }

//   return (


//         <form onSubmit={handleSubmit} >
//







//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

