import React from 'react'

export default function Loading() {
  return (
    <div className="loading text-center">
      <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
