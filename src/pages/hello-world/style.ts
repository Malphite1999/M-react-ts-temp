import styled from 'styled-components'

export const HelloWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  .logo {
    height: 40vmin;
    pointer-events: none;
  }
  .btn{
    margin-top: 5vh;
  }
  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
