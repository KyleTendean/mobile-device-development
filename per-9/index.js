//  1
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  async function messages() {
    let msg = await helloWorld();
    console.log(msg);
  }
  messages();

  // 2
  function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => console.log(users.data));
  };
  ambilDataUser();

// 3
  const ambilDataUser = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
  };
  ambilDataUser();


  
  
  
  
  
  


  
  
  
  
  