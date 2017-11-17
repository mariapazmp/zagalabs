function requestFunction (method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });

}


requestFunction('GET', '/api/nav.json')
.then(function (response) {
 navFunction(response);
})

.catch(function (err) {
  console.error('Augh, there was an error!', err.statusText);
});

const classDictionary = {
  mobile  : {
      item : "submenu-lblxs",
      link : "link-subxs",
      submenu : "submenuxs"
  },
  desktop : {
      item : "",
      link : "menu-a",
      submenu : "submenu"
  }
}

  function navFunction(response) {
      let obj = JSON.parse(response); 
      let out = buildMenu(obj.items, "desktop");
      let outxs = buildMenu(obj.items, "mobile");

      document.getElementById("nav").innerHTML = out;
      document.getElementById("navxs").innerHTML = outxs;
  }

  function buildMenu(items, type){
     let out = ""; 
     let classes = classDictionary[type]
     items.forEach( element => {
    
        let subitems = element.items; 

          if ( subitems.length > 0 ) { // If an item of the menu has submenu options. Ergo, if the items.items in the json isn't empty 
              out += `<li class="${classes.item}">
                      <a class="${classes.link}" tabindex="1" href="${element.url}">${element.label}</a>
                      <ul class="dd ${classes.submenu}">`;

              subitems.forEach ( subelement => {
                  out += `<li><a href="${subelement.url}">${subelement.label}</a></li>`;

              });
              
              out += `</ul></li>`;
          }
          else {
            out += `<li>
                    <a href="${element.url}">${element.label}</a>
                    </li>`;
          }

      });
     return out;
  }