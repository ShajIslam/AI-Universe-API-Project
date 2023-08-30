const loadData= async ()=>{
    const url ='https://openapi.programming-hero.com/api/ai/tools';

    try{
        const response = await fetch(url);
        const data = await response.json();
        const cards = data.data.tools;
        displayCards(cards)
    }catch(err){
        console.log('Error:', err);
    }
       
}

const displayCards = (cards)=>{
    const cardContainer = document.getElementById('card-container');

    cards.forEach(card=>{
        console.log(card);
        const div = document.createElement('div');
        div.classList  = `card w-96 bg-base-100 shadow-xl my-5`;
        div.innerHTML = `
        <figure class="px-10 pt-10">
                  <img src="${card.image || 'waiting to load image'}" alt="Loading" class="rounded-xl" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Features</h2>
                  <p class="text-sm my-5 text-[#585858]">${card.description || 'Description is no more'}</p>
                  
                  <hr>
                  <h2 class="card-title my-5">${card.name || 'name is not available'}</h2>
                 
                  <div class="card-actions flex justify-center items-center gap-32">
                    <input type="date" name="" id="">
                    <button onclick ="showDetails('${card.id}');" class="btn rounded-full"><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                </div>
        `
        cardContainer.appendChild(div);
    })
}

const showDetails = async (id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await response.json();
    console.log(data.data);
    modalShow();

}


const modalShow= ()=>{
    show_modal.showModal();

}

loadData();