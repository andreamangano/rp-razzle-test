import React from 'react'
import styled from 'styled-components'

import {
  layout,
  top,
  content,
  main,
  side,
} from './Layout.style'

const LayoutStyled = styled.div`${layout}`
const TopStyled = styled.div`${top}`
const ContentStyled = styled.div`${content}`
const MainStyled = styled.main`${main}`
const SideStyled = styled.aside`${side}`

const Layout = ({ 
  render,
  showMobileSide,
}) => {

  return (
    <LayoutStyled>
      {
        render.top &&
        <TopStyled>
          {render.top()}
        </TopStyled>
      }
      <ContentStyled>
        {
          render.side &&
          <SideStyled
            showMobileSide={showMobileSide}
          >
            {render.side()}
          </SideStyled>
        }
        <MainStyled>
          {render.main()}
        </MainStyled>
      </ContentStyled>
    </LayoutStyled>
  )
}

export default Layout