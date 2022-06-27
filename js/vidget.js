const createVidget = () => {
  const vidget = document.createElement("div");
  vidget.classList.add("vidget");
  document.body.appendChild(vidget);

  const vidgetBar = document.createElement("div");
  vidgetBar.classList.add("vidget-bar");
  vidget.appendChild(vidgetBar);

  const vidgetBarHeader = document.createElement("div");
  vidgetBarHeader.classList.add("vidget-bar__header");
  vidgetBar.appendChild(vidgetBarHeader);

  const vidgetBarMain = document.createElement("textarea");
  vidgetBarMain.classList.add("vidget-bar__main");
  vidgetBar.appendChild(vidgetBarMain);

  const vidgetBarList = document.createElement("ul");
  vidgetBarList.classList.add("vidget-bar__list");
  vidgetBarHeader.appendChild(vidgetBarList);

  const vidgetItems = ["Погода", "Курсы валют", "Мировое время"];
  vidgetItems.map((item) => {
    const vidgetBarItem = document.createElement("li");
    vidgetBarItem.classList.add("vidget-bar__list-item");
    vidgetBarItem.textContent = item;
    vidgetBarList.append(vidgetBarItem);
  });

  const vidgetBtn = document.createElement("button");
  vidgetBtn.classList.add("vidget-btn");
  vidgetBtn.textContent = "VIDGET";
  vidgetBtn.addEventListener("click", () => {
    vidgetBar.classList.toggle("vidget-bar_active");
  });
  vidget.appendChild(vidgetBtn);
};

createVidget();
