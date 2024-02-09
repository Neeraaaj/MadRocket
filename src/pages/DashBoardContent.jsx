import React from 'react'

const DashBoardContent = () => {
  return (
    <div className='bg-slate-900 w-[90vw] h-[80vh] rounded-md p-5'>
        <div className='flex flex-col'>
            <div className='flex justify-between'>

                <h1 className='text-white font-mono font-extrabold
                text-3xl'>Logistics</h1>

                <button className='bg-blue-500 text-white p-3 rounded-3xl'>+ Add Vehicle</button>
            </div>

            <div className='flex flex-row gap-10'>
                <div className='bg-slate-600 flex flex-col rounded-md items-center p-4 text-white'>
                    <h1>38</h1>
                    <p>On route vehicles</p>
                </div>
                <div className='bg-slate-600 flex flex-col rounded-md items-center p-4 text-white'>
                    <h1>2</h1>
                    <p>Vehicles with errors</p>
                </div>
                <div className='bg-slate-600 flex flex-col rounded-md items-center p-4 text-white'>
                    <h1>1</h1>
                    <p>Vehicles deviated from route</p>
                </div>
                <div className='bg-slate-600 flex flex-col rounded-md items-center p-4  text-white'>
                    <h1>2</h1>
                    <p>Late Vehicles</p>
                </div>
            </div>

            <div className='flex flex-row mt-10 rounded-lg justify-between'>
                <div className='bg-slate-700 flex flex-col'>
                    <h1 className='text-white p-5'>Vehicles Overview</h1>
                    <img src='https://www.ceicdata.com/datapage/charts/o_india_registered-motor-vehicles-west-bengal/?type=area&from=2009-03-01&to=2020-03-01&lang=en' className='w-[800px] h-[300px] rounded-md'/>
                </div>
                <div className='bg-slate-700 flex flex-col w-[500px]'>
                    <h1 className='text-white p-5'> Vehicle Condition</h1>
                    <img src='https://www.ceicdata.com/datapage/charts/o_india_registered-motor-vehicles-west-bengal/?type=area&from=2009-03-01&to=2020-03-01&lang=en' className='w-[500px]
                    h-[290px]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoardContent