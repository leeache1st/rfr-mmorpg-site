import { Space } from 'antd'

import HorizontalNavBar from '../HorizontalNavBar/HorizontalNavBar'

const Header = () => {
  return (
    <>
      <Space style={{ display: 'flex', width: '100%', padding: '8px' }}>
        <div className=''>Header</div>
        <HorizontalNavBar />
      </Space>
    </>
  )
}

export default Header
