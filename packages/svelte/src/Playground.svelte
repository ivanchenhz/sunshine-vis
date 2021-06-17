<script>
  import { SsSvg, SsArc } from './lib'
</script>

<main>
    <SsSvg style="height: 320px; width: 480px">
        <SsArc style="color: red"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{0}" endAngle="{75}" padAngle="{2}"/>
        <SsArc style="color: blue"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{75}" endAngle="{160}" padAngle="{2}"/>
        <SsArc style="color: greenyellow"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{160}" endAngle="{360}" padAngle="{2}"/>
    </SsSvg>

    <SsSvg style="height: 320px; width: 480px">
        <SsArc class="ss-text-pink-50"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{270}" endAngle="{330}" padAngle="{2}"/>
        <SsArc class="ss-text-gray-40"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{330}" endAngle="{390}" padAngle="{2}"/>
        <SsArc class="ss-text-theme-50"
               innerRadius="{.85}" outerRadius="{.95}" startAngle="{30}" endAngle="{90}" padAngle="{2}"/>

        <SsArc class="ss-text-blue-70"
               innerRadius="{.75}" outerRadius="{1}" startAngle="{42}" endAngle="{48}" padAngle="{2}"
               cornerRadius="{4}"/>
    </SsSvg>

</main>
