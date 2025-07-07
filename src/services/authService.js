// src/services/authService.js
export const signIn = async ({ email, password }) => {
  const validUser = {
    email: "test@example.com",
    password: "123456",
    name: "Test User",
    token: "fake-jwt-token-123",
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === validUser.email && password === validUser.password) {
        resolve({ user: { name: validUser.name, email }, token: validUser.token });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 800);
  });
};
