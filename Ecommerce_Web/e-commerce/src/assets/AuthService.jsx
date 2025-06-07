

export const login = async (email, password) => {
    
    // Send a POST request to your backend to authenticate
    const response = await fetch('https://yourapi.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    
    if (data.token) {
      localStorage.setItem('token', data.token); // Store JWT token
      return data;
    } else {
      throw new Error('Login failed');
    }
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };
  