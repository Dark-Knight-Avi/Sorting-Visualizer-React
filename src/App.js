// Now in App.js, we will return these two components under row flex. Now we will create state variables that need to be passed to the Sidebar & Visualizer components. Create an arr variable to store numbers that need to be sorted, generating (boolean variable to check whether a new array is generating or not), sorting (boolean variable to check whether an array is soring or not).
import './App.css';
import { Box, Flex} from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";
import { Visualizer } from "./components/Visualizer";
import React, {useState} from 'react';


function App() {

  const [arr, setArr] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);

  const generateArr = (formState) => {
    let newArr = [];
    while (newArr.length <= formState.size) {
      let random = Math.floor(Math.random() * (200 - 10) + 10);
      if (newArr.indexOf(random) === -1) {
        newArr.push(random);
      }
    }
    setArr(...newArr);
  }
  useState(() => {
    generateArr({ size: 10 });
  }, []);
  
  return (
    <>
      <Box p={"4"}>
      <Flex gap={"4"}>
        <Sidebar
          generateArr={generateArr}

          // sort={sort}
        />
        <Visualizer data={arr} />
      </Flex>
    </Box>
    </>
  );
}

export default App;
