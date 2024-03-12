import React, { useEffect, useState } from 'react';
import pokeLogo from '../../assets/pokemon_logo.svg';
import {
  InstructionSection,
  ScoreBoard,
  TopSection,
  Wrapper,
} from './Dashboard.styles.js';
import { RetroButton } from '../../App.styles.js';
import CardsGrid from '../../components/cardsGrid/CardsGrid.jsx';
import LoadingBar from '../../components/loadingBar/LoadingBar.jsx';
import StartScreen from '../startScreen/StartScreen.jsx';
import VictoryScreen from '../victoryScreen/VictoryScreen.jsx';
import { getPokemonByUrl, getPokemonList } from '../../api/PokeAPIWrapper.js';
import SettingsModal from '../../components/settingsModal/SettingsModal.jsx';

export default function Dashboard({ sendData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState({
    cardFace: '',
    theme: '',
  });

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

            const images = Object.keys(simplifiedRes)
              .filter((key) => key.includes('front') && simplifiedRes[key] !== null)
              .reduce((acc, key) => {
                acc[key] = simplifiedRes[key];
                return acc;
              }, {});

            return {
              name: item.name,
              images,
            };
          }),
        );

        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // ...
  useEffect(() => {
    const savedCardFace = localStorage.getItem('CardFace');

    if (savedCardFace) {
      setSettings({ cardFace: savedCardFace });
      localStorage.setItem('CardFace', savedCardFace);
    } else {
      setSettings({ cardFace: 'default' });
      localStorage.setItem('CardFace', 'default');
    }
  }, []);

  // ...
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        setIsVisible(!isVisible);
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isVisible]);

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
      case 'CardFront':
        setSettings({ cardFace: value });
        break;
      case 'Theme':
        setSettings({ theme: value });
        sendData(settings.theme);
        break;
      case 'Loading':
        setLoading(value);
        break;
      default:
        break;
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleNewGame = (value) => {
    setIsVisible(value);
    setWin(false);
  };

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
          <LoadingBar sendDataToParent={handleDataFromChild} />
        ) : win ? (
          <VictoryScreen sendDataToParent={handleNewGame} />
        ) : isVisible ? (
          <StartScreen toggleVisibility={toggleVisibility} />
        ) : (
          <>
            <ScoreBoard>
              <h1>{`CURRENT SCORE: ${score}`}</h1>
              <img src={pokeLogo} alt="Poke logo" width="128px" />
              <h1>{`BEST SCORE: ${localStorage.getItem('BestScore') || 0}`}</h1>
            </ScoreBoard>
            <TopSection>
              <InstructionSection>
                Pick a card and remember it. Every tap reshuffles the cards. Keep
                choosing different cards to test your memory and skill!
              </InstructionSection>
              <RetroButton onClick={openSettingsModal}>Settings</RetroButton>
            </TopSection>
            <CardsGrid
              data={data}
              sendDataToParent={handleDataFromChild}
              settings={settings}
            />

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
