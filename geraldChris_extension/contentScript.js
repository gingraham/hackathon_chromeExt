chrome.storage.local.set({ name:"aName" }).then(() => {
    console.log("Value is set");
  });
  
  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });