import Image from 'next/image';

function Hero () {
  return (
<div className='flex items-center sm:flex-row justify-center' >
  <div className='p-15 justify-center'><Image className=''src="/images/homepage/tribelayerlogo.png" alt="belayer logo" width={250}height={250}/>
  </div>
  <div>
  <h3 className='p-15  justify-center sm:text-4xl font-light text-blue-800 '>Building the bridge between US capital and European startups.</h3>
  </div>
  </div>
  )
}

export default Hero
