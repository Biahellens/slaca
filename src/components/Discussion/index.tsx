//dependencies
import React, { useState } from 'react'

//componentes
import Card from '../Card'
import CardInfo from '../CardInfo'
import CardCreate from '../CardCreate'
import CardEdit from '../CardEdit'
import CardComment from '../CardComment'

export default function Discussion(){
  const [step, setStep] = useState<'info' | 'create' | 'edit'>('info')

  const stepSection = () => {
    switch (step) {
      case 'info':
        return (
          <div onClick={() => setStep('create')}>
           <CardInfo />
          </div>
        )
      case 'create':
        return (
          <div onClick={() => setStep('edit')}>
            <CardCreate />
          </div>
        )
        case 'edit':
        return (
          <div onClick={() => setStep('info')}>
            <CardEdit />
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
      <CardComment />
    </Card>
  )
}
