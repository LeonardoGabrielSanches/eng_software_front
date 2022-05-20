import {
    Box, IconButton, SimpleGrid, theme,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
} from "@chakra-ui/react"
import { FiEdit2 } from "react-icons/fi"
import { AiFillDelete } from 'react-icons/ai';
import { Player } from "../App"
import { useState } from "react";

type PlayerListProps = {
    players: Player[]
    handleUpdatePlayer: (id: number, gols: number) => void;
    handleDeletePlayer: (id: number) => void;
}

export function PLayerList({ players, handleDeletePlayer, handleUpdatePlayer }: PlayerListProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [editPlayerId, setEditPlayerId] = useState(-1);
    const [gols, setGols] = useState(0);

    return (
        <>
            <SimpleGrid columns={4} spacing={theme.space[5]} width="40%" mx="auto" mt={theme.space[10]}>
                <Box>Nome:</Box>
                <Box>Gols:</Box>
                <Box>Atualizar gols:</Box>
                <Box>Deletar:</Box>

                {players.map(player => (
                    <>
                        <Box>{player.nome}</Box>
                        <Box>{player.gols}</Box>
                        <IconButton
                            aria-label='Edit'
                            icon={<FiEdit2 />}
                            size="xs"
                            width="30%"
                            onClick={() => {
                                setEditPlayerId(player.id);
                                onOpen();
                            }}
                        />
                        <IconButton
                            aria-label='Delete'
                            icon={<AiFillDelete />}
                            size="xs"
                            width="30%"
                            onClick={() => {
                                handleDeletePlayer(player.id);
                            }}
                        />
                    </>
                ))}
            </SimpleGrid>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Atualizar gols jogador</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl >
                            <FormLabel htmlFor='gols'>Gols</FormLabel>
                            <NumberInput min={0} value={gols} onChange={e => setGols(Number(e))}>
                                <NumberInputField id='gols' />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            colorScheme='blue'
                            onClick={() => {
                                handleUpdatePlayer(editPlayerId, gols);
                                onClose();
                            }}
                        >
                            Atualizar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
