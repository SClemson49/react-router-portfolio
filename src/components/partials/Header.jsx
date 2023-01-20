import { Link } from "react-router-dom"

const Header = () => {
    return (
    <>
    <nav>
        <Link to='/'>Go to Home Page</Link>{' | '}
        <Link to='/blog'>Blog</Link>{' | '}
        <Link to='/projects'>My Projects</Link>{' | '}
        <Link to='/about'>About me</Link>
    </nav>
    </>
    )
}
export default Header