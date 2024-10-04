export const signupFetch = async (username, email, password) => {
  console.log(username, email, password);
    try {
      const response = await fetch("http://localhost:5004/users/signup", {
        method: "POST", 
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email, 
          password: password,
        }),
      });
      console.log("response", response);
  
      // if (!response.ok) {
      //   throw new Error(`Signup failed: ${response.statusText}`);
      // }
  
      const data = await response.json();
      console.log("data in signupFetch:", data);
  
      return data;
  
    } catch (error) {
      console.log(error);
      alert("ERROR! PLEASE check the console.");
    }
  };
  
  export const loginFetch = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5004/users/login", {
        method: "POST", 
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username, 
          password: password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("data in loginFetch:", data);
  
      return data;
  
    } catch (error) {
      console.log(error);
      alert("ERROR! PLEASE check the console.");
    }
  };
  
  export const dogsFetch = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DOGS_API}`, {
        method: "GET",
        mode: "cors",
        headers:  {
            "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
  
      const data = await response.json();
      console.log("images in thedogapi:", data);
  
      return data;
  
    } catch (error) {
      console.error('Error:', error);
    }
  };