import {useRef,useEffect} from 'react'

export const useRefCustom = (test) => {
    const refSection = useRef(test);
    useEffect(() => {
            console.log(refSection.current);
           
        });    
}