import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p>Founder : Sarmad Irfan.</p>
      <a href='https://sarmad0324.github.io/portfolio/' target='blank' className='link'>Portfolio</a>
      <h4>Version 1.0.4</h4>
      <Link to='/' className='link'>Go Back</Link>
    </div>
  )
}

export default About