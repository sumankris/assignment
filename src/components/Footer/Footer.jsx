import { FaBeer } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footerMain}>
        <div className={classes.footerHeading}>
          <h1>We offer Notting But the Best</h1>
          <p>Expirence the music you never Expirienced Before</p>
        </div>
        <div className={classes.boxes}>
          <div>
            <div>
              <FaBeer />
            </div>
            <div>
              <h2>High Quality Audio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                tenetur ipsum obcaecati, et voluptates dolore architect.
              </p>
            </div>
          </div>
          <div>
            <div>
              <FaBeer />
            </div>
            <div>
              <h2>High Quality Audio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                tenetur ipsum obcaecati, et voluptates dolore architect.
              </p>
            </div>
          </div>
          <div>
            <div>
              <FaBeer />
            </div>
            <div>
              <h2>High Quality Audio</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                tenetur ipsum obcaecati, et voluptates dolore architect.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
