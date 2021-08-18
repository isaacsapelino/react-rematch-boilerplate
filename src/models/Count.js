export const Count = {
    state: 0,
    reducers: {
        increment(state, payload) {
            return state + payload;
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(payload, rootState) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch.Count.increment(payload);
        }
    })
}