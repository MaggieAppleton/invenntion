import { ShareButton } from '../styles/index.css'
import { Export } from 'phosphor-react'

export default function Share() {
  return (
    <div className={ShareButton}>
      <span>Save and Share</span>
      <Export size={20} />
    </div>
  )
}
