//fetch data from upi

    fetch(`https://www.anapioficeandfire.com/api/books/?`).then((element1)=>{
        console.log(element1) //data get from api
        return element1.json();
    }).then((objectData)=>{ // convert the data element1 to objectData
        console.log(objectData);

       //using map method

        let Data ="";  
    objectData.map((value)=>{
        Data +=` <div class="card">
        <h1 class="title"> ${value.name}</h1>
        <div class="cardcontainer">
        <div class="details">
        <p class="author">author: ${value.authors}</p>
        <p class="isbn">isbn: ${value.isbn}</p>
        <p class="publisher">publisher: ${value.publisher}</p>
        <p class="pages">number of pages: ${value.numberOfPages}</p>
        <p class="reldate">Release date: ${value.released}</p>
        <a href="${value.characters}" class="btn btn-light">characters
        </a> 
        </div>
        </div>
    </div>`
    });
    document.getElementById("cards").innerHTML =Data; 
   
    //error handling
    }).catch((error)=>{
        console.log(error)
    })

