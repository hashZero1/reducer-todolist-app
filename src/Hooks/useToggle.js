import {useState} from 'react';
function useToggle(isToggle){
    const [ isToggled, setIsToggled ] = useState(isToggle);
    const toggle = () => {setIsToggled(!isToggled);}
    return [isToggled, toggle];
} 

export default useToggle;