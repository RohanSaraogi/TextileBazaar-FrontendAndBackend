// import React, { useState } from 'react';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       quote: 'I am extremely satisfied with the service provided by XYZ Company. Their professionalism and attention to detail were unmatched. I would highly recommend them to anyone looking for quality service.',
//       author: 'John Doe',
//     },
//     {
//       id: 2,
//       quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor sapien a felis accumsan consectetur. Nulla facilisi. Maecenas vel ex ut nisi vehicula mattis nec eu tellus.',
//       author: 'Jane Smith',
//     },
//     {
//       id: 3,
//       quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       author: 'Max Johnson',
//     },
//     {
//       id: 4,
//       quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
//       author: 'Emma Watson',
//     },
//     {
//       id: 5,
//       quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
//       author: 'Chris Evans',
//     },
//     // Add more testimonials as needed
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 3 ? 0 : prevIndex + 3));
//   };

//   const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

//   return (
//     <section className="bg-gray-50">
//       <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Customers Say</h2>
//           <div className="mt-8">
//             <div className="relative">
//               {currentIndex > 0 && (
//                 <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md">Prev</button>
//               )}
//               {currentIndex < testimonials.length - 3 && (
//                 <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md">Next</button>
//               )}
//               <div className="flex h-[400px]">
//                 {visibleTestimonials.map(testimonial => (
//                   <div key={testimonial.id} className="w-full sm:w-1/3">
//                     <div className="p-4">
//                       <div className="bg-white p-6 shadow-sm">
//                         <div className="flex gap-0.5 text-green-500">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5">
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                           </svg>
//                         </div>
//                         <p className="mt-4 text-2xl font-bold text-gray-900">{testimonial.quote}</p>
//                         <p className="mt-2 text-gray-700">{testimonial.author}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;


// import React, { useState } from 'react';
// import banner from "../Assests/images/banner.jpeg"

// function TestimonialCard({ testimonial }) {
//     return (
//         <div className="w-full  max-md:w-full max-md:m-10 sm:w-full sm:h-full overflow-hidden">
//             <div className="flex flex-col h-full w-full p-2 bg-white border-2 border-solid border-teal-900 rounded-2xl">
//                 <div className="flex flex-col justify-between p-5 w-full ">
//                     <div className="flex flex-col">
//                         <div className='flex justify-center items-center'>
//                         <img src={testimonial.image} className='w-[50%] h-[180px]'/>
//                         </div>
//                         <p className="flex justify-center items-center mt-3 text-xl  text-teal-900 font-bold items-center">{testimonial.author}</p>
//                         <p className="mt-3 text-xl text-gray-900">{testimonial.quote}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const Testimonial = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const testimonials = [
//         {
//             id: 1,
//             quote: 'I am extremely satisfied with the service provided by XYZ Company. Their professionalism and attention to detail were unmatched. I would highly recommend them to anyone looking for quality service.',
//             author: 'John Doe',
//             image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         },
//         {
//             id: 2,
//             quote: 'The product exceeded my expectations. It\'s well-designed and works flawlessly. I would definitely buy from this company again.',
//             author: 'Jane Smith',
//             image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         },
//         {
//             id: 3,
//             quote: 'Great customer support! They were very helpful and responsive to all my inquiries. I\'m happy with my purchase.',
//             author: 'David Johnson',
//             image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         },
//         {
//             id: 4,
//             quote: 'Great customer support! They were very helpful and responsive to all my inquiries. I\'m happy with my purchase.',
//             author: 'asj Johnson',
//             image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         },
//         {
//             id: 5,
//             quote: 'Great customer support! They were very helpful and responsive to all my inquiries. I\'m happy with my purchase.',
//             author: 'sdasds Johnson',
//             image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//         },
//         // Add more testimonials as needed
//     ];

//     const prevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 3);
//         }
//     };

//     const nextSlide = () => {
//         if (currentIndex < testimonials.length - 3) {
//             setCurrentIndex(currentIndex + 3);
//         }
//     };

//     return (
//         <div className="flex px-20 py-4  max-md:px-1 ">
//             <div className="flex flex-col w-full ">
//                 <section className="mt-5">
//                     <div className="flex justify-between items-center mb-5">
//                         <h1 className="text-3xl font-bold text-teal-900">Testimonials</h1>
//                         <div className="flex gap-3">
//                             <button
//                                 onClick={prevSlide}
//                                 disabled={currentIndex === 0}
//                                 className="w-10 h-10 flex items-center justify-center border-2 border-solid border-teal-900 rounded-full bg-white"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                                 </svg>
//                             </button>
//                             <button
//                                 onClick={nextSlide}
//                                 disabled={currentIndex >= testimonials.length - 3}
//                                 className="w-10 h-10 flex bg-teal-900 items-center justify-center border-2 border-solid border-teal-900 rounded-full "
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-sm:flex max-sm:flex-wrap">
//                         {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//                             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//                         ))}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;


import { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviewsData';
import Quote from '../Assests/images/blockquotes.svg';
// 1. ""

// -  - 


// 2. ""
   
//   - Vidhika yarn



// 3. " 

// 4. ""



// 5. ""

// 
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: 'I discovered that subscribing to TextileBazzar transformed my ability to sell deadstock fabrics and yarns. With the subscription, I reached a larger audience and significantly boosted my sales.',
            author: 'Manmohana Agarwal',
            designation:'Opal Tex Fab',
            image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 2,
            quote: 'I found that a subscription to TextileBazzar was a game-changer for selling my deadstock. It connected me with more buyers, helping me move my inventory quickly and efficiently.',
            author: 'Vinod Agarwal',
            designation:'Vidhika Yarn',
            image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 3,
            quote: 'I realized that TextileBazzar was the ideal platform for showcasing my deadstock fabrics and yarns. By subscribing, I could highlight my products to a broader customer base, leading to impressive sales results.',
            author: 'Vardhman Jain',
            designation:'Shree Ram Filament',
            image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 4,
            quote: 'I highly recommend a subscription to TextileBazzar, as it simplified my selling process for deadstock. The increased visibility allowed me to connect with more buyers and grow my business.',
            author: 'Gaurav Agarwal',
            designation:'Dealer of DRD machine',
            image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: 5,
            quote: 'I encourage others to invest in a subscription with TextileBazzar. It not only helped me sell my deadstock fabrics and yarns swiftly but also delivered outstanding results that exceeded my expectations.',
            author: 'Parth patel',
            designation:'AU filaments',
            image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        // Add more testimonials as needed
    ];


    useEffect(() => {
        const applyPaginationStyles = () => {
      const paginationItems = document.querySelectorAll('.splide__pagination__page');
      paginationItems.forEach((item) => {
        
        item.style.backgroundColor = '#15423F'; // Tailwind's gray-400 color
        
      });

      
    
    };
    
        // Initial style application and observing changes in active class
        applyPaginationStyles();
        const observer = new MutationObserver(applyPaginationStyles);
        const pagination = document.querySelector('.splide__pagination');
        if (pagination) {
          observer.observe(pagination, { childList: true, subtree: true });
        }
    
        return () => observer.disconnect();
      }, []);
      // max-w-5xl
  return (
    <section className="flex flex-col mt-10 justify-center overflow-hidden mx-auto bg-gradient-to-r from-[#153448] from-90% to-[#3C5B6F] to-95% max-w-[100vw]">
      <div className="text-center mb-8 mt-4">
        <h2 className="capitalize font-bold text-2xl md:text-[35px] text-[#DFD0B8] mb-2 mt-4 font-Baskerville tracking-wider">Client Testimonials</h2>
        <p className="text-[#948979] md:text-[20px] font-Baskerville">What members are saying.</p>
      </div>

      <div className="relative  p-4 user-select-none max-w-[100%] mx-auto">
        {/* <blockquote className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <img className="w-8 h-8 opacity-25 absolute top-[-1rem] left-[-1rem] bg-black absolute inset-0"  src={Quote} alt="quote" />
          <img className="w-8 h-8 opacity-25 absolute bottom-[-3rem] right-[-0.5rem] transform rotate-180 bg-black" src={Quote} alt="quote" />
        </blockquote> */}

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {testimonials.map((review) => (
            <SplideSlide key={review.id} className="flex flex-col items-center p-8  rounded-xl gap-4">
              {/* <img className="w-36 h-36 rounded-full object-cover mb-4 mx-auto" src={review.image} alt="" /> */}
              <div className="text-center">
                <p className="mx-auto md:w-[50%]  text-[#DFD0B8] mb-4 text-base md:text-lg">{review.quote}</p>
                <div className="flex flex-col items-center">
                  {/* <div className="flex space-x-1">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={`star ${i < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}>&#9733;</span>
                    ))}
                  </div> */}
                  <p className="font-bold mt-2 text-[#948979] text-lg">{review.author}</p>
                  <p className="font-bold  mb-2 text-[#948979] text-lg">{review.designation}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
