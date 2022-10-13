// Inside Sidebar, we have a form elements slider to select array size, a dropdown for selecting algorithm, and two buttons one for generating a new array and the other for sorting the array. 

import {
    Box,
    Button, Flex, FormControl, FormLabel, Select, Slider, SliderFilledTrack, SliderThumb,
    SliderTrack
} from "@chakra-ui/react";
import React, { useState } from "react";

function Sidebar({ gernerateArr, sort }) {
    const [formState, setFormState] = useState({
        size: 10,
        algorithm: "linear",
    })
    return (
        <>
            <Box minW="xs" bg="gray.100" p={"4"} borderRadius="lg" overflow="hidden">
                <FormControl>
                    <FormLabel htmlFor="size">{`ArraySize(${formState.size})`}</FormLabel>
                    <Slider onChangeEnd={(v) => setFormState({ ...formState, size: v })} aria-label={"10"} min={10} max={200} defaultValue={10}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="algorithm">Algorithm</FormLabel>
                    <Select id="algorithm" value={formState.algorithm} onChange={(v) => { setFormState({ ...formState, algorithm: v }) }}>
                        <option value="simple">Simple</option>
                        <option value="selection">Selection</option>
                        <option value="insert">insertion</option>
                        <option value="bubble">Bubble</option>
                    </Select>
                </FormControl>
                <Flex gap={"3"} mt={"5"} direction="row">
                    <Button onClick={() => {gernerateArr(formState)}} colorScheme="purple">Generate Array</Button>
                    <Button onClick = {sort} colorScheme="purple" variant="outline">Sort</Button>
                </Flex>
            </Box>
        </>
    )
}

export default Sidebar