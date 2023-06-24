import clsx from "clsx"
import { ElementType, FC, PropsWithChildren } from "react"

interface BoxProps extends PropsWithChildren {
   className?: string
   as?: ElementType
}

const Box: FC<BoxProps> = ({children, className, as: Tag = "div", ...props}) => {
   const classes = clsx([
      'flex',
      'relative',
      className
   ])
   return (
      <div className={classes} {...props}>{children}</div>
   )
}

export default Box