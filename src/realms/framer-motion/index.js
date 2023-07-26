import { Link, Outlet } from 'react-router-dom'

const FramerMotion = () => {
  return (
    <div>
      <nav>
        <Link to='./button-sparks'>Button Sparks</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default FramerMotion
export { default as ButtonSparks } from './ButtonSparks'
