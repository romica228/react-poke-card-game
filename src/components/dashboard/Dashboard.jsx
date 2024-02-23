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
  const [score, setScore] = useState(0);

  // ... need comment
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

  // ... need comment
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  /**
   * Function to handle data passed from the child components.
   *
   * @param {(number|boolean)} value - The data from child component.
   * @param {string} identifier - Data origin.
   * @returns {void}
   */
  const handleDataFromChild = (value, identifier) => {
    switch (identifier) {
      case 'CardsGrid':
        setScore(value);
        break;
      case 'GameOverModal':
        setIsVisible(value);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      {loading ? (
        <LoadingBar />
      ) : (
        isVisible ? (
          <div>
            <h1>PokéMem Recall</h1>
            <h1>{'Gotta Remember \'Em All!'}</h1>
            <button onClick={toggleVisibility}>START GAME</button>
          </div>
        ) : (
          <>
            <ScoreBoard>
              <span>{`CURRENT SCORE: ${score}`}</span>
              <img src={pokeLogo} alt="Poke logo" width="128px" />
              <span>BEST SCORE: 0</span>
            </ScoreBoard>
            <InstructionSection>Mini instruction section</InstructionSection>
            <CardsGrid data={data} sendDataToParent={handleDataFromChild} />
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
