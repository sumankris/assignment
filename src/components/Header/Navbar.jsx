import classes from './NavBar.module.css'
import logo from '../../assets/logo.png'

const NavBar = (props) => {
    return(<>
    <>
    <header>
        <nav className={classes.navBarmain}>
            <div className={classes.logo}>
                <img src={logo} width='35%'/>

            </div>
            <div className={classes.menuList}>
                <ul>
                    <li>home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className={classes.signinbuttons}>
                <button>Sign up</button>
                <button>Subscribe</button>

            </div>


        </nav>
    </header>
    </>
    </>)

}
export default NavBar