"use client"
import clsx from "clsx"
import { ElementType, FC, MouseEventHandler, PropsWithChildren } from "react"

interface BoxProps extends PropsWithChildren {
   className?: string
   as?: ElementType
   onClick?: MouseEventHandler
   position?: string
   role?: string
   contentEditable?: boolean
   display?: string
}

const Box: FC<BoxProps> = ({children, display = 'flex', position = 'relative', className, as: Tag = "div", onClick = () => {}, ...props}) => {
   const classes = clsx([
      display,
      position,
      className
   ])
   return (
      <Tag className={classes} onClick={onClick} {...props}>{children}</Tag>
   )
}

export default Box