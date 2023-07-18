"use client"
import clsx from "clsx"
import { ElementType, FC, MouseEventHandler, PropsWithChildren } from "react"

interface BoxProps extends PropsWithChildren {
   className?: string
   as?: ElementType
   onClick?: MouseEventHandler
}

const Box: FC<BoxProps> = ({children, className, as: Tag = "div", onClick = () => {}, ...props}) => {
   const classes = clsx([
      'flex',
      'relative',
      className
   ])
   return (
      <Tag className={classes} onClick={onClick} {...props}>{children}</Tag>
   )
}

export default Box