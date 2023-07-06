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
import {useState,useEffect} from "react"
import{Link} from 'react-router-dom'
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { SubscribePlan } from '../store/middleware';


export default function Navbar({isScrolled}) {
const [search, setSearch] =useState(false);
const dispatch=useDispatch();
function signOff(){
  signOut(firebaseAuth)
  localStorage.removeItem('userId')
  localStorage.removeItem('email')
  localStorage.removeItem('subscribe')
}
let url=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${key}`

function debounce(e){

}

let mail=localStorage.getItem('email')
useEffect(()=>{
SubscribePlan({email:mail,subscription:"sdfgsag"},dispatch)
},[mail])

  return (
    <Box display="flex" background={isScrolled ? "black" : "transparent"} position="fixed" width="100vw" zIndex="2" top="0" left="0" padding="1rem 2rem" alignItems="center" justifyContent="space-between">
      <Box display="flex" color="white" alignItems="center" justifyContent="center" fontWeight="800" fontSize="1.2rem">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" display="flex" width={["9rem", "10rem", "14rem"]} padding={["0 1rem","0 1.5rem","0 2rem"]} />
        {screen.width>1120 && <><Link to="/"><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Home</Text></Link>
        <Link to='/movie'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Movies</Text></Link>
        <Link to='/tvshows'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">WebSeries</Text></Link>
        <Link to='/mylist'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">My Lists</Text></Link>
        </>}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" gap="2rem" >
        <Box display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
        <Search2Icon  color="white"  onClick={()=>setSearch(search? false:true)} />
        {search && <Input placeholder="Search" type="text" border="2px solid white" color="white"  
        focusBorderColor='red.400' 
        borderRadius="20px" 
        onChange={(e)=>debounce(e)}
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
          <MenuList width="1rem" textAlign="center" color='black'>
            {screen.width<1119 && <>
              <MenuItem><Link to="/"><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Home</Text></Link></MenuItem>
              <MenuItem><Link to='/movie'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">Movies</Text></Link></MenuItem>
              <MenuItem><Link to='/tvshows'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">WebSeries</Text></Link></MenuItem>
              <MenuItem><Link to='/mylist'><Text display="flex" margin="auto" padding="0 1.5rem" _hover={{color:"wheat"}} cursor="pointer">My Lists</Text></Link></MenuItem>
        </>}
            <MenuItem color='black' onClick={signOff }>Log Out</MenuItem>
          </MenuList>
        </Menu>
        </Box>
      </Box>
      <Box  width="14%" background="red" position="absolute" right="0" top="80%">

      </Box>
    </Box>
  )
}
