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
  vidgetBarMain.appendChild(vidgetBarContentWeather);

  const contentWeatherTitle = document.createElement("h2");
  contentWeatherTitle.classList.add("content-weather_title");
  contentWeatherTitle.textContent = "Погода в вашей стране";
  vidgetBarContentWeather.appendChild(contentWeatherTitle);

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

  const contentRateTitle = document.createElement("h2");
  contentRateTitle.classList.add("content-rate__title");
  contentRateTitle.textContent = "Текущие курсы";
  vidgetBarConvertWrapper.appendChild(contentRateTitle);

  const vidgetBarContentRate = document.createElement("div");
  vidgetBarContentRate.classList.add("vidget-bar__content-rate");
  vidgetBarConvertWrapper.appendChild(vidgetBarContentRate);

  const vidgetBarContentRateDol = document.createElement("div");
  vidgetBarContentRateDol.classList.add("vidget-bar__content-rate_currency");
  vidgetBarContentRate.appendChild(vidgetBarContentRateDol);

  const rateDolTitle = document.createElement("p");
  rateDolTitle.classList.add("rate__title");
  rateDolTitle.textContent = "1$";
  vidgetBarContentRateDol.appendChild(rateDolTitle);

  const rateDolTitleContent = document.createElement("p");
  rateDolTitleContent.classList.add("rate__title_content");
  rateDolTitleContent.textContent = 5 + " BYN"
  rateDolTitle.appendChild(rateDolTitleContent);

  const vidgetBarContentRateEu = document.createElement("div");
  vidgetBarContentRateEu.classList.add("vidget-bar__content-rate_currency");
  vidgetBarContentRate.appendChild(vidgetBarContentRateEu);

  const rateEuTitle = document.createElement("p");
  rateEuTitle.classList.add("rate__title");
  rateEuTitle.textContent = "1€";
  vidgetBarContentRateEu.appendChild(rateEuTitle);

  const rateEuTitleContent = document.createElement("p");
  rateEuTitleContent.classList.add("rate__title_content");
  rateEuTitleContent.textContent = "5" + " BYN";
  rateEuTitle.appendChild(rateEuTitleContent);

  const vidgetBarContentRateRub = document.createElement("div");
  vidgetBarContentRateRub.classList.add("vidget-bar__content-rate_currency");
  vidgetBarContentRate.appendChild(vidgetBarContentRateRub);

  const rateRubTitle = document.createElement("p");
  rateEuTitle.classList.add("rate-__title");
  rateRubTitle.textContent = "100₽"
  vidgetBarContentRateRub.appendChild(rateRubTitle);

  const rateRubTitleContent = document.createElement("p");
  rateRubTitleContent.classList.add("rate__title_content");
  rateRubTitleContent.textContent = "5" + " BYN"
  rateRubTitle.appendChild(rateRubTitleContent);

  //создан второй див для конвертера 
  const vidgetBarConver = document.createElement("div");
  vidgetBarConver.classList.add("vidget-bar__conver");
  vidgetBarConvertWrapper.appendChild(vidgetBarConver);

  const converTitle = document.createElement("h2");
  converTitle.classList.add("conver-title");
  converTitle.textContent = "Конвертер валют";
  vidgetBarConver.appendChild(converTitle);

  const converAddSum = document.createElement("div");
  converAddSum.classList.add("conver-add__sum");
  vidgetBarConver.appendChild(converAddSum);

  const inputAddid = document.createElement("input");
  inputAddid.classList.add("input-addid");
  inputAddid.setAttribute("placeholder", "Введите сумму");
  inputAddid.setAttribute("type", "number");
  converAddSum.appendChild(inputAddid);


  const selectAddid = document.createElement("select");
  selectAddid.classList.add("select_addid");
  converAddSum.appendChild(selectAddid);

  const optionSelect1 = document.createElement("option");
  optionSelect1.classList.add("option_select");
  optionSelect1.textContent = "Выберите валюту"
  selectAddid.appendChild(optionSelect1);

  const optionSelect2 = document.createElement("option");
  optionSelect2.classList.add("option_select");
  optionSelect2.textContent = "USD"
  optionSelect2.setAttribute("value", "431")
  selectAddid.appendChild(optionSelect2);

  const optionSelect3 = document.createElement("option");
  optionSelect3.classList.add("option_select");
  optionSelect3.textContent = "EU"
  optionSelect3.setAttribute("value", "451")
  selectAddid.appendChild(optionSelect3);

  const optionSelect4 = document.createElement("option");
  optionSelect4.classList.add("option_select");
  optionSelect4.textContent = "RUB"
  optionSelect4.setAttribute("value", "456")
  selectAddid.appendChild(optionSelect4);

  const optionSelect6 = document.createElement("option");
  optionSelect6.classList.add("option_select");
  optionSelect6.textContent = "BYN"
  optionSelect6.setAttribute("value", "1")
  selectAddid.appendChild(optionSelect6);
  /* */
  const converValue = document.createElement("div");
  converValue.classList.add("conver_value");
  vidgetBarConver.appendChild(converValue);

  const selectAddid2 = document.createElement("select");
  selectAddid2.classList.add("select_addid__value");
  converValue.appendChild(selectAddid2);

  const optionSelectValue1 = document.createElement("option");
  optionSelectValue1.classList.add("option_select");
  optionSelectValue1.textContent = "Выберите валюту"
  selectAddid2.appendChild(optionSelectValue1);

  const optionSelectValue2 = document.createElement("option");
  optionSelectValue2.classList.add("option_select");
  optionSelectValue2.textContent = "USD"
  optionSelectValue2.setAttribute("value", "431")
  selectAddid2.appendChild(optionSelectValue2);

  const optionSelectValue3 = document.createElement("option");
  optionSelectValue3.classList.add("option_select");
  optionSelectValue3.textContent = "EU"
  optionSelectValue3.setAttribute("value", "451")
  selectAddid2.appendChild(optionSelectValue3);

  const optionSelectValue4 = document.createElement("option");
  optionSelectValue4.classList.add("option_select");
  optionSelectValue4.textContent = "RUB"
  optionSelectValue4.setAttribute("value", "465")
  selectAddid2.appendChild(optionSelectValue4);

  const optionSelectValue5 = document.createElement("option");
  optionSelectValue5.classList.add("option_select");
  optionSelectValue5.textContent = "BYN"
  optionSelectValue5.setAttribute("value", "1")
  selectAddid2.appendChild(optionSelectValue5);

  const sumValue = document.createElement("span");
  sumValue.classList.add("sum_value");
  sumValue.textContent = "";
  converValue.appendChild(sumValue);

  const convertCalculateBtn = document.createElement("div");
  convertCalculateBtn.classList.add("convert-calculate__btn");
  vidgetBarConver.appendChild(convertCalculateBtn);

  const calculateBtn = document.createElement("button");
  calculateBtn.classList.add("calculate_btn");
  calculateBtn.textContent = "Рассчитать";
  convertCalculateBtn.appendChild(calculateBtn);

  //див для смены фона 

  const removeBcg = document.createElement("div");
  removeBcg.classList.add("remove-bcg");
  vidgetBarMain.appendChild(removeBcg);

  const removeBcgFirst1 = document.createElement("div");
  removeBcgFirst1.classList.add("remove-bcg__wrapper1");
  removeBcg.appendChild(removeBcgFirst1);

  const removeBcgFirstColor1 = document.createElement("div");
  removeBcgFirstColor1.classList.add("remove-bcg__remove-color1");
  removeBcgFirst1.appendChild(removeBcgFirstColor1);

  const removeBcgFirstColor2 = document.createElement("div");
  removeBcgFirstColor2.classList.add("remove-bcg__remove-color2");
  removeBcgFirst1.appendChild(removeBcgFirstColor2);

  const removeBcgFirst2 = document.createElement("div");
  removeBcgFirst2.classList.add("remove-bcg__wrapper2");
  removeBcg.appendChild(removeBcgFirst2);

  const removeBcgFirstColor3 = document.createElement("div");
  removeBcgFirstColor3.classList.add("remove-bcg__remove-color3");
  removeBcgFirst2.appendChild(removeBcgFirstColor3);

  const removeBcgFirstColor4 = document.createElement("div");
  removeBcgFirstColor4.classList.add("remove-bcg__remove-color4");
  removeBcgFirst2.appendChild(removeBcgFirstColor4);


  /* */
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
    vidgetBarContentWeather.classList.remove("vidget-bar__content-wheather_active");
    vidgetBarConvertWrapper.classList.remove("vibget-bar__convert-wrapper__active");

    document.querySelector("#elem-1").addEventListener("click", () => {
      vidgetBarContentWeather.classList.toggle("vidget-bar__content-wheather_active");
      vidgetBarConvertWrapper.classList.remove("vibget-bar__convert-wrapper__active");
      removeBcg.classList.remove("remove-bcg_active");
      const searchBtn = document.querySelector(".vidget-bar__search_btn");
      searchBtn.addEventListener("click", renderWeatherApp);
    });

    document.querySelector("#elem-2").addEventListener("click", () => {
      vidgetBarConvertWrapper.classList.toggle("vibget-bar__convert-wrapper__active");
      vidgetBarContentWeather.classList.remove("vidget-bar__content-wheather_active");
      removeBcg.classList.remove("remove-bcg_active");
    })

    document.querySelector("#elem-3").addEventListener("click", () => {
      removeBcg.classList.toggle("remove-bcg_active");
      vidgetBarConvertWrapper.classList.remove("vibget-bar__convert-wrapper__active");
      vidgetBarContentWeather.classList.remove("vidget-bar__content-wheather_active");
    })
  });
  vidget.appendChild(vidgetBtn);
};

createVidget();
