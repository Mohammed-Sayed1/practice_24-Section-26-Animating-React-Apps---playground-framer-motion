import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    <div id="demo">
      {/* motion is an object contains all html element, use it like this to provide highlly and more performance html element
       * use animate prop to configure which css property to animate according to the change in the value of the a state variable
       * use transition prop to configer how animate prop works, because animate prop has a default configurations if transition prop not added
       *  */}
      <motion.div
        id="box"
        animate={{ x, y, rotate }} //* can add properties like this { x, y, rotate } because the nemes of the property and the variable are the same
        transition={{
          duration: 0.3,
          // bounce: 0,
          type: "spring", //* spring is the default type
        }}
      />

      <div id="inputs">
        <p>
          <label htmlFor="x">X</label>
          <input
            type="number"
            id="x"
            onChange={(event) => setX(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="y">Y</label>
          <input
            type="number"
            id="y"
            onChange={(event) => setY(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="rotate">Rotate</label>
          <input
            type="number"
            id="rotate"
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
