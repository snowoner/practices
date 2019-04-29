Vue.component("pokemons", {
  props: ["pokemon"],
  template: `
    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <!-- front content -->
          <div>
            <p>{{pokemon.name}}</p>
          </div> 
        </div>
        <div class="back">
              <!-- back content -->
          <div class="row text-center aling-items-center justify-content-center">
            <div class="col-12">{{pokemon.name}}</div>
            <div class="col-12 descrip mb-3">{{pokemon.url}}</div>
            
          </div>
        </div>
      </div>
    </div>`
});