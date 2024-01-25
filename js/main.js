$(document).ready(function () {
  const burgerBtn = document.getElementById("burger");
  const headerTop = document.getElementById("header-top");

  burgerBtn.onclick = () => {
    burgerBtn.classList.toggle("is-active");
    headerTop.classList.toggle("header__top--popup");
    document.body.style.overflowY = "hidden";
  };

  initMap();

  async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapMarker,
    } = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
      // Передаём ссылку на HTMLElement контейнера
      document.getElementById("yt-map-api"),

      // Передаём параметры инициализации карты
      {
        location: {
          // Координаты центра карты
          center: [30.338928, 59.943543],

          // Уровень масштабирования
          zoom: 16,
        },
      }
    );

    // Инициализируйте маркер
    const icon = document.createElement("img");

    icon.className = "map__marker-icon";
    icon.src = "./img/svg/yt-map-point.svg";

    const marker = new YMapMarker(
      {
        coordinates: [30.338928, 59.943543],
      },
      icon
    );

    map
      .addChild(new YMapDefaultSchemeLayer())
      .addChild(new YMapDefaultFeaturesLayer())
      .addChild(marker);

    document.querySelector(
      ".ymaps3x0--layer.ymaps3x0--marker-layer"
    ).style.width = "100%";
  }

  const phoneMask = ["+7 (999) 999-99-99"];

  $("#phone-cta").inputmask({ mask: phoneMask });
  $("#phone-feedback").inputmask({ mask: phoneMask });

  $("#video-link").modalVideo();
});
