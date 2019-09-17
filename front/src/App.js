import React from 'react';
import './App.css';
import styled from 'styled-components';
import ApiConfig from './ApiConfig';
import Plot from './Plot';
import {MeteoMap} from 'greenlytics-react-elements';
import BasemapImage from './Assets/basemap_sweden_2.png';
import Slider from './Slider';


const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f2f6f9b9;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 95%;
  height: 100vh;
  margin-left: 32px;
  margin-right: 32px;
`;

const NavBar = styled.div`
  background-color: white;
  height: 80px;
  width: 100%;
  box-shadow: 0px 1px 4px 1px #3f3f4522;
  margin-bottom: 4px;
`


const Card = styled.div`
  background-color: white;
  box-shadow: 0px 1px 4px 1px #3f3f4522;
  border-radius: 10px;
  padding: 16px;

`;


class App extends React.Component {


  state = {

  }


  componentDidMount = async () => {
    fetch(ApiConfig.url, {headers: {'Authorization': ApiConfig.token}})
  }

  render(){
    const testData = [
      [80, 84, 23],
      [0, 0, 0],
      [3, 3, 3],
      [40, 40, 40]

    ]
    return (
      <Container>
        <NavBar/>
        <CardContainer>
          <Card style={{flex: 1}}>
            <MeteoMap
              mapImage={BasemapImage}
              height={550}
              contourData={testData}
              onMapRendered={() => console.log('loaded')}
              maxMagnitude={100}
              contourSmoothing={0}
              isDataAvailable={true}
            />
          </Card>
          <Card style={{marginLeft: 32, flex: 2}}>
            <Slider
              start={0}
              nrTicks={11}
              end={10}
              update={(value) => console.log(value)}
            />
            <Plot
              data={[
                {
                  x: [1, 2, 3, 4, 5, 6],
                  y: [4, 5, 6, 0, 4, 1],
                  color: '#21c4fb'
                }
              ]}
            />
          </Card>
        </CardContainer>
      </Container>
    );
  }

}

export default App;
