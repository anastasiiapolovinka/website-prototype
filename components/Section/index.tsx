import clsx from "clsx";
import { Dispatch, FC, SetStateAction } from "react";
import { Box } from "../uikit"

interface SectionProps {
   isActive: boolean,
   setActive: Dispatch<SetStateAction<boolean>>
}

const Section: FC<SectionProps> = ({isActive, setActive, ...props}) => {
   const handleClick = () => {
      setActive(true)
   }
   const classes = clsx(
      [
         'border w-full py-8 px-8 mx-3 my-3',
         isActive && 'border-blue-400'
      ]
   )
   return (
      <Box className={classes} onClick={handleClick} {...props}>SECTION</Box>
   )
}

export default Section