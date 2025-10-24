// pages/_error.tsx
import React from 'react'
import Link from 'next/link'
import { NextPageContext } from 'next'

function ErrorPage({ statusCode }: { statusCode?: number }) {
  let errorMessage: React.ReactNode

  if (statusCode === 404) {
    errorMessage = '404: Page not found'
  } else if (statusCode) {
    errorMessage = (
      <div>
        A <b>{statusCode}</b> server error occurred
      </div>
    )
  } else {
    errorMessage = <div>A client error occurred</div>
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0, // full viewport
        backgroundColor: '#1d1c20', // match dark app bg
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
        {errorMessage}
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

// getInitialProps is still supported for _error in the pages router.
// This preserves your statusCode logic.
ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res
    ? res.statusCode
    : err
      ? (err as any).statusCode
      : 404
  return { statusCode }
}

export default ErrorPage
