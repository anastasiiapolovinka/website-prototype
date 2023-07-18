"use client"
import clsx from "clsx"
import { FC, useState } from "react"
import Button from "../Button"
import Section from "../Section"
import { Box } from "../uikit"

interface EditorProps {
   className?: string
}

const Editor: FC<EditorProps> = ({className, ...props}) => {
   const classes = clsx([
      'flex-col',
      className
   ])
   const [items, setItems] = useState<Array<number>>([]);
   const handleClick = () => {
      setItems([...items, items.length])
    }
    const [activeSection, setActiveSection] = useState<number>()
   return (
      <Box className={classes} {...props}>
         {items.map((i) => <Section key={i} isActive={activeSection === i} setActive={()=> setActiveSection(i)} />)}
         <Button onClick={handleClick}/>
      </Box>
   )
}

export default Editor