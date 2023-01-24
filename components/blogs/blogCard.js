import React from 'react'
import Image from 'next/image';
const BlogCard = () => 
{
  return (
<div className="relative font-medium md:h-screen flex items-center content-center">
  <div className="mr-auto ml-auto w-full px-10 py-8">
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image className="h-48 w-full object-cover   md:h-full md:w-48" src="/images/homepage/tribelayerlogo.png" alt="San Francisco bridge" width={150}height={150}/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-l text-indigo-700 font-semibold">Belayer European Spotlight</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-gray-400">January 5, 2023 by Máire P. Walsh</p>
          <p className="mt-2 text-black-300">The historic heights of VC funding in 2021 was met with a mixed year for startups in 2022. Sustained macroeconomic pressure resulted in significant pullback from investors in latter quarters. The 2021 mantra of growth at all costs has turned to a focus on cash preservation and path to profitability. For startups raising in 2023, be mindful of the following factors which may impact your raise.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default BlogCard
