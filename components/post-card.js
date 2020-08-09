export default class PostCard extends HTMLElement {
  constructor() {
    super()
    this._root = this.attachShadow({ mode: 'open' })
    // this.likeButton = null
  }

  connectedCallback() {
    /* const title = this.post.title
    const img = this.post.img
    const tags = this.post.tags */
    const { title, img, tags } = this.post

    /* faire un tableau à partir des tags 'statue,rue,paris' qui devient ['statue', 'rue', 'paris'] */
    const arrayTags = tags.split(',')

    // FORMATER LES TAGS
    // Initaliser la chaîne la caractère
    let contentTags = ''

    // Remplir la chaîne de caractères
    arrayTags.forEach((tag) => {
      // 1. contentTags -> ''
      // 2. contentTags -> '<a href="#">#statue</a>'
      contentTags = `${contentTags} <a href="#">#${tag}</a>`
      // 1. contentTags -> '<a href="#">#statue</a>'
      // 2. contentTags -> '<a href="#">#statue</a> <a href="#">#rue</a>'
    })

    this._root.innerHTML = `
      <style>
        @import "./components/post-card.css"
      </style>
    
          <img src="./img/${img}" class="border-bottom">
          <button class="like gray marg"><img src="./img/dislike.svg" alt="lol"><span>J’aime</span></button>
          <h1>${title}</h1>
          <p>${contentTags}</p>
                
      `

    // const likeButton = this._root.querySelector('.like')
    this.likeButton = this._root.querySelector('.like')

    this.renderLike()

    this.likeButton.addEventListener('click', (event) => {
      // Modifier la valeur de this.isLiked
      this.isLiked = !this.isLiked

      this.renderLike()
      // Envoyer un événement personnalisé liké ou pas liké
      this.like()
    })
  }

  renderLike() {
    // const likeButton = this._root.querySelector('.like')
    const imgLike = this._root.querySelector('.like > img')
    const spanLike = this._root.querySelector('.like > span')

    const like = './img/like.svg'
    const dislike = './img/dislike.svg'

    if (this.isLiked) {
      spanLike.innerText = 'Je n’aime plus'
      imgLike.src = dislike
      this.likeButton.classList.add('gray')
      this.likeButton.classList.remove('red')
    } else {
      spanLike.innerText = 'Je n’aime plus'
      imgLike.src = like
      this.likeButton.classList.remove('gray')
      this.likeButton.classList.add('red')
    }
  }
  like() {
    const likeEvent = new CustomEvent('like', {
      detail: {
        postId: this.post.id,
        isLiked: this.isLiked,
      },
    })
    this.dispatchEvent(likeEvent)
  }
}
