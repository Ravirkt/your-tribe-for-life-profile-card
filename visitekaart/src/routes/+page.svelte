<script>
    import Vector from "$lib/assets/Vector.png";

    import CardGrid from "$lib/components/CardGrid.svelte";
</script>

<!-- <section class="columns-wrapper">
    <div class="card">r</div>


    
    
</section> -->

<section class="main-container">
    <article class="name-subtitle-container">
        <h1 class="name">Ravi Tjikhoeri</h1>
        <p class="sub-title">Developer</p>
    </article>

    <article class="grid-container">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item">
            <img src={Vector} />
        </div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item">Github</div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </article>
</section>

<style>
    :global(body) {
        background-color: black;
        margin: 0;
        padding: 0;
        color: white;
        font-family: "Allerta", sans-serif;
        overflow: visible;
        height: 100vh;

        /* @media (min-width: 800px) {
        overflow: hidden;
    } */
    }

    @font-face {
        font-family: "Allerta";
        src: url("/fonts/AllertaStencil-Regular.ttf");
    }

    .main-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        height: 100%;
        padding: 0.5rem;

        /* @media (min-width: 800px) {
        grid-template-columns: 1fr 0.8fr ; 
    } */
    }

    .name-subtitle-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .name {
        font-size: clamp(3rem, 10vw, 7rem);
    }

    .sub-title {
        font-size: clamp(1rem, 10vw, 1.5rem);
        margin-top: -3rem;
    }

    .grid-container {
        columns: 10rem;
        column-gap: 1rem;
    }

    .item {
        /* break-inside: avoid;    */
        margin-bottom: 1rem;
        background-color: #fca5a5;
        border-radius: 0.5rem;
        transition: filter 0.3s ease;
    }

    .item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    .grid-container .item:nth-child(1) {
        background-color: #5a2020;
        height: 14rem;
    }
    .grid-container .item:nth-child(2) {
        background-color: #ff8400;
        height: 16rem;
    }
    .grid-container .item:nth-child(3) {
        background-color: #ffc400;
        height: 21rem;

        :hover {
            filter: grayscale(1);
        }
    }

    .grid-container .item:nth-child(4) {
        background-color: #00ff5e;
        height: 14rem;
    }
    .grid-container .item:nth-child(5) {
        background-color: #001aff;
        height: 18rem;
    }
    .grid-container .item:nth-child(6) {
        background-color: #7b00ff;
        height: 14rem;
    }

    .item:nth-child(7) {
        background-color: #ff008c;
        height: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        filter: grayscale(1);
    }

    .item:nth-child(7):hover {
        filter: grayscale(0);
    }

    .grid-container .item:nth-child(8) {
        background-color: #008900;
        height: 23rem;
    }
    .grid-container .item:nth-child(9) {
        background-color: #7d45d0;
        height: 17rem;
    }
    .grid-container .item:nth-child(10) {
        background-color: #1a0081;
        height: 20rem;
    }
    .grid-container .item:nth-child(11) {
        background-color: #ff008c;
        height: 15rem;
    }
    .grid-container .item:nth-child(12) {
        background-color: #008900;
        height: 23rem;
    }
    .grid-container .item:nth-child(13) {
        background-color: #a36582;
        height: 17rem;
    }
    .grid-container .item:nth-child(14) {
        background-color: #1a0081;
        height: 20rem;
    }
    .grid-container .item:nth-child(15) {
        background-color: #ff0000;
        height: 12rem;
    }
    .grid-container .item:nth-child(16) {
        background-color: #ff8400;
        height: 16rem;
    }

    /* :global(body) {
        background-color: black;
        margin: 0;
        padding: 0;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        
    }

    .columns-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: aqua;
        width: 50vw;

    } */
</style>
