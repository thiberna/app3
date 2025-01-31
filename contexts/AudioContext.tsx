"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { URLS } from "@/constants/urls"

interface AudioContextType {
  isPlaying: boolean
  toggleAudio: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audioElement = new Audio(URLS.AUDIO.SAD_MUSIC)
    audioElement.loop = true
    audioElement.volume = 0.1
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ""
    }
  }, [])

  const toggleAudio = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return <AudioContext.Provider value={{ isPlaying, toggleAudio }}>{children}</AudioContext.Provider>
}

