import React from 'react'
import Compt1 from './component/Compt1';
import Compt2 from './component/Compt2';
import Compt3 from './component/Compt3';

function App () {
  return (
    <div className='APP flex justify-center sm:flex-col sm:items-center lg:flex-row md:flex-row xl:flex-row'>
      <Compt1 />
      <Compt2 />
      <Compt3 />
    </div>
  )
}

export default App
