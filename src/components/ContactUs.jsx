import React from 'react'

function ContactUs() {
    return (
        <section className="text-gray-600 dark:text-gray-400 body-font relative text-left">
            <div className="absolute inset-0 bg-gray-300">
                <iframe width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="map"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2927629187034!2d77.4278774502588!3d23.23243126420822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42674cd1e311%3A0x5de763e9d7cd5c51!2sDB%20Mall%2C%20Zone-I%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462016!5e0!3m2!1sen!2sin!4v1674767899474!5m2!1sen!2sin" style={{ filter: `grayscale(1) contrast(1.2) opacity(0.4)` }} />
            </div>
            <div className="container px-5 py-24 mx-auto flex text-gray-600 dark:text-gray-400">
                <div className="lg:w-1/3 md:w-1/2 bg-white dark:!bg-gray-900 rounded-lg p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1 shadow-md">
                    <h2 className="text-gray-900 dark:text-gray-200 text-lg mb-1 font-medium title-font">Mail us your concerns</h2>
                    <p className="leading-relaxed mb-4 ">We would love to hear your suggestion/concerns about anything we can do to improve!</p>
                    <div className="relative mb-3">
                        <label forhtml="email"
                            className="leading-7 text-sm">Email</label>
                        <input type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-3">
                        <label forhtml="message"
                            className="leading-7 text-sm">Message</label>
                        <textarea id="message"
                            name="message"
                            className="w-full bg-white dark:!bg-gray-900 rounded border border-gray-300 dark:!border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">SEND</button>
                    <p className="text-xs mt-2">You will recive a e-mail reagarding your concerns within 24hr.</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs