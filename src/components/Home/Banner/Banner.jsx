import img from "../../../assets/mainBanner.png";
import classes from "./Banner.module.css";
import Counter from "../Counter/Counter";



const Banner = () => {
  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.contentSection}>

          <h1>You sing ,<br/> We Listen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            architecto dolore assumenda beatae mollitia omnis, culpa
            voluptatibus rem quaerat iure? Quibusdam consectetur numquam iusto
            earum inventore, sequi in quo consequuntur!
          </p>
          <button>Subscribe Now </button>
        </div>
        <div>
          <img src={img} width="100%" />
        </div>
       
      </div>
    </>
  );
};
export default Banner;
