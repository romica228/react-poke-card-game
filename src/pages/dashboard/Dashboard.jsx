import React, { useEffect, useState } from 'react';
import pokeLogo from '../../assets/pokemon_logo.svg';
import {
  InstructionSection,
  ScoreBoard,
  SettingButton,
  TopSection,
  Wrapper,
} from './Dashboard.styles.js';
import CardsGrid from '../../components/cardsGrid/CardsGrid.jsx';
import LoadingBar from '../../components/loadingBar/LoadingBar.jsx';
import StartScreen from '../startScreen/StartScreen.jsx';
import RetroText from './RetroText.jsx';
import VictoryScreen from '../victoryScreen/VictoryScreen.jsx';
import { getPokemonByUrl, getPokemonList } from '../../api/PokeAPIWrapper.js';
import SettingsModal from '../../components/settingsModal/SettingsModal.jsx';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({ cardFace: 'Default' });

  // ... need comment
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // ... need comment
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonList();

        // Iterate through each object in the array
        const updatedData = await Promise.all(
          response.map(async (item) => {
            const nestedResponse = await getPokemonByUrl(item.url);

            const simplifiedRes = nestedResponse.sprites.versions['generation-iv']['heartgold-soulsilver'];

            const stats = nestedResponse.stats.reduce((acc, curr) => {
              const { base_stat, stat: { name } } = curr;
              acc[name] = base_stat;
              return acc;
            }, {});

            const images = Object.keys(simplifiedRes)
              .filter((key) => key.includes('front') && simplifiedRes[key] !== null)
              .reduce((acc, key) => {
                acc[key] = simplifiedRes[key];
                return acc;
              }, {});

            return {
              name: item.name,
              stats,
              images,
            };
          }),
        );

        setData(updatedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [isVisible]);

  // ...
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        toggleVisibility();
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  /**
   * Function to handle data passed from the child components.
   *
   * @param {(number|boolean)} value - The data from child component.
   * @param {string} identifier - Data origin.
   * @returns {void}
   */
  const handleDataFromChild = (value, identifier) => {
    switch (identifier) {
      case 'Score':
        setScore(value);
        break;
      case 'BestScore':
        localStorage.setItem('BestScore', value);
        break;
      case 'Lose':
        setIsVisible(value);
        break;
      case 'Win':
        setWin(value);
        break;
      case 'Settings':
        setSettings({ cardFace: value });
        break;
      default:
        break;
    }
  };

  // ... need comment
  const handleNewGame = (value) => {
    setIsVisible(value);
    setWin(false);
  };

  // Function to open the settings modal
  const openSettingsModal = () => {
    setIsSettingsOpen(true);
  };

  const closeModal = () => {
    setIsSettingsOpen(false);
  };

  return (
    <Wrapper>
      {
        loading ? (
          <LoadingBar />
        ) : win ? (
          <VictoryScreen sendDataToParent={handleNewGame} />
        ) : isVisible ? (
          <StartScreen toggleVisibility={toggleVisibility} />
        ) : (
          <>
            <ScoreBoard>
              <span>{`CURRENT SCORE: ${score}`}</span>
              <img src={pokeLogo} alt="Poke logo" width="128px" />
              <span>{`BEST SCORE: ${localStorage.getItem('BestScore')}`}</span>
            </ScoreBoard>
            <TopSection>
              <InstructionSection>
                <RetroText>
                  Pick a card and remember it. Every tap reshuffles the cards. Keep
                  choosing different cards to test your memory and skill!
                </RetroText>
              </InstructionSection>
              <SettingButton onClick={openSettingsModal}>Settings</SettingButton>
            </TopSection>
            <CardsGrid data={data} sendDataToParent={handleDataFromChild} settings={settings} />

            {isSettingsOpen && (
              <SettingsModal
                onClose={closeModal}
                sendDataToParent={handleDataFromChild}
              />
            )}
          </>
        )
      }
    </Wrapper>
  );
}
