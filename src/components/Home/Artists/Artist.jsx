import tayler from "../../../assets/taylerone.png";
import pitbull from "../../../assets/pitbull.png";
import classes from "./Artist.module.css";

const Artist = () => {
  return (
    <>
      <div className={classes.artistMain}>
        <div className={classes.imageSection}>
          <h1>
            Discovet artist <br /> around you
          </h1>
          <div>
            <img src={tayler} />
          </div>

          <div>
            <img src={pitbull} />
          </div>
        </div>
        <div>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptatibus.{" "}
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
            itaque accusantium deserunt.
          </p>
          <button>Sign up Now</button>
        </div>
      </div>
    </>
  );
};
export default Artist;
