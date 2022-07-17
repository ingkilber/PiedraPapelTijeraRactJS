import { useState } from "react";
import Selection from "./Selection";
import Result from "./Result";

const Main = ({ updateScore }) => {
  const [selection, setSelection] = useState("");
  const [cpu, cpuOption] = useState("");

  const calcCpuOption = () => {
    setTimeout(() => {
      const ramdom = Math.floor(Math.random() * 100);

      if (ramdom >= 0 && ramdom <= 19) {
        cpuOption("paper");
      } else if (ramdom >= 20 && ramdom <= 39) {
        cpuOption("scissors");
      } else if (ramdom >= 40 && ramdom <= 59) {
        cpuOption("rock");
      } else if (ramdom >= 60 && ramdom <= 79) {
        cpuOption("lizard");
      } else {
        cpuOption("spock");
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
