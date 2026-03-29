export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact,
      );
    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload.updatedData }
          : contact,
      );
    case "delete":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};
