// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import { createRoot } from 'react-dom/client'
import React from "react"
import ReactImage from "../assets/images/React.png"

const App: React.FC = () => (
  <div>
    <h1 className="\text-5xl">Hello from React</h1>
    <img src={ReactImage} alt="" />
  </div>
)

const rootElement: HTMLElement | null = document.getElementById("root")

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<App />)
}