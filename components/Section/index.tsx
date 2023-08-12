import clsx from "clsx";
import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import Button from "../uikit/Button";
import ButtonTool from "../ButtonTool";
import ImageTool from "../ImageTool";
import TextTool from "../TextTool";
import { Box } from "../uikit"
import Column from "../Column";

interface SectionProps {
   isActive: boolean
   setActive: Dispatch<SetStateAction<boolean>>
   setToolBarActive: Dispatch<SetStateAction<boolean>>
   setSectionBarActive: Dispatch<SetStateAction<boolean>>
   idx: number
   sectionList: Array<number>
   setItems: Dispatch<SetStateAction<Array<number>>>
   addedToolType: string
   addedSectionToolType: string
}
type componentsMap = { [key: string]: FC }
const TOOL_TYPE_COMPONENTS: componentsMap = {
   IMG: ImageTool,
   TEXT: TextTool,
   BTN: ButtonTool
}
const SECTION_TOOL_TYPE_COMPONENTS: componentsMap = {
   ONE_COLUMN_SECTION: Column,
   TWO_COLUMN_SECTION: Column,
   THREE_COLUMN_SECTION: Column
}

const Section: FC<SectionProps> = ({
   isActive, 
   setActive, 
   setItems, 
   setToolBarActive, 
   setSectionBarActive, 
   addedToolType, 
   addedSectionToolType, 
   idx, 
   sectionList, 
   ...props
}) => {
   const handleClick = () => {
      setActive(true)
   }
   const handleDeleteSection = () => {
      const list = [...sectionList]
      list.splice(idx, 1)
      setItems(list)
      setSectionBarActive(false)
   }
   const handleAddElement = () => {
      setSectionBarActive(true)
   }
   const classes = clsx(
      [
         'border-4 w-full min-h-[100px] px-1 py-1 mb-3 last:mb-0',
         isActive && 'border-blue-400 bg-blue-100' || 'border-black'
      ]
   )
   const Comp: FC<PropsWithChildren> = SECTION_TOOL_TYPE_COMPONENTS[addedSectionToolType] || Box;
   return (
      <Box className={classes} onClick={handleClick} {...props}>
         {isActive && (
            <>
               <Box className="min-w-full items-center justify-center">
                  <Comp>{addedSectionToolType}</Comp>
                  <Button onClick={handleAddElement} className="text-5xl border color-white text-blue-400">+</Button>
               </Box>
               <Button onClick={handleDeleteSection} position="absolute" className="top-0 right-0  border border-blue-400 rounded-full w-6 h-6">X</Button>  
            </>
         )}
      </Box>
   )
}

export default Section