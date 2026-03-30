export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};