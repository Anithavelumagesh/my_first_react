import {useEffect} from 'react'

function useDocumetTitle(count) {
    useEffect(()=>{
        document.title=`count ${count}`

    },[count])
}

export default useDocumetTitle
