import { useState } from 'react'

const RightDrawer = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div>drawer </div>
    </>
  )
}

export default RightDrawer
