<script lang="ts">
  import { site } from '$lib/config/site'
  import { config as footerConfig } from '$lib/config/footer'
  let className = undefined
  export { className as class }
</script>

<footer id="footer" class="{className} footer footer-center bg-base-300 text-base-content rounded-box p-8 <md:rounded-none">
  <div class="prose">
    <p>
      {#each Object.entries(footerConfig.nav) as [href, name], i}
        <a {href} rel="noopener external" target="_blank">{name}</a>
        {#if i < Object.keys(footerConfig.nav).length - 1}
          <span class="mr-1">·</span>
        {/if}
      {/each}
    </p>
    <p>
      Copyright © {site.since && site.since !== new Date().toJSON().substring(0, 4)
        ? `${site.since} - ${new Date().toJSON().substring(0, 4)}`
        : new Date().toJSON().substring(0, 4)}
      {site.author.name}
      <br />
      Powered by community
    </p>
    {#if footerConfig.html}
      {@html `${footerConfig.html}`}
    {/if}
  </div>
</footer>
