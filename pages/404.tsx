// pages/404.tsx
import React from 'react'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0, // top:0,right:0,bottom:0,left:0
        backgroundColor: '#1d1c20', // match your app dark bg
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h3
        style={{
          margin: '0 0 1rem 0',
          fontSize: '1.5rem',
          fontWeight: 500,
        }}
      >
        404: Page not found
      </h3>

      <Link
        href="/"
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          color: 'white',
          backgroundColor: '#0070f3',
          padding: '0.6rem 1.2rem',
          borderRadius: '4px',
          fontWeight: 500,
          transition: 'background-color 0.2s ease',
        }}
      >
        Home
      </Link>
    </div>
  )
}
