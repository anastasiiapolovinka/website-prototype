import clsx from "clsx"
import { ElementType, FC, PropsWithChildren } from "react"

interface ATextProps extends PropsWithChildren {
   className?: string,
   as?: ElementType 
}

const AText: FC<ATextProps> = ({children, className, as: Tag = "div", ...props}) => {
   const classes = clsx([
      'flex',
      'relative',
      className
   ])
   return (
      <Tag className={classes} {...props}>{children}</Tag>
   )
}

export default AText