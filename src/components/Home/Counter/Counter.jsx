import classes from "./Counter.module.css";
import { FaBeer } from "react-icons/fa";

const Counter = () => {
  return (
    <>
      <main className={classes.countermain}>
        <div>
          <div>
            <FaBeer />
          </div>
          <div>
            <h2>50k</h2>
            <span>services</span>
          </div>
        </div>
        <div>
        <div>
            <FaBeer />
          </div>
          <div>
            <h2>50k</h2>
            <span>services</span>
          </div>
        </div>
        <div>
        <div>
            <FaBeer />
          </div>
          <div>
            <h2>50k</h2>
            <span>services</span>
          </div>
        </div>
        <div>
        <div>
            <FaBeer />
          </div>
          <div>
            <h2>50k</h2>
            <span>services</span>
          </div>
        </div>
      </main>
    </>
  );
};
export default Counter;
