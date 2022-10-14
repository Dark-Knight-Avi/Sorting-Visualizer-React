// For the Visualizer component, we need to pass data as props which is an array, and we will map through it and display the visual bars wrapped under the auto column grid.

import React from 'react'
import { Box } from "@chakra-ui/react";

function Visualizer({ data }) {
    return (
        <>
            <Box textColor={"white"} rounded={"lg"} display="grid" gridAutoFlow={"column"} gridAutoColumns={"auto"} bg="grey.100" minH={"full"} overflow={"auto"} flex="1">
                {data.map((d) => {
                    return (
                        <Box
                            display={"flex"}
                            justifyContent="flex-end"
                            textAlign="center"
                            flexDirection="column"
                            key={d}
                        >
                            <p>{d}</p>
                            <Box
                                roundedTop={"sm"}
                                border={"1px"}
                                borderColor={"white"}
                                bg={"blackAlpha.400"}
                                style={{ height: `${d}px` }}
                            ></Box>
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}

export default Visualizer