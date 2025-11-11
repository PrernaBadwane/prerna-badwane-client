import { CounterData } from '@/constents/CounterData'
import React from 'react'

const CounterSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
      {CounterData.map((item, key) => (
        <div
          key={key}
          className="w-64"
        >
          <h2 className="text-white text-shadow-10 text-4xl font-semibold">
            {item.count}
            <span className="text-primary-10 text-4xl font-semibold">+</span>
          </h2>
          <p className="text-lg text-neutral-25 mt-6">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default CounterSection
