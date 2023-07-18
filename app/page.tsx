import Editor from "@/components/Editor";
import InstrumetnPanel from "@/components/InstrumentPanel";
import { Box } from "@/components/uikit";


export default function Home() {
  return (
    <Box className="p-1 h-screen">
      <InstrumetnPanel className="basis-1/4 border"/>
      <Editor className="basis-3/4 border"/>
    </Box>
  )
}
