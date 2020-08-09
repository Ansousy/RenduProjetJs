import PostCard from './components/post-card.js'
import LikesCounter from './components/likes-counter.js'
import PostFinder from './components/post-finder.js'

customElements.define('post-card', PostCard)
customElements.define('likes-counter', LikesCounter)
customElements.define('post-finder', PostFinder)



const main = document.querySelector('.grille')
const counter = document.querySelector('likes-counter')
const search = document.querySelector('post-finder')
const welcomePage = document.querySelector('.logo')

let posts = []
let likedPosts = []
let nblikedStorage

if (JSON.parse(localStorage.getItem('like'))) {
  nblikedStorage = JSON.parse(localStorage.getItem('like'));
} else {
  nblikedStorage = [];
}
const getNumberOfLiked = () => {
  likedPosts = nblikedStorage ;
}
getNumberOfLiked()

// À voir plus tard
const getPosts = () => {
  fetch('http://localhost/projet/api.php') // requête http
    .then((response) => {
      // réponse du serveur
      return response.json() // récupération du json dans la réponse et conversion en objet js
    })
    .then((json) => {
      // récupération de l’objet js

      posts = json

      // créer les publications dans la vue et les ajouter au DOM
      json.forEach((post) => {
        // Création d’un élément post-card
        const newElement = document.createElement('post-card')

        // Fournir l’objet post à post-card
        newElement.post = post

        // Fournir la propriété isLiked à post-card
        newElement.isLiked = likedPosts.some(
          (likedPost) => likedPost === post.id
        )

        // Écouter l’événement like et ajouter le liked
      likeHandler(newElement)
                    // Ajouter post-card au main
                    var nbliked = localStorage.getItem('like');

                    if(nbliked != null){
                      if(nblikedStorage.indexOf(post.id) !== 1){
                          main.appendChild(newElement)
                      }
                  }else{
                      main.appendChild(newElement)
                  }
      })
    })
}
getPosts()

/*************** recharger la page d'accueille *******************/
const reloadPage = () => {
  welcomePage.addEventListener('click', (event) => {
      getPosts();
  })
}
reloadPage();

/******************************************/

/*****************Mettre  à  jour le nombre de like *************************/
const UpdateCounter = () =>{
  let nbliked = likedPosts.length
  counter.setAttribute('nbliked',nbliked)
  //Set the value in a local storage object
}
UpdateCounter();

const likeHandler = (element)=>{
  element.addEventListener('like',(event) =>{
    const { postId, isLiked } = event.detail

    if (isLiked){
      likedPosts = [...likedPosts, postId]
      if (nblikedStorage.indexOf(postId) == -1) {
        nblikedStorage.push(postId);
        localStorage.setItem('like', JSON.stringify(nblikedStorage));
    }
    }else{
      const indexOf = nblikedStorage.indexOf(postId);
      nblikedStorage.splice(indexOf, 1);
      localStorage.setItem('like', JSON.stringify(nblikedStorage));

      likedPosts = likedPosts.filter((likedPost) => likedPost !== postId)
    }
    UpdateCounter()
  })
}
/***************  rechercher ***************************/
const getQuerySearch = (query) => {
  fetch('http://localhost/projet/api.php?tag=${query}') // requête http
    .then((response) => {
      // réponse du serveur
      return response.json() // récupération du json dans la réponse et conversion en objet js
    })
    .then((json) => {
      // récupération de l’objet js

      posts = json
   console.log("''''''''yeah ")
      // créer les publications dans la vue et les ajouter au DOM
      json.forEach((post) => {
        // Création d’un élément post-card
        const newElement = document.createElement('post-card')
        // Fournir l’objet post à post-card
        newElement.post = post
        // Fournir la propriété isLiked à post-card
        newElement.isLiked = likedPosts.some(
          (likedPost) => likedPost === post.id
        )
        // Écouter l’événement like et ajouter le liked
      likeHandler(newElement)
      main.appendChild(newElement)
                })
      })
}

getQuerySearch(search)

