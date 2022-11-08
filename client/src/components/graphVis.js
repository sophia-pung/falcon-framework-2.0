import Graph from "react-graph-vis";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  },
  layout: {
    randomSeed: 23,
  },
  physics: {
    hierarchicalRepulsion: {
      centralGravity: 100,
      springLength: 200,
      springConstant: 0.1,
      nodeDistance: 150,
      damping: 1
    },
    maxVelocity: 500,
    minVelocity: 3,
    solver: "barnesHut",
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5
  }
};

function randomColor() {
  const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}

const GraphvisPage = () => {
  const createNode = (x, y) => {
    const color = randomColor();
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = 3//Math.floor(Math.random() * (counter - 1)) + 1;
      const newNodes = [
        ...nodes,
        { id, label: `Node ${id}`, color, x, y }
      ];
      console.log(counter, nodes.length, id)
      console.log(nodes, newNodes)
      console.log(x, y)
      return {
        graph: {
          nodes: newNodes,
          edges: [
            ...edges,
            { from, to: id }
          ]
        },
        counter: id,
        ...rest
      }
    });
  }
  const [state, setState] = useState({
    counter: 5,
    graph: {
      nodes: [
        { id: 1, label: "", color: "#e04141", shape: 'image',
        image: 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png'},
        { id: 2, label: "", shape: 'image', image: 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/506/original/techtonica-image-logo.png'},
        { id: 3, label: "Node 3", color: "#e0df41" },
        { id: 4, label: "Node 4", color: "#7be041" },
        { id: 5, label: "Node 5", color: "#41e0c9" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
        alert("Selected node: " + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      }
    }
  })
  const { graph, events } = state;
  //the key is a workaround for react strict mode
  //uuidv4 generates a unique string everytime the react component is rendered
  const key = uuidv4();
  return (
    <div>c
      <Graph key={key} graph={graph} options={options} events={events} style={{ height: "640px" }} />
    </div>
  );

}

export default GraphvisPage;