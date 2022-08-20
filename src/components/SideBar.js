import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarDiv>SideBar</SideBarDiv>
  )
}

const SideBarDiv = styled.div`
  background-color: #17123B; //#26C281
  height: 100vh;
  width: 15vw;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

`

export default SideBar