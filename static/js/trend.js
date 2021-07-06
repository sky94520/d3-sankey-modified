COLOR_LIST = ["#2c7be5", "#6baed6", "#9ecae1", "#c6dbef",
    "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2",
    "#31a354", "#74c476", "#a1d99b", "#c7e9c0",
    "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb",
    "#636363", "#969696", "#bdbdbd", "#d9d9d9"];

//请求数据
$.ajax({
    type: "get",
    url: '/get_trend',
    dataType: "json",
    success: function (json_data) {
        let data = transferData(json_data);
        generateTrend(data);
    }
});

//对数据进行转换
function transferData(data){
    //现在主题模型在数据上存在问题
    //1. 各个主题的专利数量趋势几乎一致 挖掘的问题？
    //2. 应该按时间片计算主题强度，最佳为9个时间片左右
    //3. 按时间片对齐数据
    let nodes = [];
    let links = [];
    let padding = 0.8;
    let offset = 0;

    for (let i=0;i < data.length; i++)
    {
        let topic = data[i].topic;
        let years = data[i].data;
        let last_w1 = null;
        for (let j=0; j < years.length; j++){
            let year = years[j].year;
            let strength = years[j].strength;
            let doc = years[j].doc;
            let color = COLOR_LIST[i % COLOR_LIST.length];

            let node = {pos: j * padding, w: doc};
            nodes.push(node);
            //创建link
            if (last_w1 != null){
                let link = {source: j-1 + offset, target: j + offset, w1: last_w1, w2: strength, color: color};
                //let link = {source: j-1 + offset, target: j+offset, w1: 1, w2: 1, color: color};
                links.push(link);
            }
            last_w1 = strength;
        }
        offset += years.length;
        if (i > 5)
            break;
    }
    let rs = {
        nodes: nodes,
        links: links
    }
    return rs;
}

function generateTrend(data){
    console.log(data);
    var sankey = d3.sankey()
        .size([1000, 500])
        .nodeWidth(0)
        .nodes(data.nodes)
        .links(data.links)
        .layout(3);
    let paths = [];
    for (let i in data.links)
    {
        let link = sankey.link()(data.links[i]);
        paths.push(link);
    }
    //debugger
    let svg = d3.select('svg');
    let nodes = svg.append('g').selectAll('.node').data(data.nodes).enter();
    //矩形
    nodes.append("rect")
        .attr("x", d => d.x).attr("y", d => d.y)
        .attr("height", d => d.dy).attr("width", d => d.dx)
        .attr("fill", 'grey');
    //矩形的文本
    /*
    nodes.append('text')
        .attr({
            x: d=>d.x+sankey.nodeWidth()/2,
            y: d=>d.y + d.dy/2
        }).text(d=>d.name);
     */
    //边
    //let links = svg.append('g').selectAll('path').data(data.links).enter();
    let links = svg.append('g').selectAll('path').data(data.links).enter();
    //线性渐变
    let gradient = links.append('linearGradient')
        .attr('id', function (d, i){
            d.uid = 'gradient-' + i;
            return d.uid;
        })
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', '100%')
        .attr('y1', '0')
        .attr('x2', '0')
        .attr('y2', '100%');
    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#FAFAFF');
    gradient.append('stop').attr('offset', '50%').attr('stop-color', d => d.color);
    //赋值渐变色
    links.append("path").attr({
        fill: 'grey',
        //stroke: function (d, i){ return 'blue'},
        d: (d, i)=>paths[i],
        opacity: 1,
    })
        .style('fill-opacity', 0.6)
        .style('fill',function (d, i){
            return 'url(#' + d.uid + ')';
        });
}
