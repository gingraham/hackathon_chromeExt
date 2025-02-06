chrome.storage.local.set({ name:"todoApp.memory" }).then(() => {
    console.log("Value is set");
  });
  
  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });