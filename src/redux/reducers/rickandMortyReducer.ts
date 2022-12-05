interface Reducer {
    initialState: {
        loading: boolean
        name: null
        error: null
    }
    actions: {
        type: 'FETCH-CHARACTER' | 'FETCH-CHARACTER-SUCCESS' | 'FETCH-CHARACTER-ERROR'
        payload?: any
    }
}

const initialState: Reducer['initialState'] = {
    loading: false,
    name: null,
    error: null
}

export const pokemonReducer = (state = initialState, actions: Reducer['actions']) => {
    switch (actions.type) {
        case 'FETCH-CHARACTER':
            return {
                ...state,
                loading: true
            }
        case 'FETCH-CHARACTER-SUCCESS':
            return {
                ...state,
                loading: false,
                name: actions.payload,
                error: null
            }
        case 'FETCH-CHARACTER-ERROR':
            return {
                ...state,
                loading: false,
                name: null,
                error: actions.payload
            }

        default:
            return initialState
    }

}