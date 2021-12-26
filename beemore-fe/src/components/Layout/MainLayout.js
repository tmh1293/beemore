import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div>
      <div className="flex justify-center flex-col">
        {children}
      </div>
    </div>
  )
}
