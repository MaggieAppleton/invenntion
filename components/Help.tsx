import { HelpButton } from '../styles/index.css'
import { Info } from 'phosphor-react'

export default function Share() {
  return (
    <div className={HelpButton}>
      <Info size={20} />
      <span>Help</span>
    </div>
  )
}
