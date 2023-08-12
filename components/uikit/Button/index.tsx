"use client"
import clsx from "clsx"
import { FC, PropsWithChildren } from "react"
import Box from "../Box"


interface ButtonProps extends PropsWithChildren {
   onClick?: () => void
   className?: string
   position?: string
}

const Button: FC<ButtonProps> = ({children, className, ...props}) => {
   const classes = clsx([
      'place-content-center',
      className
   ])
   return (
      <Box className={classes} as="button" {...props}>{children}</Box>
   )
}
export default Button