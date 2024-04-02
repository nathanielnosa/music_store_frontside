import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, formData, token) => {
  dispatch(loginStart());

  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Failed to log in');
    }
    const result = await response.json();
    dispatch(loginSuccess(result)); // Assuming result is already the user data
    return result; // Return the result for further handling if needed

  } catch (error) {
    dispatch(loginFailure());
    throw error; // Re-throw the error for handling in the Login component
  }
};
