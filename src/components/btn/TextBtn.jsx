import { Link } from 'react-scroll'

const TextBtn = (props) => {
  const { text, link } = props
  return (
    <Link to={link} className='text-gradient btn-link cursor-pointer'>
      {text}
    </Link>
  )
}

export default TextBtn
