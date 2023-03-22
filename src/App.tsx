import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'

function App() {
  return (
    <div className='flex justify-center items-center h-full bg-gray-900'>
      <Page1 />
      <div className='w-[150px]' />
      <Page2 />
    </div>
  )
}

export default App
