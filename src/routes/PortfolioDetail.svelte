<script>
    const { data } = $props();
    
</script>

<div class="container-fluid">
    <div class="row">
        <h1>{data.title}</h1>
        <div class="col-lg-6">
            <img src={data.image !== '' ? data.image : '/img/portfolio/onprogress.png'} alt={data.title} class="img-fluid"/>
            <p>{data.description}</p>
        </div>
        <div class="col-lg-6">
            <h2>Technologies</h2>
            <p>Aplikasi ini dibuat dengan menggunakan teknologi sebagai berikut</p>
            <a class="btn btn-primary btn-sm {data.link === "" ? "disabled btn-danger" : ""}" href={data.link !== "" ? data.link : null} target="_blank">{data.link !== "" ? "View Live Aplication" : "Application is private"}</a>
            <ul class="list-group">
                {#each data.techs as tech }
                    <li class="list-group-item">
                        <img class="img-fluid" src="{tech.img}" alt="">
                        <span class="ms-2">{tech.name}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    h1, p, span, a, ul, li {
        color: var(--default-color);
    }

    .list-group, .list-group-item {
        background-color: var(--background-color);
    }

    .list-group .list-group-item img {
        width: 30px;
    }

    a {
        position: absolute;
        top: 4rem;
        right: 1rem;
        text-decoration: none;
        color: var(--contrast-color);
        text-decoration: none;
        font-weight: bold;
    }
</style>