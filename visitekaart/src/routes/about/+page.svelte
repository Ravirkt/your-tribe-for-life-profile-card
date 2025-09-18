<script>
    let { data } = $props();
    const member = data.member;

    import Group from '$lib/assets/Group.svg'
    import mastercard_logo from '$lib/assets/mastercard_logo.svg'
    import visabg from '$lib/assets/visabg.webp';

</script>

<section class="main-container" style="background-image: url({visabg})">

    <div class="brand-and-print-container">
        <img class="print" src="{Group}" alt="chip">
        <img class="brand" src="{mastercard_logo}" alt="mastercard">
    </div>

    <div class="card-code">
        <span>1234</span>
        <span>3556</span>
        <span>6323</span>
        <span>2354</span>
    </div>

    <div class="card-info-container">
        <div class="card-holder-container">
            <p class="card-holder">Card Holder</p>
            <h1 class="name">{member.name}</h1>
        </div>

        <div class="expire-info">
            <p class="expire-text">Expires</p>
            <p class="expire-date">09/25</p>
        </div>
    </div>

</section>

<style>

:global(body) {
  height: 100vh;           
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;  
  align-items: center;      
  background-color: #000000;
}

@font-face {
  font-family: 'creditcard';
  src: url('/fonts/CREDC___.ttf');
}

@font-face {
  font-family: 'creditcardtext';
  src: url('/fonts/Montserrat-VariableFont_wght.ttf');
}

.card-code {
    font-size: clamp(0.7rem, 3vw, 1rem);
}

.main-container {
width: 25rem;
height: 15rem;
border: 1px solid rgb(84, 84, 84);
border-radius: 15px;
color: white;

display: flex;
flex-direction: column;
  background-size: cover;      
  background-position: center; 
  background-repeat: no-repeat;
}

.brand-and-print-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

}

.card-code {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-family: 'creditcard', sans-serif  ;
}

.card-info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    padding-top: 3rem;
}

.card-holder-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card-holder, .expire-text {
    margin: 0;
    font-size: clamp(0.5rem, 3vw, 0.7rem);
    font-family: 'creditcardtext', sans-serif;
}

.name {
    font-size: clamp(0.5rem, 3vw, 0.8rem);
    margin: 0;
    font-family: 'creditcardtext', sans-serif;
}

.expire-date {
    font-family: 'creditcard', sans-serif;
    font-size: clamp(0.5rem, 3vw, 0.8rem);
}

.expire-info { 
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.expire-text, .expire-date {
    margin: 0;
}

