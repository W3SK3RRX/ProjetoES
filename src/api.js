const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '03b7b4b9camsh0d15049fb48d1d9p1be2a8jsnde0de16bb6f9',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=harry%20potter', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
            
         list.map((item)=>{
             console.log(item);
              const nome = item.l;
              const imagem = item.i.imageUrl;
              const filme = `<li><img src="${imagem}"> <h2>${nome}</h2></li>`;
              document.querySelector('.movies').innerHTML += filme;
          })
    })
	.catch(err => console.error(err));