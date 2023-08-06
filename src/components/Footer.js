import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023 - Todo Tracker</p>
      <Link to='/about' className='link'>About Me</Link>
    </footer>
  )
}

export default Footer