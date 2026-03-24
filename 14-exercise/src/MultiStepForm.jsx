import { useReducer } from "react";

const initialValue = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "Next_Step":
      return { ...state, step: state.step + 1 };
    case "Prev_Step":
      return { ...state, step: state.step - 1 };
    case "reset_form":
      return initialValue;
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleConfirm = () => {
    alert("form submited succesfully!");
    dispatch({ type: "reset_form" });
  };

  return (
    <>
      <h1>Multi Step Registration!</h1>

      {/* step 1 */}
      {state.step === 1 && (
        <div>
          <h2>Step 1 : Profile</h2>
          <input
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "firstName",
                value: e.target.value,
              })
            }
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "lastName",
                value: e.target.value,
              })
            }
          />{" "}
          <br />
          <button onClick={() => dispatch({ type: "Next_Step" })}>Next</button>
        </div>
      )}

      {/* step 2 */}
      {state.step === 2 && (
        <div>
          <h2>Step 2 : Contact</h2>
          <input
            type="text"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Phone"
            value={state.phone}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "phone",
                value: e.target.value,
              })
            }
          />{" "}
          <br />
          <button onClick={() => dispatch({ type: "Prev_Step" })}>Back</button>
          <button onClick={() => dispatch({ type: "Next_Step" })}>Next</button>
        </div>
      )}
      {/* step 3 */}
      {state.step === 3 && (
        <div>
          <h2>Step 3 : Review</h2>

          <p>{state.firstName}</p>
          <p>{state.lastName}</p>
          <p>{state.email}</p>
          <p>{state.phone}</p>

          <button onClick={() => dispatch({ type: "Prev_Step" })}>Back</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
