import {useSelector} from 'react-redux'
import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';

export default function Plan({buy}) {
    
    const data=useSelector((e)=>{
        return e.plan
    });
    
    
    

  return (
    <div style={{display:"flex", width:"85%",margin:"auto",marginTop:"9rem"}}>
        <TableContainer  display="flex" margin="auto" width="100%">
  <Table variant='simple' width="100%">
    <TableCaption>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span style={{color:"#59a2f0"}}>Terms of Use</span> for more details.</TableCaption>
    <Thead>
      <Tr>
        <Th> </Th>
        <Th><Button border="none" background="#ed6f74"  color="white"  borderRadius="0px"
        padding="3rem 2.4rem" fontWeight="600" fontSize="1.1rem" 
        _hover={{background:"#e4111b"}}
        onClick={()=>buy(159)}
        > Basic </Button></Th>
        <Th ><Button border="none" background="#ed6f74"  color="white"  borderRadius="0px"
        padding="3rem 1.5rem" fontWeight="600" fontSize="1.1rem" 
        _hover={{background:"#e4111b"}} onClick={()=>buy(199)}>Standard</Button></Th>
        <Th ><Button border="none" background="#ed6f74"  color="white"  borderRadius="0px"
        padding="3rem 1.5rem" fontWeight="600" fontSize="1.1rem" 
        _hover={{background:"#e4111b"}} onClick={()=>buy(249)}>Premium</Button></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
      data.map((element,i)=>{
        return  <Tr key={i} >
        <Td>{element.heading}</Td>
        <Td >{element.basic}</Td>
        <Td >{element.standard}</Td>
        <Td >{element.premium}</Td>
      </Tr>
      })
       }
    </Tbody>
  </Table>
</TableContainer>

    </div>
  )
}
