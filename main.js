let openBtn = document.getElementById('openBtn');
let addModal = document.getElementById('add-modal');
let backdrop = document.getElementById('backdrop');
let cancelBtn = document.getElementById('cancelBtn');
let inputData = document.querySelectorAll('.modal__content input');
let addBtn = document.getElementById('addBtn');
let movieList = document.getElementById('movie-list');
let entryText = document.getElementById('entry-text');


let movies = [];

let checkMovieMessage = ()=>{
    if(movieList.childElementCount > 0){
        entryText.classList.add('none');
    }else {
        entryText.classList.remove('none');
    }
}

let openbackdrop = ()=>{
    backdrop.classList.toggle('visible');
}

let openModelMovie = ()=>{
    addModal.classList.toggle('visible');
    openbackdrop();
}

let renderMovie = (title, img, rate)=>{
    movieList.innerHTML = `
<li class='movie-element'>
<div class='movie-element__image'>
<img src="${img}"> 
</div>
<div class='movie-element__info'>                                                                                                                                                                                                                                                                                                                               
    <h2> ${title} </h2>
    <p>  ${rate}/5 star </p>
</div>
<button class="btn btn--passive">Delete</button>
</li>
`
}
let addMovie = ()=>{
    let titleMovie = inputData[0].value;
    let imgMovie = inputData[1].value;
    let rateMovie = inputData[2].value;

    if(titleMovie.trim()=='' || imgMovie.trim =='' || rateMovie.trim()=='' || +rateMovie < 0 || +rateMovie > 5){
        alert('Please Enter Valid Data')
    }else{
        let movieObject = {
            title: titleMovie,
            imgUrl: imgMovie,
            rate: rateMovie
        }
    
        movies.push(movieObject);
        renderMovie(movieObject.title, movieObject.imgUrl, movieObject.rate);
        openModelMovie();
        checkMovieMessage();
    }
    
}

document.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    checkMovieMessage();
})

openBtn.addEventListener('click', openModelMovie);
cancelBtn.addEventListener('click', openModelMovie);
backdrop.addEventListener('click',openModelMovie);
addBtn.addEventListener('click',addMovie);