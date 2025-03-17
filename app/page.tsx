"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Moon, Sun, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ChatMessage from "./components/chat-message"
import LoadingDots from "./components/loading-dots" 

// Add these imports at the top
import { useChat } from "ai/react"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
}

// Replace the existing useState hooks and handleSubmit function with useChat
export default function ChatUI() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    initialMessages: [
      {
        id: "1",
        content: "Hello! I'm your AI assistant. How can I help you today?",
        role: "assistant",
      },
    ],
  })
  const [theme, setTheme] = useState<string>("light")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Keep the existing useEffect for scrolling
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Keep the existing toggleTheme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Update the clearChat function
  const clearChat = () => {
    // Reset to initial message
    window.location.reload()
  }

  // Add this useEffect after the existing useEffect for scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Enter to submit
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        if (input.trim() && !isLoading) {
          handleSubmit(new Event("submit") as any)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [input, isLoading, handleSubmit])

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">AI Chat</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={clearChat} title="Clear chat">
            <Trash2 className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400">Send a message to start chatting</p>
          </div>
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}

        {isLoading && (
          <div className="flex items-start">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 max-w-[80%]">
              <LoadingDots />
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg">{error}</div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t dark:border-gray-700 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
              maxLength={1000}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{input.length > 0 ? `${input.length}/1000` : ""}</span>
            <span>Press Ctrl+Enter to send</span>
          </div>
        </form>
      </div>
    </div>
  )
}

