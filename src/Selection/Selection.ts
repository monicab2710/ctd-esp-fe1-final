import { createThunk } from "../Hooks/thunk";
import { fetchCharacters, fetchEpisodes, getByFilterCharacters } from "../services/character.services";
import { Character, Episode } from "../types/character.types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


export type charactersState = {
    characters: Character[];
    loading: boolean;
    filter: string;
    page: number;
    favourites: Character[];
    episodes: Episode[];
    episodesNumber: number[];
};

const initialState: charactersState = {
    characters: [],
    loading: false,
    filter: "",
    page: 1,
    favourites: [],
    episodes: [],
    episodesNumber: [],
};

export const loadCharacters = createThunk<Character[], void>(
    "characters/fetchCharacters",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { page } = state.characters;
        return fetchCharacters(page.toString());
    }
);

export const loadFilterCharacters = createThunk<Character[], void>(
    "charactersConfilter/fetchFilterCharacters",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { page, filter } = state.characters;
        return getByFilterCharacters({
            page: page.toString(),
            name: filter.toString(),
        });
    }
);

export const loadEpisodes = createThunk<Episode[], void>(
    "episodes/fetchEpisodes",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { episodesNumber } = state.characters;
        return fetchEpisodes(episodesNumber);
    }
);

export const charactersSelection = createSlice({
    name: "characters",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page += 1;
        },
        prevPage: (state) => {
            state.page -= 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
        filter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        resetfilter: (state) => {
            state.filter = "";
        },
        addFav: (state, action: PayloadAction<Character>) => {
            state.favourites = [...state.favourites, action.payload];
        },
        deleteFav: (state, action: PayloadAction<Character>) => {
            state.favourites = state.favourites.filter(
                (character) => character.id !== action.payload.id
            );
        },
        resetFav: (state) => {
            state.favourites = [];
        },
        getEpisodes: (state, action: PayloadAction<number[]>) => {
            state.episodesNumber = action.payload;
        },
        resetEpisodes: (state) => {
            state.episodesNumber = [];
            state.episodes = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadCharacters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
        builder.addCase(loadCharacters.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(loadFilterCharacters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadFilterCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
        builder.addCase(loadFilterCharacters.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(loadEpisodes.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadEpisodes.fulfilled, (state, action) => {
            state.episodes = action.payload;
            state.loading = false;
        });
        builder.addCase(loadEpisodes.rejected, (state, action) => {
            state.loading = false;
        });
    },
});
