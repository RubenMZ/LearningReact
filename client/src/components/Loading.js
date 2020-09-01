import React from 'react'

export default function Loading() {
  return (
    <div class="text-center">
      <div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}
