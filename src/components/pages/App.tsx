import '@/index.css'
import { Outlet } from 'react-router-dom'
import "preline/preline"
import { SidebarWithSearch } from '../components-ui/SideBarMenu'
// import '@fontsource/poppins';
import '@fontsource/geist-sans';

function App() {

  return (
    <>
      
      <section className='flex'>
        
        <SidebarWithSearch />
        <main className='h-[100vh] relative w-[100%] ' id="detail">
        <header className='border-b bg-[#fbfbfb] h-[50px] w-full '>

        </header>
          <Outlet />
        </main>
      </section>
    </>
  )
}

export default App
