import Spacer from '../../components/primitives/Spacer'
import React from 'react'

export const ContactForm = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <section className='container mx-auto py-10 lg:py-16'>
        <div
          className={
            'grid grid-rows-[max-content_min-content] md:grid-rows-1 grid-cols-1 md:grid-cols-[1fr_3fr] px-2 gap-10 place-self-stretch'
          }>
          <div className={'grid grid-rows-[max-content_min-content] grid-cols-1 gap-10 px-8 md:px-0'}>
            <div>
              <h1 className='font-Poppins font-semibold text-lg md:text-2xl text-primary leading-normal max-w-[20ch]'>Office Address</h1>
              <Spacer small />
              <h3 className='font-Poppins font-normal text-sm lg:text-base text-secondary leading-normal max-w-[60ch]'>
                6th Floor, Landmark Tower, 5B Water Corporation Road Victoria Island, Lagos.
              </h3>
            </div>
            <div>
              <h1 className='font-Poppins font-semibold text-lg md:text-2xl text-primary leading-normal max-w-[20ch]'>Contact Info</h1>
              <Spacer small />
              <h3 className='font-Poppins font-normal text-sm lg:text-base text-secondary leading-normal max-w-[60ch]'>
                Phone: +234 (1) 236 6367
              </h3>
              <Spacer small />
              <h3 className='font-Poppins font-normal text-sm lg:text-base text-secondary leading-normal max-w-[60ch]'>
                Email: sales@m2m-nigeria.com
              </h3>
            </div>
          </div>
          <div>
            <form action='https://formsubmit.co/emfon71@gmail.com' method='POST'>
              <div className='shadow sm:rounded-md sm:overflow-hidden'>
                <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                  <div className='grid grid-cols-4 gap-6'>
                    <div className='col-span-4 sm:col-span-2'>
                      <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                        Name
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='name'
                          id='name'
                          className='focus:ring-indigo-500 focus:border-indigo-500 px-5 py-4 flex-1 block w-full rounded-md sm:text-sm border border-gray-300'
                          placeholder='Your Name'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-span-4 sm:col-span-2'>
                      <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                        Email
                      </label>
                      <div className='mt-1'>
                        <input
                          type='email'
                          name='email'
                          id='email'
                          className='focus:ring-indigo-500 focus:border-indigo-500 px-5 py-4 flex-1 block w-full rounded-md sm:text-sm border border-gray-300'
                          placeholder='Your Email'
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-4 gap-6'>
                    <div className='col-span-4'>
                      <label htmlFor='subject' className='block text-sm font-medium text-gray-700'>
                        Subject
                      </label>
                      <div className='mt-1'>
                        <input
                          type='text'
                          name='subject'
                          id='subject'
                          className='focus:ring-indigo-500 focus:border-indigo-500 px-5 py-4 flex-1 block w-full rounded-md sm:text-sm border border-gray-300'
                          placeholder='Subject'
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                      Message
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows={5}
                        className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-5 py-4 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'
                        placeholder='Your Message'
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
