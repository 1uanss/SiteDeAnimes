const cardAnime = document.querySelector(".card-anime")
const inputSearch = document.querySelector("#search")
const buttonSearch = document.querySelector(".button-search")



let listAnime = 'a'
const fetchAnime = async (search) => {

    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
   
    if (response.status === 200) {

        const data = await response.json()
        // console.log(data)
        cardAnime.innerHTML = ""

        data.data.forEach(anime => {
            const card = document.createElement("div")
            card.classList.add("card-anime")
            card.style.border = "1px solid var(--white)"
            card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
        <h2>${anime.title}</h2>
        <p>⭐${anime.score}</p>
        `
            cardAnime.appendChild(card)
        });
    }
}

buttonSearch.addEventListener("click", () => {
    listAnime = inputSearch.value
    fetchAnime(listAnime)
    
})

fetchAnime(listAnime)
