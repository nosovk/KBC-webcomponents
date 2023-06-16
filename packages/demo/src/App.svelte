<script lang="ts">
  import '../../lib';
  let value = 333;
  let element;
</script>

<main>
  <h1>KBC webcomponents!</h1>
  <p></p>

  <p class="container">
    <kbc-datepicker bind:this={element} id="ttt" isValid="false">
    </kbc-datepicker>
  </p>
  <input bind:value={value} />
  <button on:click={value=element.value}>get value</button>
  {value}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    line-height: 1.1;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .container {
      display: inline-block;
      max-width: 320px;
    }
  }
</style>
