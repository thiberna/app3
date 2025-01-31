"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface ProgressContextType {
  progress: number
  updateProgress: (value: number) => void
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider")
  }
  return context
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0)

  const updateProgress = (value: number) => {
    setProgress(value)
  }

  return <ProgressContext.Provider value={{ progress, updateProgress }}>{children}</ProgressContext.Provider>
}

