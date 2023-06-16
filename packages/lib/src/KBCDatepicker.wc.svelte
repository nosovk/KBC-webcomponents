<svelte:options customElement={{
    tag: "kbc-datepicker",
    props: {
      value: { reflect: true, type: "String", attribute: "value" },
      isValid: { reflect: true, type: "Boolean", attribute: "isValid" },
    }
  }}/>

<script lang="ts">
    import {onMount} from "svelte";

    let ref: HTMLDivElement;
    import {TelInput, normalizedCountries} from "svelte-tel-input";

    // Any Country Code Alpha-2 (ISO 3166)
    let selectedCountry = 'GB';

    // You must use E164 number format. It's guarantee the parsing and storing consistency. The library will always update (via binding) to E164 format.
    export let value = '+442071838750';

    // Optional - Extended information about the parsed phone number
    let detailedValue = null;

    // Field validity
    let isValid = true;

    const options = { invalidateOnCountryChange: true}


    onMount(()=>{
        console.log("eee",ref.getRootNode().host)
    })
    const updateParent = function (val) {
        if (ref?.getRootNode()?.host) {
            console.log("host", ref.getRootNode().host, isValid)
            ref.getRootNode().host.value = value;
            ref.getRootNode().host.isValid = isValid;
        }
    }
    $: updateParent(value);
</script>

<div class="wrapper" bind:this={ref}>
    <select
            class="country-select {!isValid && 'invalid'}"
            aria-label="Default select example"
            name="Country"
            bind:value={selectedCountry}
    >
        <option value={null} hidden={selectedCountry !== null}>Please select</option>
        {#each normalizedCountries as country (country.id)}
            <option class="flag flag-{selectedCountry.toLowerCase()}"
                    value={country.iso2}
                    selected={country.iso2 === selectedCountry}
                    aria-selected={country.iso2 === selectedCountry}
            >
                {country.iso2} (+{country.dialCode})
            </option>
        {/each}
    </select>
    <TelInput {options} bind:valid={isValid} bind:country={selectedCountry} bind:value bind:detailedValue  class="basic-tel-input {!isValid && 'invalid'}" />
</div>

<!-- Just to show the nicely parsed phone number to you-->
{#if value && isValid && detailedValue?.nationalNumber}
    <h2>
        <span>Tel: <a href="tel:{value}">{detailedValue.nationalNumber}</a></span>
    </h2>
{/if}

<style>
    .wrapper :global(.basic-tel-input) {
        height: 32px;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 6px;
        border: 1px solid;
        outline: none;
    }

    .wrapper :global(.country-select) {
        height: 36px;
        padding-left: 12px;
        padding-right: 12px;
        border-radius: 6px;
        border: 1px solid;
        outline: none;
    }

    .wrapper :global(.invalid) {
        border-color: red;
    }
</style>
