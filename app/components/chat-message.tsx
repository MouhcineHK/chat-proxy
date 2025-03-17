"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user"
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const now = new Date()
    setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
  }, [])

  return (
    <div className={cn("flex flex-col", isUser ? "items-end" : "items-start")}>
      <div
        className={cn(
          "rounded-lg p-3 max-w-[80%]",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
        )}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{time}</span>
    </div>
  )
}

