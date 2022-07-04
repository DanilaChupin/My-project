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

  // const vidgetBarMain = document.createElement("textarea");
  const vidgetBarMain = document.createElement("div");
  vidgetBarMain.classList.add("vidget-bar__main");
  vidgetBar.appendChild(vidgetBarMain);

  /*Отрисовка блока Погоды*/

  const vidgetBarContentWeather = document.createElement("div");
  vidgetBarContentWeather.classList.add("vidget-bar__content-wheather");
  vidgetBarContentWeather.textContent = "Погода в вашей стране"
  vidgetBarMain.appendChild(vidgetBarContentWeather);

  const vidgetBarInfoWeather = document.createElement("div");
  vidgetBarInfoWeather.classList.add("vidget-bar__info-wheather");
  vidgetBarContentWeather.appendChild(vidgetBarInfoWeather);

  const vidgetBarInfoWeatherTemperature = document.createElement("p");
  vidgetBarInfoWeatherTemperature.classList.add("vidget-bar__info-wheather_content");
  vidgetBarInfoWeatherTemperature.textContent = "Температура: ";
  vidgetBarInfoWeather.appendChild(vidgetBarInfoWeatherTemperature);

  const vidgetBarInfoWeatherContentTemperature = document.createElement("span");
  vidgetBarInfoWeatherContentTemperature.classList.add("vidget-bar__info-wheather_content_temperature")
  vidgetBarInfoWeatherContentTemperature.textContent = "12";
  vidgetBarInfoWeatherTemperature.appendChild(vidgetBarInfoWeatherContentTemperature);

  const vidgetBarInfoWeatherAbout = document.createElement("p");
  vidgetBarInfoWeatherAbout.classList.add("vidget-bar__info-wheather_content");
  vidgetBarInfoWeatherAbout.textContent = "Погода в вашем регионе: ";
  vidgetBarInfoWeather.appendChild(vidgetBarInfoWeatherAbout);

  const vidgetBarInfoAboutWeather = document.createElement("span");
  vidgetBarInfoAboutWeather.classList.add("vidget-bar__info-wheather_about-weather")
  vidgetBarInfoAboutWeather.textContent = "Ясно";
  vidgetBarInfoWeatherAbout.appendChild(vidgetBarInfoAboutWeather);

  const vidgetBarSearch = document.createElement("div");
  vidgetBarSearch.classList.add("vidget-bar__search");
  vidgetBarContentWeather.appendChild(vidgetBarSearch);

  const vidgetBarSearchInput = document.createElement("input");
  vidgetBarSearchInput.classList.add("vidget-bar__search_input")
  vidgetBarSearchInput.setAttribute("placeholder", "Введите название города");
  vidgetBarSearch.appendChild(vidgetBarSearchInput);

  const vidgetBarSearchBtn = document.createElement("button");
  vidgetBarSearchBtn.classList.add("vidget-bar__search_btn");
  vidgetBarSearchBtn.textContent = "Поиск";
  vidgetBarSearch.appendChild(vidgetBarSearchBtn);

  /*Отрисовка блока Курса валют*/
  const vidgetBarConvertWrapper = document.createElement("div");
  vidgetBarConvertWrapper.classList.add("vibget-bar__convert-wrapper");
  vidgetBarMain.appendChild(vidgetBarConvertWrapper);

  const vidgetBarContentRate = document.createElement("div");
  vidgetBarContentRate.classList.add("vidget-bar__content-rate");
  vidgetBarConvertWrapper.appendChild(vidgetBarContentRate);

  const contentRateTitle = document.createElement("h2");
  contentRateTitle.classList.add("content-rate__title");
  vidgetBarContentRate.appendChild(contentRateTitle);

  const vidgetBarContentRateDol = document.createElement("div");
  vidgetBarContentRateDol.classList.add("vidget-bar__content-rate_dol");
  vidgetBarContentRate.appendChild(vidgetBarContentRateDol);

  const rateDolTitle = document.createElement("p");
  rateDolTitle.classList.add("rate-dol__title");
  vidgetBarContentRateDol.appendChild(rateDolTitle);

  const rateDolTitleContent = document.createElement("span");
  rateDolTitleContent.classList.add("rate-dol__title_content");
  rateDolTitle.appendChild(rateDolTitleContent);

  const vidgetBarContentRateEu = document.createElement("div");
  vidgetBarContentRateEu.classList.add("vidget-bar__content-rate_eu");
  vidgetBarContentRate.appendChild(vidgetBarContentRateEu);

  const rateEuTitle = document.createElement("p");
  rateEuTitle.classList.add("rate-eu__title");
  vidgetBarContentRateEu.appendChild(rateEuTitle);

  const rateEuTitleContent = document.createElement("span");
  rateEuTitleContent.classList.add("rate-eu__title_content");
  rateEuTitle.appendChild(rateEuTitleContent);

  const vidgetBarContentRateRub = document.createElement("div");
  vidgetBarContentRateRub.classList.add("vidget-bar__content-rate_rub");
  vidgetBarContentRate.appendChild(vidgetBarContentRateRub);

  const rateRubTitle = document.createElement("p");
  rateEuTitle.classList.add("rate-rub__title");
  vidgetBarContentRateRub.appendChild(rateRubTitle);

  const rateRubTitleContent = document.createElement("span");
  rateRubTitleContent.classList.add("rate-rub__title_content");
  rateRubTitle.appendChild(rateRubTitleContent);

  const vidgetBarConver = document.createElement("div");
  vidgetBarConver.classList.add("vidget-bar__conver");
  vidgetBarConvertWrapper.appendChild(vidgetBarConver);
  //создан второй див для конвертера 

/**/
  const vidgetBarList = document.createElement("ul");
  vidgetBarList.classList.add("vidget-bar__list");
  vidgetBarHeader.appendChild(vidgetBarList);

  const vidgetItems = ["Погода", "Курсы валют", "Сменить фон"];
  let counter = 1;
  vidgetItems.map((item) => {
    const vidgetBarItem = document.createElement("li");
    vidgetBarItem.classList.add("vidget-bar__list-item");
    vidgetBarItem.id = (`elem-${counter++}`);
    vidgetBarItem.textContent = item;
    vidgetBarList.append(vidgetBarItem);
  });

  const vidgetBtn = document.createElement("button");
  vidgetBtn.classList.add("vidget-btn");
  vidgetBtn.textContent = "VIDGET";
  vidgetBtn.addEventListener("click", renderWeatherApp);
  vidgetBtn.addEventListener("click", () => {
    vidgetBar.classList.toggle("vidget-bar_active");
    document.querySelector("#elem-1").addEventListener("click", () => {
      vidgetBarContentWeather.classList.toggle("vidget-bar__content-wheather_active");
      const searchBtn = document.querySelector(".vidget-bar__search_btn");
      searchBtn.addEventListener("click", renderWeatherApp);
    });
  });
  vidget.appendChild(vidgetBtn);
};

createVidget();
