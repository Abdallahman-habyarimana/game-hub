import { useEffect, useState } from "react";
import { Game } from "./useGames";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres')


export default useGenres