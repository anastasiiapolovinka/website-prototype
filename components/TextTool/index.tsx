import { useState } from "react"
import { Box, Button, TextArea } from "../uikit"

const TextTool = () => {
   const [isActive, setActive] = useState<boolean>(true)
   const handleClick = () => {
      setActive(false)
   }
   return (
      <Box className="w-full flex-col border border-black px-1 py-1 bg-white">
         <TextArea isActive={isActive}/>
         {isActive && <Button onClick={handleClick}>SAVE</Button>}
      </Box>
   )
}

export default TextTool