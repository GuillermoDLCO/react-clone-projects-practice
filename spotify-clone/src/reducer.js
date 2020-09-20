export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // * Remove after finish developing...
    // token: "BQAF80kmBQZFN9VAju8_Wv9cDRKFoh-i2kXwJt7iN3Uiq_kUGH1DTRzKtcqjpUhDPZeggMILCVjbGuzkKwAbw44vXp-swxg_QgHPMrw3XIyODjcVbYC6jlq3-aRMKz7LZVobC-PDM5N19uDCYRaIHxW6l1OWb6Q",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default:
            return state;
    }
};

export default reducer;