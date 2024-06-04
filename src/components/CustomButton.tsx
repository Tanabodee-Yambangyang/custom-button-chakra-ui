import { Button } from '@chakra-ui/react'
import { CiCircleInfo } from "react-icons/ci";


export default function CustomButton({
    buttonName= "Button name",
    color = "blue",
    size = "lg",
    style = "solid",
    leftIcon=<CiCircleInfo size="2vw" />
}) {
    return(
        <Button 
            className="
                transition 
                duration-300 
                hover:-translate-y-1
                hover:scale-105
            " 
            colorScheme={color} 
            size={size} 
            variant={style} 
            leftIcon={leftIcon}
        >
            {buttonName}
        </Button>
    )
}