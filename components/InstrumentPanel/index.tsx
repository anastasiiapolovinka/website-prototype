"use client"
import clsx from "clsx"
import { Dispatch, FC, SetStateAction } from "react"
import { Box } from "../uikit"

interface InstrumetnPanelProps {
   isToolBarActive: boolean
   className?: string
   setAddedToolType: Dispatch<SetStateAction<string>>
   isSectionBarActive: boolean
   setAddedSectionToolType: Dispatch<SetStateAction<string>>
}

const TOOL_TYPES = {
   IMG: 'img',
   TEXT: 'text',
   BTN: 'button'
}
const SECTION_TOOL_TYPES = {
   ONE_COLUMN_SECTION: 'one_column_section',
   TWO_COLUMN_SECTION: 'two_column_section',
   THREE_COLUMN_SECTION: 'three_column_section'
}

const InstrumetnPanel: FC<InstrumetnPanelProps> = ({
   isToolBarActive,
   setAddedToolType = () => {},
   setAddedSectionToolType = () => {},
   isSectionBarActive,
   ...props
}) => {
   const panelClasses = 'w-full justify-start p-3 h-fit flex-wrap'
   const sectionPanelClasses = clsx([
      panelClasses,
      isSectionBarActive && 'border border-blue-400 bg-blue-100'
   ])
   const toolPanelClasses = clsx([
      panelClasses,
      isToolBarActive && 'border border-blue-400 bg-blue-100'
   ])
   const sectionToolClasses = clsx([
      'mr-1',
      isSectionBarActive ? 'cursor-pointer' : 'cursor-not-allowed'
   ])
   const toolClasses = clsx([
      'mr-1',
      isToolBarActive ? 'cursor-pointer' : 'cursor-not-allowed'
   ])
   const handleAddSectionType = (type: string) => {
      isSectionBarActive && setAddedSectionToolType(type)
   }
   const handleAddToolType = (type: string) => {
      isToolBarActive && setAddedToolType(type)
   }
   return (
      <Box {...props}>
         <Box className={sectionPanelClasses}>
            {Object.keys(SECTION_TOOL_TYPES).map((type) => {
               return (
                  <Box className={sectionToolClasses} onClick={() => handleAddSectionType(type)}>
                     {type}
                  </Box>
               )
            })}
         </Box>
         <Box className={toolPanelClasses}>
            {Object.keys(TOOL_TYPES).map((type) => {
               return (
                  <Box className={toolClasses} onClick={() => handleAddToolType(type)}>
                     {type}
                  </Box>
               )
            })}
         </Box>
      </Box>
   )
}
export default InstrumetnPanel
