import { FC, PropsWithChildren } from "react"
import Box from "../Box"

interface ContainerProps extends PropsWithChildren {}

const Container: FC<ContainerProps> = ({children, ...props}) => {
   return (
      <Box className="container" {...props}>{children}</Box>
   )
}

export default Container