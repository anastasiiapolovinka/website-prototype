import Box from "../Box"
import style from "./index.module.css"
import clsx from "clsx"

interface TextAreaProps {
   isActive: boolean
}

const TextArea = ({ isActive = false, ...props }) => {
   const classes = clsx([
      'overflow-hidden w-full min-h-[40px] border outline-0',
      style.textarea,
      isActive ? 'border-black' : 'border-transparent'
   ])
   return (
      <Box 
         as="span" display="block" className={classes} role="textbox" contentEditable={isActive} {...props}>
      </Box>
   )
}

export default TextArea