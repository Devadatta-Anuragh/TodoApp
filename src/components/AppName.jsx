import { useEffect, useState } from "react";
import styles from "./AppName.module.css";
const AppName = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cleared the interval");
    };
  }, []);

  return (
    <>
      <div>
        <h1 className={styles.heading}>Todo App</h1>
        <p style={{ fontWeight: "bold" }}>
          Date:{time.toLocaleDateString()} Time:{time.toLocaleTimeString()}
        </p>
      </div>
    </>
  );
};
export default AppName;
