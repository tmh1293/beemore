import React from 'react'

export default function Header({ children }) {
  return (
    <div className="flex justify-center">
      {children}
    </div>
  )
}