import { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { RadioGroup } from '@headlessui/react'

// import { product } from './fake-data-product'

const product = {
  name: 'Insteon Remote Control Dimmer Keypad, 6-Butt',
  price: '$192',
  href: '#',
  // breadcrumbs: [
  //   { id: 1, name: 'Men', href: '#' },
  //   { id: 2, name: 'Clothing', href: '#' },
  // ],
  images: [
    {
      src: 'https://cdn.shopify.com/s/files/1/0375/3816/8965/products/keypad-6-button-front-800x800_130x.jpg?v=1591109400',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0375/3816/8965/products/vai-pdp-msi-2487s-5pk-1000x1000-1a_1_66c6ba48-f1c8-4a9e-8861-05bb9d11654a_130x.jpg?v=1591109400',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0375/3816/8965/products/2334-233big_ac631c55-5640-417f-90b4-132bad436c63_600x.jpg?v=1591109400',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  
}





const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function OverView() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])


  return (
    <div className="bg-white flex mt-5 flex-col justify-center items-center md:flex md:flex-row md:justify-center ">
      <div className="">
        {/* Image gallery */}
          <div className="h-[400px] md:h-[600px]  ">
            <img
              src={product.images[2].src}
              alt={product.images[2].alt}
              className="h-full "
            />
          </div>
        </div>

        {/* Product info */}
        <div className="w-1/2">
          <div className="">
            <h1 className="text-2xl font-extrabold tracking-tigh font- text-gray-900 md:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <AiOutlineStar
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium">Quantity</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    See More
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 w-1/4 h-10 bg-[#1e2d7d] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Click Buy
              </button>
            </form>
          </div>
        </div>
      </div>
  
  )
}