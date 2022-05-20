import { Box, IconButton } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Player } from "../App"

type PlayerGridLineProps = {
    player: Player;
    setEditPlayerId: (id: number) => void;
    onOpen: () => void;
    handleDeletePlayer: (id: number) => void;
}

export function PlayerGridLine({ player, handleDeletePlayer, onOpen, setEditPlayerId }: PlayerGridLineProps) {
    return (
        <>
            <Box key={player.id}>{player.nome}</Box>
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
    );
}