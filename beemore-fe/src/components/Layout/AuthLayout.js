import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div className="flex justify-center mt-40">
      {children}
    </div>
  )
}