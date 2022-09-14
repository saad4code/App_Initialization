import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from 'app/Assets'
import { Container, Content } from '../../Styled'

export const Main = () => {
  const history = useHistory()
  return (
    <div className="App bg-gray-200">
      <header className="App-header">
        <div className="flex h-screen">
          <div className="m-auto">
            <div className="text-center">
              <img src={Logo} alt="logo" className="h-56 inline" />
            </div>
            <Container>
              <p>Welcome to react-boiler-plate-app</p>
              <div>
                Happy hacking
                <Content
                  onClick={() => {
                    history.push(`./about`)
                  }}
                >
                  About me
                </Content>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </div>
  )
}
