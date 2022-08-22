import styled from "styled-components";
import {Link} from 'react-router-dom';
import { BsBank2 } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';

const SideBar = () => {
  return (
    
    <SideBarDiv>

      
      <SecondaryContainer>

        <div style={{paddingLeft: '2.5vw'}}>
          <h1 style={{color:'whitesmoke', fontSize: '2vw',fontFamily: 'Pacifico, cursive'}}>EquitiesData</h1>
        </div>

        <div style={{paddingLeft: '2.5vw', paddingTop:'10vh'}} >
          <NavLinks href="/">
            <NavContainer>
              <FaSearch size='1.05vw' />
              <p>Search Ticker</p>
            </NavContainer>
          </NavLinks>
        </div>

        <div style={{paddingLeft: '2.5vw'}}>
          <NavLinks href="/marketnews">
            <NavContainer>
              <BiNews size='1.05vw' />
              <p>Trending News</p>
            </NavContainer>
          </NavLinks>
        </div>

        <div style={{paddingLeft: '2.5vw'}}>
          <NavLinks href="/economicindicators">
            <NavContainer>
              <BsBank2 size='1.05vw' />
              <p>Economic Indicators</p>
            </NavContainer>
          </NavLinks>
        </div>
      </SecondaryContainer>

    </SideBarDiv>
    
  )
}

const SideBarDiv = styled.div`
  background-color: #17123B; //#26C281
  height: 100vh;
  width: 16vw;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`
const SecondaryContainer = styled.div`
  width:16vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;

  p {
    font-size: 0.95vw;
    margin: 0;
    padding-left: 15px;
  }
`

const NavLinks = styled.a`
  text-decoration: none;
  color: whitesmoke;
`

export default SideBar