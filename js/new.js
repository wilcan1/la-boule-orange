function loadProducts() {
    //LES 4 PREMIERES ELEMENTS SONT OBLIGATOIRES EN AJAX
    //OBJET/CLASSE PROPRE A JS ET PERMET DE FAIRE LA REQUETE AJAX
    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    //JE PREPARE MA METHODE
    let method = "GET";
    //JE PREPARE MON URL DANS LEQUEL JE VAIS RECUPER LE CONTENU
    let url = `http://localhost/simplon/shop-localstorage/product.json`;
    //OUVRIR MA REQUETE (LA METHODE ET L'ENDROIT OU ALLER CHERCHER L'INFO ET UN TROISIEME FACULTATIF TRUE/FALSE)
    xhr.open(method, url);
    //POSSIBLE D'ECRIRE COMME CA
    // xhr.open("GET", `http://localhost/simplon/shop-localstorage/product.json`);
    xhr.onload = function (event) {
      //VERIFIE SI LA REQUETE EST TERMINEE
      //XMLHttpRequest.DONE EQUIVAUT A 4
      if (this.readyState === XMLHttpRequest.DONE) {
        // ET QUE SON STATUT EST BIEN A 200 (`ÒR`)
        // VERIFIER DANS LE NETWORK
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          console.log(response);
          let output = ``;
          response.forEach(function (post) {
            output += `            
                <div class="card shadow-lg mx-3 my-3" >
                    <div class="card-img-top">
                        <img style="width: 20rem;" src="${post.imgProduct}"/> 
                            <div class="card-body">
                                <h5 class="card-title nameProduct">${post.nameProduct}</h5>
                                <p class="text-right">${post.priceProduct} €</p>                                
                                <button class="select btn btn-primary btn-block ">
                                    <i class="fas fa-cart-plus "></i>
                                </button>
                            </div>
                    </div>
                </div>`;
          });
          document.getElementById('result').innerHTML = output;
        } else {
          console.log(this.status);
          alert(Erreur);
        }
      }
    };
    //AFFICHER LE RESULTAT (SORTE D'APPEL)
    xhr.send();
  }
  
  loadProducts()    

  var panier = document.querySelector('h1');
  var select = document.querySelector('.select');
  var button = document.getElementsByTagName('button');
  for (but of button) {
    but.addEventListener('click', (e) => {
      var add = Number(panier.getAttribute('data-count') || 0);
      panier.setAttribute('data-count', add + 1);
      panier.classList.add('zero');
    })
    
  }