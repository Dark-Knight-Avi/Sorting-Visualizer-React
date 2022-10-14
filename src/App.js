import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer";
import './App.css'

function App() {
  const [arr, setArr] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [sorting, setSorting] = useState(false);
  const generateArr = (formState) => {
    setGenerating(true);
    setTimeout(() => {
      let newArr = [];
      while (newArr.length <= formState.size) {
        let random = Math.floor(Math.random() * (200 - 10) + 10);
        if (newArr.indexOf(random) === -1) {
          newArr.push(random);
        }
      }
      setArr([...newArr]);
      setGenerating(false);
    }, 500);
  };

  useState(() => {
    generateArr({ size: 10 });
  }, []);
  // console.log(arr);
  const sortDict = {
    selectionSort: () => {
      setSorting(true);
      setTimeout(() => {
        let newArr = [...arr];
        for (let i = 0; i < arr.length - 1; i++) {
          setTimeout(() => {
            for (let j = i + 1; j < arr.length; j++) {
              if (newArr[i] > newArr[j]) {
                let temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
                let newStep = [...newArr];

                setTimeout(() => {
                  setArr([...newStep]);
                }, j * 100);
              }
              if (i === arr.length - 2) {
                setSorting(false);
              }
            }
          }, i * 1000);
        }
      }, 500);
    },
    bubbleSort: () => {
      setSorting(true);
      setTimeout(() => {
        let newArr = [...arr];
        let n = arr.length;
        for (let i = 0; i < n; i++) {
          setTimeout(() => {
            for (let j = 0; j < n - i - 1; j++) {
              if (newArr[j] > newArr[j + 1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
                let newStep = [...newArr];
                setTimeout(() => {
                  setArr([...newStep]);
                }, j * 100)
              }
              if (i === n - 1) {
                setSorting(false);
              }
            }
          }, i * 1000)
        }
      }, 500);
    },
  }
  return (
    <Box background={"black"} height={"100vh"} p={"4"}>
      <Flex gap={"4"}>
        <Sidebar
          generateArr={generateArr}
          generating={generating}
          sorting={sorting}
          sort={sortDict.bubbleSort} 
        />
        <Visualizer data={arr} />
      </Flex>
    </Box>
  );
}

export default App;