import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsBoxSeam, BsShield, BsChatLeft } from 'react-icons/bs';
import {
  FiBarChart,
  FiCreditCard,
  FiStar,
} from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import { TiTick } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';

import StackedChart from '../components/StackedChart';
import DoughnutChart from '../components/DoughnutChart';
import { Map, loadDataLayer } from '@bayer/ol-kit'

const onMapInit = async map => {
  // nice to have map set on the window while debugging
  window.map = map
  // find a geojson or kml dataset (url or file) to load on the map
  const data = {
    url: 'https://data.nasa.gov/api/geospatial/7zbq-j77a?method=export&format=KML',
    id: 'world_country_boundaries',
    name: 'World Country Boundaries'
  }
  const dataLayer = await loadDataLayer(map, data.url)
  
  // set the title and id on the layer to show in LayerPanel
  dataLayer.set('title', data.name)
  dataLayer.set('id', data.name)
}

const Home = () => {




  return (
    <div className='mt-24'>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-white rounded-xl w-full lg:w-80 p-8 m-3'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-500'>Ingresos</p>
              <p className='text-2xl'>$60.448.320,78</p>
            </div>
            <button className='text-2xl bg-light-red opacity-0.9 text-white rounded-full  p-4'>
              <BsCurrencyDollar />
            </button>
          </div>
          <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
            Descargar
          </button>
        </div>
        <div className='flex m-3 flex-wrap justify-center'>
          <div className='bg-white w-56 p-4 rounded-l-2xl border-r-1 border-color'>
            <button className='text-2xl text-light-blue bg-icon-light-blue opacity-0.9 rounded-full  p-4'>
              <MdOutlineSupervisorAccount />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>9,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Viajeros</p>
          </div>
          <div className='bg-white w-56 p-4 border-r-1 border-color'>
            <button className='text-2xl text-icon-light-orange bg-icon-light-orange opacity-0.9 rounded-full  p-4'>
              <BsBoxSeam />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Productos</p>
          </div>{' '}
          <div className='bg-white w-56 p-4 border-r-1 border-color'>
            <button className='text-2xl text-icon-light-red bg-icon-light-red opacity-0.9 rounded-full  p-4'>
              <FiBarChart />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>39,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Ventas</p>
          </div>
          <div className='bg-white w-56 p-4 rounded-r-2xl border-r-1 border-color'>
            <button className='text-2xl text-icon-light-green bg-icon-light-green opacity-0.9 rounded-full  p-4'>
              <HiOutlineRefresh />
            </button>
            <p className='mt-3'>
              <span className='text-lg font-semibold'>9,354</span>
              <span className='text-sm text-red-500 ml-2'>-4%</span>
            </p>
            <p className='text-sm text-gray-500 mt-1'>Reingresos</p>
          </div>
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white m-3 p-4 rounded-2xl w-780 '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Atractivos por categoría</p>
            
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className=' border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>841</span>
                  <span className='p-1.5 rounded-full text-white bg-icon-green ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Cantidad de atractivos</p>
              </div>
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>22.123</p>

                <p className='text-gray-500 mt-1'>Cantidad de valoraciones</p>
              </div>
              <div className='mt-10'>
                <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-6'>
                  Descargar Reporte
                </button>
              </div>
            </div>
            <div>
              <StackedChart />
            </div>
          </div>
        </div>
        <div>
          <div className='bg-light-red rounded-xl w-400 p-8 m-3'>
          <iframe src="https://one-point-map.herokuapp.com/?lat=-27.39&long=-55.92" width="350px" height="800px" />
          </div>

          <div className='bg-white rounded-xl w-400 p-8 m-3 flex justify-center items-center'>
            <div>
              <p className='text-2xl font-semibold '>430.000.120,26</p>
              <p className='text-gray-400'>Ingresos anuales</p>
            </div>

            <div>
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className='bg-white p-6 rounded-lg'>
          <p className='text-xl font-semibold'>Detalle de gastos</p>
          <div className='mt-10 w-400'>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-blue text-light-blue rounded-lg p-4'>
                  <BsCurrencyDollar />
                </button>
                <div>
                  <p className='text-md font-semibold'>Transferencia</p>
                  <p className='text-sm text-gray-500'>Dinero ingresado</p>
                </div>
              </div>
              <p className='text-green-600'>+$3.500</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-green text-icon-light-green rounded-lg p-4'>
                  <BsShield />
                </button>
                <div>
                  <p className='text-md font-semibold'>Billetera</p>
                  <p className='text-sm text-gray-500'>Pago de cuentas</p>
                </div>
              </div>
              <p className='text-red-600'>-$5.060</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-red text-icon-light-red rounded-lg p-4'>
                  <FiCreditCard />
                </button>
                <div>
                  <p className='text-md font-semibold'>Tarjeta de Credito</p>
                  <p className='text-sm text-gray-500'>Dinero reintegrado</p>
                </div>
              </div>
              <p className='text-green-600'>+$3.500</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-orange text-icon-light-orange rounded-lg p-4'>
                  <TiTick />
                </button>
                <div>
                  <p className='text-md font-semibold'>Transferencia bancaria</p>
                  <p className='text-sm text-gray-500'>Dinero ingresado</p>
                </div>
              </div>
              <p className='text-green-600'>+$350</p>
            </div>

            <div className='flex justify-between mt-4'>
              <div className='flex gap-4'>
                <button className='text-2xl bg-icon-light-blue text-light-blue rounded-lg p-4'>
                  <BsCurrencyDollar />
                </button>
                <div>
                  <p className='text-md font-semibold'>Refund</p>
                  <p className='text-sm text-gray-500'>Payment Sent </p>
                </div>
              </div>
              <p className='text-red-600'>-$50</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
              Add
            </button>
            <p className='text-gray-500 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='bg-white p-6 rounded-lg w-760'>
          <p className='text-xl font-semibold'>Products Performance</p>
          <div className='flex justify-between gap-10 mt-10 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s1.69341801.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Is it good butterscotch ice-cream?
                </p>
                <p className='text-sm text-gray-500'>Ice-Cream, Milk, Powder</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Good</p>
                <p className='text-sm text-gray-500'>65% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$546,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s2.3260a3b5.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Supreme fresh tomato available
                </p>
                <p className='text-sm text-gray-500'>Market, Mall</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Excellent</p>
                <p className='text-sm text-gray-500'>98% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$780,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s3.323ebcbe.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Red color candy from Gucci
                </p>
                <p className='text-sm text-gray-500'>Chocolate, Yummy</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Average</p>
                <p className='text-sm text-gray-500'>46% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$457,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className='flex justify-between mt-5 border-b-1 border-color pb-4'>
            <div className='flex gap-4 items-center'>
              <img
                className='rounded-lg w-20 h-18'
                src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/s4.f4c5d8f9.jpg'
                alt=''
              />
              <div>
                <p className='text-md font-semibold'>
                  Stylish night lamp for night
                </p>
                <p className='text-sm text-gray-500'>Elecric, Wire, Current</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div>
                <p className='text-md font-semibold'>Poor</p>
                <p className='text-sm text-gray-500'>23% sold</p>
              </div>
              <div>
                <p className='text-sm text-gray-500'>Earnings</p>
                <p className='text-md font-semibold'>$123,000</p>
              </div>
              <button className='text-xl text-gray-500'>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Weekly Stats</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex gap-4'>
              <button className='text-2xl bg-orange text-white rounded-full p-3'>
                <FiStar />
              </button>
              <div>
                <p className='text-md font-semibold'>Best Seller</p>
                <p className='text-sm text-gray-500'>MaterialPro Admin</p>
              </div>
            </div>
            <p className='text-red-600'>-$560</p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex gap-4'>
              <button className='text-2xl bg-green-500 text-white rounded-full p-3'>
                <BsChatLeft />
              </button>
              <div>
                <p className='text-md font-semibold'>Most Commented</p>
                <p className='text-sm text-gray-500'>Ample Admin</p>
              </div>
            </div>
            <p className='text-red-600'>-$560</p>
          </div>
        </div>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Branding</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <p className='text-md font-semibold rounded-lg w-32 bg-icon-light-orange py-0.5 px-2 text-icon-light-red mt-10'>
            16 APR, 2021
          </p>
          <div className='flex gap-4 border-b-1 border-color mt-6'>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-xs text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-sm text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
            <div className='border-r-1 border-color pr-4 pb-2'>
              <p className='text-sm text-gray-500'>Due Date</p>
              <p className='text-sm'>Oct 23, 2021</p>
            </div>
          </div>
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'>Teams</p>

            <div className='flex gap-4'>
              <p className='bg-orange text-white py-0.5 px-3 rounded-lg text-xs'>
                Bootstrap
              </p>
              <p className='bg-red-500 text-white py-0.5 px-3 rounded-lg text-xs'>
                Angular
              </p>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'>Leaders</p>
            <div className='flex gap-4'>
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
              <img
                className='rounded-full w-8 h-8'
                src='data:image/jpeg;base64,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'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-4'>
              Add
            </button>
            <p className='text-gray-500 text-sm'>36 Recent Transactions</p>
          </div>
        </div>
        <div className='w-400 bg-white rounded-lg p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>MedicalPro Branding</p>
            <button className='text-xl font-semibold text-gray-500'>
              <IoIosMore />
            </button>
          </div>
          <div className='mt-10'>
            <img
              className='w-96 h-50 '
              src='https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/blog-bg-2x.f6e9447d.jpg'
              alt=''
            />
            <div className='mt-8'>
              <p className='font-semibold text-lg'>React 18 coming soon!</p>
              <p className='text-gray-500 '>By Johnathan Doe</p>
              <p className='mt-8 text-sm text-gray-500'>
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <button className='bg-light-blue p-2 pl-3 pr-3 text-white rounded-md mt-8'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
