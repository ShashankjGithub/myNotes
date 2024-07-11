import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
export default function Home() {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <>
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar style={{height:"100vh"}} collapsed={collapsed}>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>
    </>
  )
}

