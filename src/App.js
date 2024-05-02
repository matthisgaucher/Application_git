import Sidebar from "./components/Sidebar";
import Events from "./components/Events";
import Players from "./components/Players";
import Teams from "./components/Teams";
import styled from "styled-components";
import Header from "./components/header";

function App() {
  return (
    <StyleBody>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <div className="column-1">
          <Header />
          <Events />
        </div>
        
        <div className="column-2">
          <div>
            <Players />
          </div>
          <div>l
            <Teams />
          </div>
        </div>
      </main>
    </StyleBody>
  );
}

export default App;

const StyleBody = styled.div`
  display: flex;
  height: 100vh;

  & > aside {
    width: 336px;
  }
   
  & > main {
    flex-grow: 1;
    display: flex;
    gap: 36px;
    padding: 36px;

    & > .column-1 {
      width: 60%;
    }

    & > .column-2 {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 36px; 
      
      & > div:first-child {
          height: 50%;
      }

      & > div:last-child {
          height: 50%;            
      }
    }
  }
` 