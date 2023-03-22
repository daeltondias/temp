import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'

function App() {
  return (
    <div className='flex px-10 justify-center items-center h-full bg-gray-900'>
      <Page1 />
      <div className='px-5 sm:px-10' />
      <Page2 />
    </div>
  )
}

export default App
