import Navright from './navright'
import Navleft from './navleft'

const Navbar = () => {
  return (
    <navbar>
        <div className="navbar">
            <Navleft/>
            <Navright/>
        </div>
    </navbar>
  )
}

export default Navbar