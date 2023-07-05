import { PinInput, PinInputField, Box, Flex , Text} from '@chakra-ui/react'

export default function Otp({getpin}) {
    return (
        <>
        <Box w="100%" h="100vh" border="4px solid red" display="flex" justifyContent="center" alignItems="center">
                <Box w="16%">
                <Text color="#ed6f74" fontSize="1.5rem" fontWeight="600">Enter Your PIN</Text>
            <Flex w="100%" justifyContent="space-between">
                <PinInput type='numeric' size="lg" gap="1rem" focusBorderColor='#ed6f74' color="#ed6f74" onChange={(e)=>getpin(e)}>
                    <PinInputField border="2px solid #ed6f74"/>
                    <PinInputField border="2px solid #ed6f74"/>
                    <PinInputField border="2px solid #ed6f74"/>
                    <PinInputField border="2px solid #ed6f74"/>
                </PinInput>
            </Flex>
            </Box>
        </Box>
        </>
    )
}
