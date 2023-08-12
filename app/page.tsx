"use client"
import Editor from "@/components/Editor";
import InstrumetnPanel from "@/components/InstrumentPanel";
import { Box } from "@/components/uikit";
import { useState } from "react";


export default function Home() {
  const [isToolBarActive, setToolBarActive] = useState<boolean>(false)
  const [addedToolType, setAddedToolType] = useState<string>('')
  const [isSectionBarActive, setSectionBarActive] = useState<boolean>(false)
  const [addedSectionToolType, setAddedSectionToolType] = useState<string>('')
  return (
    <Box className="p-1 h-screen">
      <InstrumetnPanel 
        isToolBarActive={isToolBarActive} 
        setAddedToolType={setAddedToolType}
        setAddedSectionToolType={setAddedSectionToolType}
        isSectionBarActive={isSectionBarActive} 
        className="basis-1/4 border p-3 max-w-[25%] flex-col"
      />
      <Editor 
        setToolBarActive={setToolBarActive} 
        addedToolType={addedToolType}
        addedSectionToolType={addedSectionToolType}
        setSectionBarActive={setSectionBarActive}
        className="basis-3/4 border"
      />
    </Box>
  )
}
