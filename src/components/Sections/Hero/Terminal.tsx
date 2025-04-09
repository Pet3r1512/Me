"use client";

import { CodeIcon } from "lucide-react";

export default function Terminal() {
  return (
    <div className="w-full lg:w-1/2 relative">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-400 to-green-600 opacity-30 blur group-hover:opacity-40 animate-pulse-slow"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">
            Terminal
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded p-4 overflow-hidden">
          <pre className="text-sm text-gray-800 dark:text-gray-300 overflow-x-auto">
            <code>{`// Deviniter Starter Template Installation
npx @deviniter/cli

// Initialize a ViteStack Template
Select a template: (use arrow keys to navigate)
- Next.js - Page Router
- Vite - React.js
- ViteStack

// Deploy-ready in seconds 🚀
`}</code>
          </pre>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <CodeIcon
              size={18}
              className="text-green-600 dark:text-green-400 mr-2"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Deviniter Starter CLI
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Build with my{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              passion
            </span>{" "}
            and ❤️
          </span>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full z-[-1] animate-blob"></div>
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-300 dark:bg-green-700 rounded-full z-[-1] animate-blob animation-delay-2000"></div>
    </div>
  );
}
