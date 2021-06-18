<script lang="ts">
  import { arc } from 'd3-shape'
  import { getContext, onMount, tick } from 'svelte'

  const svgContext = getContext('svgContext')

  export let innerRadius;
  export let outerRadius;
  export let startAngle;
  export let endAngle;
  export let padAngle = 2;
  export let cornerRadius = 0;
  export let center = {}

  let arcGenerator

  onMount(async () => {
    await tick()
    init()
    drawArc()
  })

  function init() {
  }

  function drawArc() {
    const dimensions = $svgContext.dimensions
    const { boundedWidth, boundedHeight } = dimensions
    const arcCenter = {
      ...$svgContext.center,
      ...center
    }

    arcGenerator = arc()
      .innerRadius(boundedHeight / 2 * innerRadius)
      .outerRadius(boundedHeight / 2 * outerRadius)
      .startAngle(startAngle * (Math.PI * 2) / 360).endAngle(endAngle * (Math.PI * 2) / 360)
      .padAngle(padAngle * (Math.PI * 2) / 360).cornerRadius(cornerRadius)

    const path = $svgContext.bounds.append('path')
      .style('transform', `translate(${
        boundedWidth * arcCenter.x
      }px, ${
        boundedHeight * arcCenter.y
      }px)`)
      .attr('d', arcGenerator())
      .attr('fill', 'currentColor')
      .attr('stroke', 'currentColor')

    for (let k in $$restProps) {
      path.attr(k, $$restProps[k])
    }
  }

</script>
