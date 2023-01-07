import { HelpButton } from '../styles/index.css'
import { Info } from 'phosphor-react'

export default function Share() {
  return (
    <button className={HelpButton}>
      <Info size={20} />
      <span>Help</span>
    </button>
  )
}
