export default class LikesCounter extends HTMLElement {
    constructor() {
      super()
      this._root = this.attachShadow({ mode: 'open' })
    }
     
    static get observedAttributes(){
        return ['nbliked']

    }
       attributeChangedCallback(attribute, oldValue, newValue) {
       // this[attribute] = newValue
        this._root.innerHTML = ` 
        <span>  ( <img src="img/like-svg-white.svg" width="20px" > ${newValue} ) </span> 
        <style>
        span{
            color: white;
          }
          span img{
              vertical-align:middle;
          }
        </style>`
        console.log(newValue)
       }
      
    }

