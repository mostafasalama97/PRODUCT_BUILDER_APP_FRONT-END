import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
<div className='border border-red-500 m-5 grid grid-cols-1 gap-4 rounded-md'>
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />

</div>
  )
}

export default App