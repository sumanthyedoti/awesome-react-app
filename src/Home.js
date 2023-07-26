import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main className='px-32'>
      <Link to='./framer-motion'>Framer Motion</Link>
      <Outlet />
    </main>
  )
}

export default Home
