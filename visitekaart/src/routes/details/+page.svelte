





<section class="main-card-container">

    <div class="name">
        <h1 class="name">john doe</h1>
        <p class="funciton">Developer</p>
    </div>

    <div class="item-1">Github</div>

    <div class="item-2">Mugshot</div>

    <div class="item-3"></div>

    <div class="item-4"></div>

    <div class="item-5"></div>
        <div class="item-6"></div>


    

</section>






<style>


    :global(body) {
        background-color: black;
        margin: 0;
        padding: 0;
        color: white;
        font-family: 'Allerta', sans-serif;
        height: 100%;

    }

.main-card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: repeat(6,1fr); 
  gap: 10px;
  height: 100vh;
  padding: 0.5rem;
}

.main-card-container > div {
  /* background: #444; */
  border: 1px solid white;
}

.name {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
}

.item-1 { 
    grid-column: 4 / 5; 
    grid-row: span 2; 
    background: green; 
}
.item-2 { 
    grid-column: span 3; 
    grid-row: span 2; 
    background: orange; 
}
.item-3 { 
    grid-column: span 1; 
    grid-row: span 2; 
    background: purple; 
}

.item-4 { 
    grid-column: span 3; 
    grid-row: span 2; 
    background: rgb(207, 141, 207); 
}

.item-5 { 
    grid-column: span 4; 
    grid-row: span 1; 
    background: rgb(30, 7, 236); 
}

.item-6 { 
    grid-column: span 4; 
    grid-row: span 1; 
    background: rgb(150, 141, 236); 
}





</style>