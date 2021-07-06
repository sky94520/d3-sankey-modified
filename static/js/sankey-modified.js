!function() {
  d3.sankey = function () {
    var sankey = {},
      nodeWidth = 24,
      nodePadding = 8,
      nodeOffset = 200,
      size = [1, 1],
      nodes = [],
      links = [],
      items = [];

    sankey.nodeWidth = function (_) {
      if (!arguments.length) return nodeWidth;
      nodeWidth = +_;
      return sankey;
    };

    sankey.nodePadding = function (_) {
      if (!arguments.length) return nodePadding;
      nodePadding = +_;
      return sankey;
    };

    sankey.nodeOffset = function (_) {
      if (!arguments.length) return nodeOffset;
      nodeOffset = +_;
      return sankey;
    };

    sankey.nodes = function (_) {
      if (!arguments.length) return nodes;
      nodes = _;
      return sankey;
    };

    sankey.links = function (_) {
      if (!arguments.length) return links;
      links = _;
      return sankey;
    };

    sankey.items = function (_) {
      if (!arguments.length) return items;
      items = _;
      return sankey;
    };

    sankey.size = function (_) {
      if (!arguments.length) return size;
      size = _;
      return sankey;
    };

    sankey.layout = function (iterations) {////jixiangyu   the algorithm
      computeNodeLinks();///////transform the link value to node objet
      computeNodeValues();//////set the weight of each node
      computeNodeBreadths();//////the X cordinate of every nodes
      computeNodeDepths_minimum_jixy(iterations);/////algo:  the order:pos   cordinates : y
      computeLinkDepths();////vertical y cordinates of the link/nodes
      computeItemNode();
      return sankey;
    };

    sankey.area = d3.svg.area()
      .x(function (d) {
        return d.x;
      })
      .y0(function (d) {
        return d.y0;
      })
      .y1(function (d) {
        return d.y1;
      });


    sankey.relayout = function () {
      computeLinkDepths();
      //computeNodeDepths_minimum_jixy(300);
      //computeLinkDepths();

      return sankey;
    };

    sankey.link = function () {
      var curvature = .5;

      function link(d) {
        var x0 = d.source.x + d.source.dx,
          x1 = d.target.x,
          xi = d3.interpolateNumber(x0, x1),
          xj = d3.interpolateNumber(x1, x0),
          x2 = xi(curvature),
          x3 = xi(1 - curvature),
          x4 = xj(curvature),
          x5 = xj(1 - curvature),
          m = (x0 + x1) / 2;
        var y0_top = d.source.y + d.sy;//右左下
        var y0_bottom = d.source.y + d.sy + d.dy1,//右左下
          y1_top = d.target.y + d.ty;// + d.ty;右右下
        var y1_bottom = d.target.y + d.ty + d.dy2;
        return "M" + x0 + "," + y0_top
          + "C" + x2 + "," + y0_top
          + " " + x3 + "," + y1_top
          + " " + x1 + "," + y1_top
          + "L" + x1 + "," + y1_bottom
          + "C" + x4 + "," + y1_bottom
          + " " + x5 + "," + y0_bottom
          + " " + x0 + "," + y0_bottom
          + "L" + x0 + "," + y0_top;
      }

      link.curvature = function (_) {
        if (!arguments.length) return curvature;
        curvature = +_;
        return link;
      };

      return link;
    };

    // Populate the sourceLinks and targetLinks for each node.
    // Also, if the source and target are not objects, assume they are indices.
    function computeNodeLinks() {
      nodes.forEach(function (node) {
        node.sourceLinks = [];
        node.targetLinks = [];
      });
      links.forEach(function (link) {
        var source = link.source, target = link.target;
        link.source_index = source;
        link.target_index = target;
        if (typeof source === "number") source = link.source = nodes[link.source];
        if (typeof target === "number") target = link.target = nodes[link.target];
        source.sourceLinks.push(link);/////the link in which node as souce/link
        target.targetLinks.push(link);
      });
    }

    // Compute the value (size) of each node by summing the associated links.
    ////jixiangyu  change to the weight of the node
    function computeNodeValues() {
      nodes.forEach(function (node) {
        //console.log("check");
        node.value = node.w;
        // node.value = Math.max(
        //   d3.sum(node.sourceLinks, value),
        //   d3.sum(node.targetLinks, value)
        // );
      });
    }

    ///jixiangyu    compute layout order
///the node neighbor to the neighboring nodes???
    function computeItemNode() {
      items.forEach(function (item) {
        item.node.forEach(function (node) {
          var node_id = node;
          node = {};
          node.cluster = nodes[node];
        })
        item.start.node_id = item.start.node;
        item.start.node = nodes[item.start.node_id];
      })

    }

    // Iteratively assign the breadth (x-position) for each node.///////////jixiangyu
    // Nodes are assigned the maximum breadth of incoming neighbors plus one;
    // nodes with no incoming links are assigned breadth zero, while
    // nodes with no outgoing links are assigned the maximum breadth.
    function computeNodeBreadths() {
      // var remainingNodes = nodes,
      //     nextNodes,
      //     x = 0

      // var test=1;
      nodes.forEach(function (node) {
        node.x = node.pos * nodeOffset;////pos is in the Json data  jixiangyu

        //console.log(node.cluster);
        //test++;

        node.dx = nodeWidth;
      });
    }

    function moveSourcesRight() {
      nodes.forEach(function (node) {
        if (!node.targetLinks.length) {
          node.x = d3.min(node.sourceLinks, function (d) {
            return d.target.x;
          }) - 1;
        }
      });
    }

    function moveSinksRight(x) {
      nodes.forEach(function (node) {
        if (!node.sourceLinks.length) {
          node.x = x - 1;
        }
      });
    }

    function computeNodeDepths_minimum_jixy(iterations) {
      var nodesByBreadth = d3.nest()//////jixiangyu   nest? initialize the group sort
        .key(function (d) {
          return d.x;
        })/////group by x-cordinate
        .sortKeys(d3.ascending)
        .entries(nodes)
        .map(function (d) {
          return d.values;
        });

      // console.log("sankey");

      initializeNodeDepth();
      resolveCollisions();
      for (var alpha = 1; iterations > 0; --iterations) {
        // relaxRightToLeft(alpha *= .99);/////
        // resolveCollisions();
        // relaxLeftToRight(alpha);/////symmetric if the layout  jixiangyu
        // resolveCollisions();
      }


      //
      function initializeNodeDepth() {
        var ky = d3.min(nodesByBreadth, function (nodes) {
          return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
        });

        nodesByBreadth.forEach(function (nodes) {

          var ojoj = [1, 2, 3, 1];
          //console.log(d3.sum(ojoj,sum_jixy));
          //console.log("this sum_test")
          function sum_jixy() {
            // return center(link.source) * link.value;
            return 2;
          }


          nodes.forEach(function (node, i) {
            node.y = (size[1] / 2) - node.w;
            //node.dy=80;

            ///console.log(node.y);
            node.dy = node.value * ky;   ///height of every node

            //median_value();  jixiangyu
          });
        });

        links.forEach(function (link) {
          // link.dy = link.value * ky;
          link.dy1 = link.source.w * link.w1 * ky / (d3.sum(link.source.sourceLinks, weight1) + 0.01);
          link.dy2 = link.target.w * link.w2 * ky / (d3.sum(link.target.targetLinks, weight2) + 0.01);
        });
      }

      function relaxLeftToRight(alpha) {
        nodesByBreadth.forEach(function (nodes, breadth) {
          nodes.forEach(function (node) {
            if (node.targetLinks.length) {
              var y = d3.sum(node.targetLinks, weightedSource) / (d3.sum(node.targetLinks, weight1) + 0.01);
              node.y += (y - center(node)) * alpha;/////jixiangyu   the y-cordinate of the node
            }
          });
        });

        function weightedSource(link) {
          // return center(link.source) * link.value;
          return center(link.source) * link.w1;
        }
      }

      function relaxRightToLeft(alpha) {
        nodesByBreadth.slice().reverse().forEach(function (nodes) {
          nodes.forEach(function (node) {
            if (node.sourceLinks.length) {
              ////jixiangyu   the implementation of the algo
              var y = d3.sum(node.sourceLinks, weightedTarget) / (d3.sum(node.sourceLinks, weight2) + 0.01);
              node.y += (y - center(node)) * alpha;

            }
          });
        });

        function weightedTarget(link) {
          // return center(link.target) * link.value;
          return center(link.target) * link.w2;
        }
      }

      function resolveCollisions() {
        nodesByBreadth.forEach(function (nodes) {
          var node,
            dy,
            y0 = 0,
            n = nodes.length,
            i;

          // Push any overlapping nodes down.
          nodes.sort(ascendingDepth);
          for (i = 0; i < n; ++i) {
            node = nodes[i];
            dy = y0 - node.y;
            if (dy > 0) node.y += dy;
            y0 = node.y + node.dy + nodePadding;
          }

          // If the bottommost node goes outside the bounds, push it back up.
          dy = y0 - nodePadding - size[1];
          if (dy > 0) {
            y0 = node.y -= dy;

            // Push any overlapping nodes back up.
            for (i = n - 2; i >= 0; --i) {
              node = nodes[i];
              dy = node.y + node.dy + nodePadding - y0;
              if (dy > 0) node.y -= dy;
              y0 = node.y;
            }
          }
        });
      }

      function ascendingDepth(a, b) {
        return a.y - b.y;
      }
    }/////jixiangyu  the vertival value??  consider the source code of d3  d3.nest()

    function computeLinkDepths() {
      nodes.forEach(function (node) {
        node.sourceLinks.sort(ascendingTargetDepth);
        node.targetLinks.sort(ascendingSourceDepth);
      });
      nodes.forEach(function (node) {
        var sy = 0, ty = 0;
        node.sourceLinks.forEach(function (link) {
          link.sy = sy;
          sy += link.dy1;
        });
        node.targetLinks.forEach(function (link) {
          link.ty = ty;
          ty += link.dy2;
        });
      });

      function ascendingSourceDepth(a, b) {
        return a.source.y - b.source.y;
      }

      function ascendingTargetDepth(a, b) {
        return a.target.y - b.target.y;
      }
    }

    function center(node) {
      return node.y + node.dy / 2;
    }/////jixiangyu   the algo test :

    function value(link) {
      return link.value;
    }

    function weight1(link) {
      return link.w1;
    }

    function weight2(link) {
      return link.w2;
    }

    return sankey;
  };
}();
