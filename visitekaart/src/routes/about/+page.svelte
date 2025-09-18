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
