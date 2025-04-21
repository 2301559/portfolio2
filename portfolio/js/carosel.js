document.addEventListener("DOMContentLoaded", function () {
    fetch("./json/gallery.json")
      .then((response) => response.json())
      .then((images) => {
        const indicators = document.getElementById("carouselIndicators");
        const inner = document.getElementById("carouselInner");
  
        images.forEach((img, i) => {
          const active = i === 0 ? "active" : "";
  
          indicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${active}" aria-current="${i === 0}" aria-label="Slide ${i + 1}"></button>`;
  
          inner.innerHTML += `
            <div class="carousel-item ${active}">
              <img src="${img.image}" class="d-block w-100" alt="${img.caption}">
              <div class="carousel-caption d-none d-md-block">
                <h5>${img.caption}</h5>
              </div>
            </div>`;
        });
      });
  });
  