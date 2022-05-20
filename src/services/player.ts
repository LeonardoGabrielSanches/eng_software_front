import { Player } from "../App";
import { api } from "./api";

export async function handleLoadPlayers() {
    return (await api.get<Player[]>('')).data;
}

export async function handleCreateNewPlayer(name: string) {
    await api.post('', { nome: name });
}

export async function handleUpdatePlayer(id: number, gols: number) {
    await api.put(`/${id}`, { gols });
}

export async function handleDeletePlayer(id: number) {
    await api.delete(`/${id}`);
}