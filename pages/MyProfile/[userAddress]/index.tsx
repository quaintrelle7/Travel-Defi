import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

interface User{
    userAddress:string;
}
function UserProfile({}: Props) {

    const router = useRouter();
    const { userAddress } = router.query;


  return (<>
  
  
  </>
  )
}

export default UserProfile