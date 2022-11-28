import { Button, Drawer, Space } from 'antd'
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
      <Space style={{ padding: '10px' }}>
        <Button type='primary' onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer title='Basic Drawer' placement={'right'} closable={false} onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default RightDrawer
