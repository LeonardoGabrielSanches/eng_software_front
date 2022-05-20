import { Button, Flex, FormControl, FormLabel, Input, theme } from "@chakra-ui/react";
import { useState } from "react";

type NewPlayerProps = {
    handleCreatePlayer: (name: string) => void;
}

export function NewPlayer({ handleCreatePlayer }: NewPlayerProps) {
    const [newPlayer, setNewPlayer] = useState('');

    function handleClick() {
        handleCreatePlayer(newPlayer);
        setNewPlayer('');
    }

    return (
        <Flex
            w="40%"
            justifyContent="space-around"
            flexDir="row"
            mt={theme.space[10]}
            mx="auto"
        >
            <FormControl >
                <FormLabel htmlFor='name'>Nome do jogador</FormLabel>
                <Input
                    id='name'
                    type='text'
                    w="60%"
                    mr="2"
                    value={newPlayer}
                    onChange={e => setNewPlayer(e.target.value)}
                />

                <Button
                    onClick={handleClick}
                    disabled={!newPlayer}
                >
                    Criar novo jogador
                </Button>
            </FormControl>
        </Flex>
    );
}