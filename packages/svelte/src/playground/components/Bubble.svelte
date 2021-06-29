<script>
  export let state = 'normal'

  $: stateClass = state === 'active' ? 'bg-[#F2F4FF] z-10' :
    state === 'inactive' ? 'opacity-30 bg-white' : 'bg-white'
</script>

<div on:click
     class="border-8 rounded-full
        {stateClass} {$$restProps.class}">
  <div class="hover:bg-[#F2F4FF] hover:bg-opacity-50 w-full h-full rounded-full flex justify-center items-center">
    <slot></slot>
  </div>
</div>


