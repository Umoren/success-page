'use client'

import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const customerName = searchParams.get('customer_name')
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
          {customerName && (
            <p className="text-lg text-gray-600 mb-4">
              Thank you, {customerName}!
            </p>
          )}
          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-500 mb-2">Query Parameters:</h2>
            <div className="bg-gray-50 rounded p-3 text-left">
              {Array.from(searchParams.entries()).map(([key, value]) => (
                <div key={key} className="text-sm">
                  <span className="font-medium">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}