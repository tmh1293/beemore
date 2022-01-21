import React from 'react'

export default function Header({ children }) {
  return (
    <div className="text-gray-600 body-font shadow">
      {children}
    </div>
  )
}