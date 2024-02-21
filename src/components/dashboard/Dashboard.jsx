import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import pokeLogo from '../../assets/pokemon_logo.svg';
import settingsIcon from '../../assets/pokeball_icon.svg';
import {
  InstructionSection,
  ScoreBoard,
  SettingBox,
  Wrapper,
} from './Dashboard.styles.js';
import CardsGrid from '../cardsGrid/CardsGrid.jsx';
import LoadingBar from '../loadingBar/LoadingBar.jsx';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0');
        const responseData = response.data.results;

        // Iterate through each object in the array
        const updatedData = await Promise.all(
          responseData.map(async (item) => {
            const nestedResponse = await axios.get(item.url);
            const simplifiedRes = nestedResponse.data.sprites.versions['generation-iv']['heartgold-soulsilver'];

            const images = Object.keys(simplifiedRes)
              .filter((key) => key.includes('front') && simplifiedRes[key] !== null)
              .reduce((acc, key) => {
                acc[key] = simplifiedRes[key];
                return acc;
              }, {});

            return {
              name: item.name,
              url: item.url,
              images,
            };
          }),
        );

        setTimeout(() => {
          setData(updatedData);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      {loading ? (
        <LoadingBar />
      ) : (
        isVisible ? (
          <div>
            <div>WELCOME</div>
            <button onClick={toggleVisibility}>START GAME</button>
          </div>
        ) : (
          <>
            <ScoreBoard>
              <span>CURRENT SCORE: 0</span>
              <img src={pokeLogo} alt="Poke logo" width="128px" />
              <span>BEST SCORE: 0</span>
            </ScoreBoard>
            <InstructionSection>Mini instruction section</InstructionSection>
            <CardsGrid data={data} />
            <SettingBox>
              <span>Settings</span>
              <img src={settingsIcon} alt="Settings" width="28px" />
            </SettingBox>
          </>
        )
      )}
    </Wrapper>
  );
}
