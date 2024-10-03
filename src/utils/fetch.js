export const signupFetch = async (username, email, password) => {
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
  
      if (!response.ok) {
        throw new Error(`Signup failed: ${response.statusText}`);
      }
  
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
      const response = await fetch(`${import.meta.env.VITE_DOGS_API}`, {
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
  
  const apiKey = 'live_9VKA8scyFcDCeclyVvU7ctrjCqDriLceXQNbujGmWz4ei2NK5s7iKUstPWA17daY';
  const apiURL = 'https://api.thedogapi.com/v1/images/search?limit=5';
  
  const fetchDogImages = async () => {
    try {
      const response = await fetch(apiURL, {
        headers: {
          'x-api-key': apiKey, 
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
  
  fetchDogImages();

    //step 1: write function to fetch dogs called dogsFetch - get requests do not have a body
    //  ``
    //step 2: console.log data  
    // step 3: return data
    