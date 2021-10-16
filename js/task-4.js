const app = document.querySelector("#app"),
      form = document.querySelector("#form"),
      urlInput = document.querySelector("#input"),
      screen = document.querySelector("#screen"),
      thumbnail = document.querySelector('#dynamicThumbnail'),
      title = document.querySelector('#dynamicTitle'),
      url = document.querySelector('#dynamicUrl'),
      interface = document.querySelector('#interface'),
      reset = document.querySelector('#reset');




      
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (urlInput.value.length > 3) {
        const data = { key: "1bfd21498cd9615b5eeb86e0d3b09e6d", q: '' };
        data.q = urlInput.value;

        app.classList.add('is-active');
        screen.classList.add('is-loading');

        thumbnail.classList.remove('display__screen__img--default');
        thumbnail.classList.add('display__screen__img--loading');

        fetch("https://api.linkpreview.net", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((response) => {

                setTimeout(() => {
                    screen.classList.remove('is-loading');

                    thumbnail.classList.remove('display__screen__img--loading');

                    thumbnail.classList.add('display__screen__img--article');

                    thumbnail.style.backgroundImage = `url(${response.image})`;
                    title.innerHTML = response.title;
                    url.innerHTML = response.url;

                    interface.classList.remove('is-hidden');

                }, 1000);

                reset.addEventListener('click', () => {
                    app.classList.remove('is-active');
                    title.innerHTML = 'Your headline displayed here';
                    thumbnail.removeAttribute('style');
                    thumbnail.classList.remove('display__screen__img--article');
                    thumbnail.classList.add('display__screen__img--default');
                });

            })}
});