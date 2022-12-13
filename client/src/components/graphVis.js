import Graph from "react-graph-vis";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
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
      damping: 1,
    },
    maxVelocity: 500,
    minVelocity: 3,
    solver: "barnesHut",
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true,
    },
    timestep: 0.5,
  },
};

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

const GraphvisPage = ({ updateGraphPage, setUpdateGraphPage }) => {
  const createNode = (x, y) => {
    const color = randomColor();
    setNetworkGraph(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = 3; //Math.floor(Math.random() * (counter - 1)) + 1;
      const newNodes = [...nodes, { id, label: `Node ${id}`, color, x, y }];
      console.log(counter, nodes.length, id);
      console.log(nodes, newNodes);
      console.log(x, y);
      return {
        graph: {
          nodes: newNodes,
          edges: [...edges, { from, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };
  if (updateGraphPage) {
    console.log("test function");
    setUpdateGraphPage(false);
  }

  let PORT = process.env.PORT;
  if (!PORT) {
    PORT = "http://localhost:8000"
  }

  function updateNodes() {
    fetch(PORT + "/db/nodes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        // returns an array (new_nodes) with id, label, shape, and image for each node
        const new_nodes = data.map((workplace) => {
          //for in loop to remove duplicate names
          return {
            id: workplace.workplace_id,
            label: workplace.workplace,
            shape: "image",
            image: workplace.imageurl,
          };
        });

        //sort nodes in order before creating the new_edges array
        function sortNodes(nodesArray){
          let checker = 0; 
          for(let i=0; i<(nodesArray.length-1);i++){
            console.log(nodesArray[i])
            if (nodesArray[i].id>nodesArray[i+1].id) {
              checker += 1; 
              let m = nodesArray[i];
              let k = nodesArray[i+1];
              nodesArray[i] = k;
              nodesArray[i+1] = m;
            }
          }
          if (checker != 0) {
            checker = 0; 
            return sortNodes(nodesArray);
          } else {
            return nodesArray;
          }
        };

        sortNodes(new_nodes);

        // returns an array (new_edges) of objects {last edge, this edge} for each workplace
        //we want to start the first edge at Armstrong High School (edge 1) always, and build our chain from there
        let last_edge_id = null;
        const new_edges = new_nodes.map((node) => {
          //console.log("new_edge", new_edges)
          const this_edge_id = node.id;
          if (!!last_edge_id && node.label !== "Armstrong High School") {
            // if last_edge not null
            const edge = {
              from: last_edge_id,
              to: this_edge_id,
            };
            last_edge_id = this_edge_id;
            return edge;
          } else {
            const edge = {
              from: last_edge_id, // will this work????? self-reference?
              to: this_edge_id,
            };
            last_edge_id = this_edge_id;
            return edge;
          }
        });

        const graph = networkGraph.graph;

        const all_nodes = new_nodes;
        const all_edges = new_edges;

        // creates a new_graph with the previous nodes plus the new nodes and their edges
        const new_graph = { ...graph, nodes: all_nodes, edges: all_edges };
        const new_network_graph = { ...networkGraph, graph: new_graph };

        console.log("<<<<< OLD STATE", networkGraph);
        console.log(">>>>> NEW STATE", new_network_graph);

        setNetworkGraph(new_network_graph);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [networkGraph, setNetworkGraph] = useState({
    counter: 5,
    graph: {
      nodes: [
        {
          id: 1,
          label: "",
          shape: "image",
          image:
            "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1587726922/rdaleorg/ekdtpkytkyr90pidagnp/ArmstrongHS-C.png",
        },
        {
          id: 2,
          label: "",
          shape: "image",
          image:
            "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/506/original/techtonica-image-logo.png",
        },
        {
          id: 3,
          label: "",
          shape: "image",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UCLA_Bruins_script.svg/1200px-UCLA_Bruins_script.svg.png",
        },
        {
          id: 4,
          label: "",
          shape: "image",
          image:
            "https://www.videogameschronicle.com/files/2019/03/1920px-Sony_Interactive_Entertainment_logo_since_20160401.svg_.png",
        },
        {
          id: 5,
          label: "",
          shape: "image",
          image:
            "https://d1cy3c0knche0o.cloudfront.net/static/logo-square.png?v=2",
        },
        {
          id: 6,
          label: "",
          shape: "image",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/University_of_Minnesota_Logo.svg/2560px-University_of_Minnesota_Logo.svg.png",
        },
        {
          id: 7,
          label: "",
          shape: "image",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
        },
        {
          id: 8,
          label: "",
          shape: "image",
          image: "https://www.csbsju.edu/documents/CMS/Logos/SJUVert.jpg",
        },
        {
          id: 9,
          label: "",
          shape: "image",
          image:
            "https://assets.nationbuilder.com/mplsbike/sites/48/meta_images/original/OurStreets_Stacked_WhiteText_GreenLine.png?1597099015",
        },
        {
          id: 10,
          label: "",
          shape: "image",
          image:
            "https://images.squarespace-cdn.com/content/v1/5e2f62a39ac61f6cd2e27f61/1580164073854-BLY3LY49Q1PW633RF7B8/logo_0.png",
        },
        {
          id: 11,
          label: "",
          shape: "image",
          image:
            "https://logos-download.com/wp-content/uploads/2016/11/Life_Time_Fitness_logo_logotype.png",
        },
        {
          id: 12,
          label: "",
          shape: "image",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/1541px-Target_logo.svg.png",
        },
        {
          id: 13,
          label: "",
          shape: "image",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/LUwithShield-CMYK.svg/1200px-LUwithShield-CMYK.svg.png",
        },
        {
          id: 14,
          label: "",
          shape: "image",
          image:
            "https://cmi.ucsd.edu/wp-content/uploads/2021/04/evonik-logo-dropped.png",
        },
        {
          id: 15,
          label: "",
          shape: "image",
          image:
            "https://1000logos.net/wp-content/uploads/2021/09/Medtronic-Logo-1999.png",
        },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 1, to: 6 },
        { from: 6, to: 7 },
        { from: 1, to: 8 },
        { from: 8, to: 9 },
        { from: 9, to: 10 },
        { from: 8, to: 11 },
        { from: 11, to: 12 },
        { from: 1, to: 13 },
        { from: 13, to: 14 },
        { from: 14, to: 15 },
      ],
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
      },
    },
  });

  const { graph, events } = networkGraph;
  //the key is a workaround for react strict mode
  //uuidv4 generates a unique string everytime the react component is rendered
  const key = uuidv4();
  return (
    <div>
      <button onClick={() => updateNodes()}>Test Network Render</button>
      <Graph
        key={key}
        graph={graph}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    </div>
  );
};

export default GraphvisPage;
