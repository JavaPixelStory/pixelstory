import { Link } from 'react-scroll'
import './btn.scss'

const Btn = (props) => {
  const { text, link } = props
  return (
    <Link to={link}>
      <button className='btn btn-lg'>{text}</button>
    </Link>
  )
}

export default Btn
