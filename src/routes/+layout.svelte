<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let lastUpdated = "";

    onMount(async () => {
        try {
            const response = await fetch(`${base}/lastUpdated.json`);
            if (response.ok) {
                const data = await response.json();
                lastUpdated = data.lastUpdated;
                console.log("Last Updated:", lastUpdated);
            } else {
                console.error(
                    "Failed to fetch lastUpdated.json:",
                    response.status,
                );
            }
        } catch (error) {
            console.error("Error fetching lastUpdated.json:", error);
        }
    });
</script>

<article>
    {#if lastUpdated}
        <a href="/">
            <div class="meta">
                {#if $page.url.pathname !== "/"}
                    <p
                        style="font-weight: bold; font-size: 1em; margin-bottom: 1rem;"
                    >
                        ←
                    </p>
                {:else}
                    <div class="time" style="margin-bottom: 1rem;">
                        <p>Last Updated:</p>
                        <p>{lastUpdated}</p>
                    </div>
                {/if}
                <div class="title">
                    <img src="/logo.png" alt="" />
                </div>
            </div>
        </a>
        <section>
            <slot />
        </section>
    {/if}
</article>

<style>
    :root {
        --highlite: gainsboro;
        --color-1: #e9ff00;
    }

    :global(body) {
        font-family: Helvetica, Arial, sans-serif;
        font-size: 23px;
        line-height: 28px;
        height: 100vh;
        padding: 0;
        margin: 0;
        background-color: white;
        text-rendering: geometricPrecision;
    
        hyphens: auto;
    }

    article {
        display: flex;
        gap: 1ch;
        min-height: 100%;
    }

    article a {
        flex: 1;
        max-width: 200px;
        padding: 5px;
        background-color: rgb(246, 246, 246);
    }

    .meta {
        display: flex;
        font-size: 14px;
        line-height: 14px;
        align-items: flex-end;
        flex-wrap: wrap;
        align-content: space-between;
        position: sticky;
        top: 0;
        padding: 0 5px;
        height: 100%;
    }

    @media only screen and (max-width: 600px) {
        .meta {
            flex-direction: row-reverse;
            text-align: right;
        }
    }

    .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .title img {
        width: 100%;
        max-width: 450px;
        /* filter: grayscale(100%); */
    }

    .time p {
        padding: 0;
        margin-bottom: 0;
    }

    .title > a {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        font-weight: 400;
        color: black;
    }

    .title span {
        display: inline-block;
    }

    section {
        flex: 4;
        max-width: 840px;
        padding: 10px;
        overflow: visible;
        max-height: none;
    }

    :global(h1),
    :global(p) {
        margin: 0;
        margin-bottom: 1ex;
        font-weight: normal;
        color: black;
    }

    :global(h1) {
        font-size: 1.2em;
        margin-bottom: 0.5ex;
    }

    :global(a) {
        text-decoration: none;
        color: inherit;
        position: relative;
        cursor: pointer;
    }

    :global(::selection) {
        background-color: var(--color-1);
        color: black;
    }

    @media (max-width: 600px) {
        article {
            flex-direction: column;
        }

        article a {
            max-width: 100%;
        }

        .meta {
            margin-bottom: 1rem;
        }

        section {
            max-width: 100%;
            overflow: visible;
            max-height: none;
        }
    }
</style>
