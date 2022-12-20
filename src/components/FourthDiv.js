import React from 'react';
import '../App.css';

const FourthDiv = () => {
  return (
    <>
        <div className="shop_pricing">
            <p className="header-p text-center">SHOPASCART+</p>
            <h1 className="Home_tag_text mt-2 text-center text-danger">
                The best way to save money on grocery shopping
            </h1>
            <p className="header-p2 mt-3 text-center">
                Choose a plan that fits your shopping needs and get started.
            </p>
            <div className="cards-pricing container mt-4">
                <div className="card_pricing text-center rounded-lg mx-auto">
                    <div className="card_pricing_header p-auto">
                        <h3 class="text-lg font-bold text-white">Shopascart Plus</h3>
                        <p class="text-tag2 mt-2">Unlimited delivery on orders over ₦5000</p>
                        <h1 class="Home_heading text-center text-white mt-2">₦3000/month or <br /> ₦25000/year</h1>
                    </div>
                    <div className="sub_heading">
                        <a href="/auth/signup?plan-onetime delivery">
                            <button className="btn btn-lg btn-light rounded-pill w-100" type='button'>
                                <span className="css-91f65">Get Shopascart Plus</span>
                            </button>
                        </a>
                    </div>
                </div>  
            </div>
            <p className='p-heading mt-4 text-center ml-auto mr-auto'>
                Deliveries under ₦5000 with or without a Shopascart+ membership will incur a ₦1800 fee and applicable taxes and service fees per order.
            </p>
        </div>
        <div></div>

        <div className='faqs'>
            <h1 className="Home_tag_text_1 text-center">FAQ</h1>
            <p class="text-center mt-3">Have questions? We're here to help.</p>

            <div className="container mt-4">
                <ul>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>How does Shopascart work?</h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>How do I become a Shopascart Shopper</h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>Why is Shopascart not available in my area?</h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>How do I pay for my order?</h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>What happens if something is out of stock?</h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>

                    <l1 className="p-4">
                        <div className="faq_item container">
                            <div className="faq_item_header mt-5">
                                <h1 className='text-lg'>
                                    Is there a limit to the amount of orders I can place in a day?
                                </h1>
                                <div className="open_faq_answer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="mt-4 border border-gray"></div>
                        </div>
                    </l1>
                </ul>
            </div>
        </div>
    </>
  )
}

export default FourthDiv