//dependencies
import React, { useState } from 'react'

import Card from '../Card'

export default function Discussion(){
  const [step, setStep] = useState<'info' | 'create' | 'edit'>('info')

  const stepSection = () => {
    switch (step) {
      case 'info':
        return (
          <div onClick={() => setStep('create')}>
            Olá sou a info
          </div>
        )
      case 'create':
        return (
          <div onClick={() => setStep('edit')}>
            Olá sou a create
          </div>
        )
        case 'edit':
        return (
          <div onClick={() => setStep('info')}>
            Olá sou a edit
          </div>
        )
        default:
          return (
            <div onClick={() => setStep('create')}>
              Olá sou a info
            </div>
          )
    }
  }


  return (
    <Card title="Discussões">
      {stepSection()}
    </Card>
  )
}
