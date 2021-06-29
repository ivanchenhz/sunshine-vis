<script>
  import { SsSvg, SsLine } from '../../lib'
  import Bubble from '../components/Bubble.svelte'

  let activeBubble = 'none'

  function setActiveBubble(bubble) {
    activeBubble = activeBubble === bubble ? 'none' : bubble
  }

  let cards = new Array(50).fill(0)
    .map(() => ({
      isRed: Math.random() < 0.5,
      data: [{y: Math.random() * 20, x: 1,}, {y: Math.random() * 20, x: 2,}, {
        y: Math.random() * 20,
        x: 3,
      }, {y: Math.random() * 20, x: 4,}]
    }))

  $: stateClose = activeBubble === 'close' ? 'active' :
    activeBubble === 'none' ? 'normal' : 'inactive'
  $: stateFamiliar = activeBubble === 'familiar' ? 'active' :
    activeBubble === 'none' ? 'normal' : 'inactive'
  $: stateDistant = activeBubble === 'distant' ? 'active' :
    activeBubble === 'none' ? 'normal' : 'inactive'
</script>


<main class="px-8 mt-40">


  <div class="overflow-y-auto pb-4">
    <div class="flex flex-wrap w-[2000px]">
      {#each cards as card }
        <div class="m-2 w-[160px] h-[215px] border border-[#FFBBAD] rounded flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-[#CCCCCC] mt-6"></div>
          <div class="text-[15px] leading-[22px] text-[#121212] font-bold mt-2.5 mb-1">Bill Jackson</div>
          <div class="text-[12px] leading-[18px] text-[#121212] mb-3">Software Engineer</div>
          <div class="bg-[#F7F7F7] rounded relative">
            <svg class="absolute top-2.5 left-4 {card.isRed ? 'text-[#FF9580]' : 'text-[#00CF64]'}" width="109" height="24" viewBox="0 0 109 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="-0.5" x2="24" y2="-0.5" transform="matrix(-7.17976e-08 -1 -1 2.66119e-08 0.5 24)" stroke-dasharray="1 4"/>
              <line y1="-0.5" x2="24" y2="-0.5" transform="matrix(-7.17976e-08 -1 -1 2.66119e-08 36.5 24)"  stroke-dasharray="1 4"/>
              <line y1="-0.5" x2="24" y2="-0.5" transform="matrix(-7.31396e-08 -1 -1 2.61236e-08 71.5 24)"  stroke-dasharray="1 4"/>
              <line y1="-0.5" x2="24" y2="-0.5" transform="matrix(-7.64946e-08 -1 -1 2.49778e-08 107.5 24)" stroke-dasharray="1 4"/>
            </svg>

            <SsSvg padding="{{top: 8, right: 16, bottom: 8, left: 16}}" width="144" height="44">
              <SsLine
                  class="text-[#F7644A] stroke-[3px]" marker-end="{`url(#${card.isRed ? 'endRed' : 'endGreen'})`}"
                  xKey="x" yKey="y" dataset="{card.data}"></SsLine>
            </SsSvg>
          </div>
          <div class="text-[12px] leading-[14px] text-[#545454] mt-2">Close connection</div>
        </div>
      {/each }
    </div>
  </div>

  <svg class="absolute">
    <defs>
      <marker id="endRed" viewBox="0 0 16 16"
              refX="8" refY="8"
              markerUnits="strokeWidth"
              markerWidth="6" markerHeight="6"
              orient="auto">
        <circle r="8" transform="matrix(1 0 0 -1 8 8)" fill="#FFE8E3"/>
        <circle r="4" transform="matrix(1 0 0 -1 8 8)" fill="#F7644A"/>
      </marker>

      <marker id="endGrey" viewBox="0 0 16 16"
              refX="8" refY="8"
              markerUnits="strokeWidth"
              markerWidth="6" markerHeight="6"
              orient="auto">
        <circle r="8" transform="matrix(1 0 0 -1 8 8)" fill="white"/>
        <circle r="4" transform="matrix(1 0 0 -1 8 8)" fill="#B2B2B2"/>
      </marker>

      <marker id="endGreen" viewBox="0 0 16 16"
              refX="8" refY="8"
              markerUnits="strokeWidth"
              markerWidth="6" markerHeight="6"
              orient="auto">
        <circle cx="8" cy="8" r="8" fill="#BEFADE"/>
        <circle cx="8" cy="8" r="4" fill="#00AB50"/>
      </marker>
    </defs>
  </svg>


  <div class="w-[846px] h-[520px] relative mx-auto">
    <Bubble on:click={ () => setActiveBubble('distant') } state="{stateDistant}"
            class="w-[440px] h-[440px] border-[#E3E7FA] absolute top-[80px] left-[449px]">
      <div>
        <div class="text-[#121212] font-bold text-2xl leading-none mb-2">107</div>
        <div class="text-[#121212] font-bold text-sm leading-none">Distant</div>
        <div class="text-[#121212] font-bold text-sm leading-none">connections</div>

        <div class="mt-2 grid grid-cols-4 grid-rows-2 gap-x-3 gap-y-2">
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
        </div>
      </div>
    </Bubble>


    <Bubble on:click={ () => setActiveBubble('familiar') } state="{stateFamiliar}"
            class="w-[323px] h-[323px] border-[#CED2ED] absolute top-[197px] left-[224px]">
      <div>
        <div class="text-[#121212] font-bold text-2xl leading-none mb-2">45</div>
        <div class="text-[#121212] font-bold text-sm leading-none">Familiar</div>
        <div class="text-[#121212] font-bold text-sm leading-none">connections</div>

        <div class="mt-2 grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-2">
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
        </div>
      </div>
    </Bubble>

    <Bubble on:click={ () => setActiveBubble('close') } state="{stateClose}"
            class="w-[266px] h-[266px]  border-[#8C91BD] absolute top-[128px] left-[43px]">
      <div>
        <div class="text-[#121212] font-bold text-2xl leading-none mb-2">15</div>
        <div class="text-[#121212] font-bold text-sm leading-none">Close</div>
        <div class="text-[#121212] font-bold text-sm leading-none">connections</div>

        <div class="mt-2 grid grid-cols-3 grid-rows-1 gap-x-3 gap-y-2">
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
          <div class="w-10 h-10 rounded-full bg-[#CCCCCC]"></div>
        </div>
      </div>
    </Bubble>

  </div>

</main>

