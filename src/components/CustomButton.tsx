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
        <Button colorScheme={color} size={size} variant={style} leftIcon={leftIcon}>
            {buttonName}
        </Button>
    )
}