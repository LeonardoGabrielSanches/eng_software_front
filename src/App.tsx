import { Divider, Flex, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { PLayerList } from './components/PlayerList';
import { handleCreateNewPlayer, handleLoadPlayers, handleDeletePlayer, handleUpdatePlayer } from './services/player';
import { NewPlayer } from './components/NewPlayer';

export type Player = {
  id: number;
  nome: string;
  gols: number;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    handleLoadPlayers().then(p => setPlayers(p));
  }, [handleLoadPlayers]);

  async function handleCreate(name: string) {
    await handleCreateNewPlayer(name);
    handleLoadPlayers().then(p => setPlayers(p));
  }

  async function handleUpdate(id: number, gols: number) {
    console.log(id)
    await handleUpdatePlayer(id, gols);
    handleLoadPlayers().then(p => setPlayers(p));
  }

  async function handleDelete(id: number) {
    await handleDeletePlayer(id);
    handleLoadPlayers().then(p => setPlayers(p));
  }

  return (
    <Flex backgroundColor={theme.colors.gray[500]} w="100vw" h="100vh" flexDir="column">
      <Flex
        fontSize={theme.fontSizes['5xl']}
        w="100%"
        alignItems="center"
        flexDir="column"
      >
        Artilheiros do brasileirão
      </Flex>

      <Divider />

      <NewPlayer handleCreatePlayer={handleCreate} />

      <PLayerList
        players={players}
        handleDeletePlayer={handleDelete}
        handleUpdatePlayer={handleUpdate}
      />
    </Flex >
  )
}

export default App
