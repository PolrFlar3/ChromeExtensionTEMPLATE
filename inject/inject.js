const injectContent = () => {
    const head = document.querySelector("body");
    const mainStyleSheet = document.createElement("div");
  
    mainStyleSheet.innerText = "hello";
    head.appendChild(mainStyleSheet);
};

injectContent();