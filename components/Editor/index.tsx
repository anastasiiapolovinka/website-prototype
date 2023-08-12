"use client"
import clsx from "clsx"
import { Dispatch, FC, SetStateAction, useState } from "react"
import Button from "../uikit/Button"
import Section from "../Section"
import { Box } from "../uikit"
import styles from "./index.module.css"

interface EditorProps {
   className?: string
   setToolBarActive: Dispatch<SetStateAction<boolean>>
   addedToolType: string
   addedSectionToolType: string
   setSectionBarActive: Dispatch<SetStateAction<boolean>>
}

const Editor: FC<EditorProps> = ({className, setToolBarActive= () => {}, addedToolType, addedSectionToolType, setSectionBarActive, ...props}) => {
   const classes = clsx([
      'flex-col p-3 h-fit',
      styles.wrapper,
      className
   ])
   const [items, setItems] = useState<Array<number>>([]);
   const handleClick = () => {
      setItems([...items, items.length])
    }
    const [activeSection, setActiveSection] = useState<number>()
   return (
      <Box className={classes} {...props}>
         {items.map((i, idx) => 
            <Section 
               key={i} idx={idx} 
               sectionList={items} 
               setItems={setItems} 
               isActive={activeSection === i} 
               setActive={()=> setActiveSection(i)} 
               setToolBarActive={setToolBarActive}
               addedToolType={addedToolType}
               addedSectionToolType={addedSectionToolType}
               setSectionBarActive={setSectionBarActive}
            />
         )}
         <Button onClick={handleClick}>CLICK ME</Button>
      </Box>
   )
}

export default Editor