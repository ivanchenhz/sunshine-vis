# sunshine-vis

Flexible visualization on top of d3
Suppose to work just like html elements



```html

<SsSvg width="480" height="320" center="{{x: .5, y: 1}}">
    <SsArc class="text-blue-400"
           innerRadius="{.85}" outerRadius="{.95}" startAngle="{270}" endAngle="{330}" padAngle="{2}"/>
    <SsArc class="text-red-400"
           innerRadius="{.85}" outerRadius="{.95}" startAngle="{330}" endAngle="{390}" padAngle="{2}"/>
    <SsArc class="text-yellow-300"
           innerRadius="{.85}" outerRadius="{.95}" startAngle="{30}" endAngle="{90}" padAngle="{2}"/>

    <SsArc class="text-gray-500"
           innerRadius="{.75}" outerRadius="{1}" startAngle="{42}" endAngle="{48}" padAngle="{2}"
           cornerRadius="{4}"/>
</SsSvg>

``` 


