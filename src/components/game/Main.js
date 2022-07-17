import { useState } from "react";
import Selection from "./Selection";
import Result from "./Result";

const Main = ({ updateScore }) => {
  const [selection, setSelection] = useState("");
  const [cpu, cpuOption] = useState("");

  const calcCpuOption = () => {
    setTimeout(() => {
      const ramdom = Math.floor(Math.random() * 100);

      if (ramdom >= 0 && ramdom <= 32) {
        cpuOption("paper");
      } else if (ramdom >= 33 && ramdom <= 65) {
        cpuOption("scissors");
      } else if (ramdom >= 66) {
        cpuOption("rock");
      }
    }, 2000);
  };

  return (
    <main>
      {selection === "" ? (
        <Selection setSelection={setSelection} calcCpuOption={calcCpuOption} />
      ) : (
        <Result
          selection={selection}
          setSelection={setSelection}
          cpu={cpu}
          cpuOption={cpuOption}
          updateScore={updateScore}
        />
      )}
    </main>
  );
};

export default Main;
