import React from 'react';
import { Input,Container ,VStack,Box, Button, Flex,Spacer,} from '@chakra-ui/react'
// import "./Navbar.css"
import "./Tophead.css";




const TopHead = () => {
    return (
        <div className='tophead'>
            <Flex>
           <Box  marginLeft="60px">
           
           <img className='img' src="https://images.shopper.ipsy.com/500,fit,q85,/https://s3.amazonaws.com/shopper-production-dashboard/retailers/onboarding_images/000/000/984/original/SUGARCosmetics_white.png?1503508988" alt="sugar logo" />
           </Box>
           <Spacer />
           <Box marginLeft="110px" marginTop="10px">
            <Input placeholder='Try Liquid Lipstick'  w="500px" />
            </Box>
            <Button marginLeft="-20px" marginTop="10px">Search</Button>
            </Flex>
        </div>
    );
};



export default TopHead;