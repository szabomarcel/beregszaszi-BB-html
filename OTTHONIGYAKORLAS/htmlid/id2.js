let state = {
    teendok: [],
    isPending: false,
  };
  
    // 1. Kattintás eseményre köss be funkcionalitást
    document.getElementById("fetch-btn").addEventListener("click", () => {
    // 2. A esemény bekövetkezésekor állítsd a state isPending értékét true-ra
        state.isPending = true;
        render();
    // 3. Küldj AJAX kérést a beépített "fetch" függvény segítségével
    // 4. A válaszként kapott adatokat szűrd meg a "filter" függvénnyel
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((todos) => todos.filter((todo) => todo.completed))
        .then((tudos) => {
        // 5. A megszűrt adatokat írd be a state teendok kulcsa alá
        state.teendok = tudos;
        // 6. Ezután állítsd vissza az isPending-et false-ra
        state.isPending = false;
        render();
        })
.catch(console.log);
  })

  /* 7. Készíts egy renderelő függvényt, ami
    - Ha az isPending true, akkor egy "Betöltés folyamatban" feliratot ír ki
    - Ha az isPending false, akkor pedig kirajzolja az összes teendőt, 
      ami a state-ben van
  */
 function render (){
    if (state.isPending){
        document.getElementById("todo-list").innerHTML = "Betöltás folyamatban..."
        return;
    }
    document.getElementById("tudo-list").innerHTML = state.teendok.map((teendok, i) => `<span class = "badge bg-primary me-1 mb-1">${i + 1}. ${teendok.title}</span>`).join("")
 }
  
  // 8. Hívd meg a renderelő függvényt a 2. és az 4. pont után is
  