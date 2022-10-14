// Inside Sidebar, we have a form elements slider to select array size, a dropdown for selecting algorithm, and two buttons one for generating a new array and the other for sorting the array.

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./css/Sidebar.css";
const Sidebar = ({ generateArr, sort, generating, sorting, value }) => {
  const [formState, setFormState] = useState({
    size: 10,
    algorithm: "selectionSort",
  });
  // const handleClick = () => {}
  // console.log(formState, generating, sorting);
  return (
    <Box
      minW="xs"
      bg="black"
      textColor={"white"}
      border={"2px solid white"}
      p={"4"}
      borderRadius="lg"
      overflow="hidden"
    >
      {/* <form> */}
      <FormControl>
        <FormLabel htmlFor="size">{`Array Size (${formState.size})`}</FormLabel>
        <Slider
          onChangeEnd={(v) => setFormState({ ...formState, size: v })}
          aria-label={"10"}
          min={10}
          max={200}
          defaultValue={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="algorithm">Algorithm</FormLabel>
        <Select
          onChange={(v) => setFormState({ ...formState, algorithm: v })}
          bg={"black"}
          border={"2px solid white"}
          id="algorithm"
          variant={"outline"}
        >
          <option value={`${value}`}>{value}</option>
          {/* <option value="bubbleSort">Bubble Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="QuickSort">Quick Sort</option> */}
        </Select>
      </FormControl>
      <Flex gap={"3"} mt={"5"} direction="row">
        <Button
          disabled={sorting}
          isLoading={generating}
          onClick={() => {
            generateArr(formState);
          }}
          loadingText="Generating"
          colorScheme="black"
          border={"2px solid white"}
        >
          Generate Array
        </Button>

        <Button
          disabled={generating}
          isLoading={sorting}
          loadingText="Sorting"
          onClick={sort}
          colorScheme="black"
          border={"2px solid white"}
          variant="outline"
        >
          Sort
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
