import React from 'react'

function ReturnPolicy() {
  return (
    <div className='p-5  flex items-center justify-center    '>
        <div>
            <h2 className='text-2xl font-bold text-center p-10'>Return Policy for iCareIndia</h2>
            <h3 className='text-xl pb-3 font-bold'>Thank you for choosing iCareIndia!</h3>
            <p className='pb-3'>
                We strive to provide the best possible service. However, we understand that sometimes things
                may not go as planned. Here's our return policy:
            </p>
            <h3 className='text-xl pb-3 font-bold'>Return Eligibility:</h3>
            <ul className=''>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>1 Damaged or Defective Items:</span> If you receive a damaged or defective item, please
                    contact our customer support within 2 days of delivery.
                </p>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>2 Incorrect Items:</span> If you receive an incorrect item, please contact our customer support
                    within 2 days of delivery.
                </p>
            </ul>

            <h3 className='text-xl pb-3 font-bold'>Return Process:</h3>
            <ol>
                <p className='pl-10 py-2'>
                <span className='font-bold'>1 Contact Customer Support: </span> Reach out to our customer support team via
                    icareindia2@gmail.com/8921765007 to initiate the return process.
                </p>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>2 Provide Proof:</span> Be prepared to provide proof of purchase and photos of the damaged or
                    incorrect item.
                </p>

                <p className='pl-10 py-2'>
                    <span className='font-bold'>3 Return Shipping:</span> We will provide you with a return shipping label. Please ship the item
                    back to us at the specified address.
                </p>

                <p className='pl-10 py-2'>
                    <span  className='font-bold'>4 Refund or Replacement:</span> Once we receive the returned item and verify the issue, we
                    will process a refund or replacement, as apppcable.
                </p>
            </ol>

            <h3 className='text-xl pb-3 font-bold'> 
                Important Notes:
            </h3>

            <ul>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>1 Original Condition:</span> The returned item must be in its original condition, including
                    packaging.
                </p>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>2 Customizations:</span> Customized items are not eligible for return
                </p>
                <p className='pl-10 py-2'>
                    <span className='font-bold'>3 Shipping Fees:</span> Return shipping costs may be covered by iCareIndia, depending on the
                    specific circumstances.

                </p>

                <p className='pl-10 py-2'>
                    <span className='font-bold'>4 Refund Time:</span> Refunds may take 10 business days to process
                </p>
            </ul>
        </div>
    </div>
  )
}

export default ReturnPolicy
