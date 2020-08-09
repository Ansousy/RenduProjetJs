export default class PostFinder extends HTMLElement {
    constructor() {
      super()
      this.update = null
      this._root = this.attachShadow({ mode: 'open' })
    }

        connectedCallback(){
            this._root.innerHTML = `
            <input type="text" name="" id="">
            <style>
            input[type=text] {
                border-radius: 4px;
                width: 100%;

              }
              
             
            
            </style>
            `
            this.inputquery = this._root.querySelector("input")
            this.inputquery.addEventListener("input",(event) => {
                console.log(this.inputquery.value)
                clearTimeout(this.update)

                this.update = setTimeout(()=>{
                    const updateEvent = new CustomEvent('queryupdate',{
                        detail:{
                            querystring: this.inputquery.value,
                        }
                    })
                    this.dispatchEvent(updateEvent)
                    this.inputquery.value = ''
                }, 750)
            })
        }

}