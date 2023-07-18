"use client"
import { Box } from "../uikit"


const Button = ({...props}) => {
   return (
      <Box className="place-content-center" as="button" {...props}>CLICK ME</Box>
   )
}
export default Button