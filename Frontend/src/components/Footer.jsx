import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 mt-40 text-sm pb-4'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+977 982108983</li>
                        <li>digimart@gmail.com</li>

                    </ul>

                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@digimart.com- All right reserver</p>
            </div>
        </div>
    )
}

export default Footer
