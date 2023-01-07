import { ShareButton } from '../styles/index.css'
import { Export } from 'phosphor-react'

export default function Share() {
  return (
    <button className={ShareButton}>
      <span>Save or Share</span>
      <Export size={20} />
    </button>
  )
}
