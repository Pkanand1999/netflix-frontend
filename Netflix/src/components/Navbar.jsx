import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
MenuList,
MenuItem,
Input,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import {useState} from "react"
import{Link} from 'react-router-dom'
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";


export default function Navbar({isScrolled}) {
const [search, setSearch] =useState(false);
function signOff(){
  signOut(firebaseAuth)
  localStorage.removeItem('userId')
  
}


  return (
    <Box display="flex" background={isScrolled ? "black" : "transparent"} position="fixed" width="100vw" zIndex="2" top="0" left="0" padding="1rem 2rem" alignItems="center" justifyContent="space-between">
      <Box display="flex" color="white" alignItems="center" justifyContent="center" fontWeight="800" fontSize="1.2rem">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width="14rem" padding="0 2rem" />
        <Link to="/"><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Home</Text></Link>
        <Link to='/movie'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Movies</Text></Link>
        <Link to='/tvshows'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">WebSeries</Text></Link>
        <Link to='/mylist'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">My Lists</Text></Link>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap="2rem" >
        <Box display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
        <Search2Icon  color="white"  onClick={()=>setSearch(search? false:true)} />
        {search && <Input placeholder="Search" type="text" border="2px solid white" color="white"  
        focusBorderColor='red.400' 
        borderRadius="20px" 
        />}
        </Box>
        <Box>
        <Menu>
          <MenuButton
            width="40px"
            height={10}
            border=" 2px solid black"
            transition='all 0.2s'
            borderRadius='md'
            borderWidth='1px'
            color='black'
            _hover={{ bg: 'gray.400' }}
            _expanded={{ bg: 'blue.400' }}
          >
            <Image src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" />
          </MenuButton >
          <MenuList width="1rem" textAlign="center">
            <MenuItem color='black' onClick={signOff }>Log Out</MenuItem>
          </MenuList>
        </Menu>
        </Box>
      </Box>
    </Box>
  )
}
