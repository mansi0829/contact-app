const initialState = [
    {
        id: 0,
        name: "Mansi Gundre",
        phone: 1234567890
    },
    {
        id: 1,
        name: "Test Name",
        phone: 4567891230
    },
];


const contactReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        default:
            return state;
    }
};

export default contactReducer;