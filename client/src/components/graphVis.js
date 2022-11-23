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

const GraphvisPage = (resumeData) => {
  const createNode = (x, y) => {
    const color = randomColor();
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
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

  function updateNodes() {
    console.log("hereeeeee");
    fetch("/db/nodes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        // do the transform
        const new_nodes = data.map((workplace) => {
          return {
            id: workplace.workplace_id,
            label: workplace.workplace,
            shape: "image",
            image: workplace.imageurl,
          };
        });

        let last_edge_id = null;
        const new_edges = data.map((workplace) => {
          const this_edge_id = workplace.workplace_id;
          if (!!last_edge_id) {
            // if last_edge not null
            const edge ={
              from: last_edge_id,
              to: this_edge_id,
            };
            last_edge_id = this_edge_id;
            return edge 
          } else {
            const edge ={
              from: this_edge_id, // will this work????? self-reference?
              to: this_edge_id,
            };
            last_edge_id = this_edge_id;
            return edge 
          }
        });

        const graph = state.graph;
        const nodes = graph.nodes;
        const edges = graph.edges;

        const all_nodes = (new_nodes);
        const all_edges = (new_edges);

        const new_graph = { ...graph, nodes: all_nodes, edges: all_edges };
        const new_state = { ...state, graph: new_graph };

        console.log("<<<<< OLD STATE", state);
        console.log(">>>>> NEW STATE", new_state);

        setState(new_state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [state, setState] = useState({
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
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 1, to: 6 },
        { from: 6, to: 7 },
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
  function checkId(state) {
    const nodes = state.graph.nodes;
    let nextId = "";
    for (let i = 0; i < state.graph.nodes.length; i++) {
      for (let j = 0; j < state.graph.nodes.length; j++) {
        console.log("nodeId", nodes[i].id);
        console.log("#", j);
      }
    }
  }

  //goal: generate unique id's for nodes
  //I'm not responsible for this... I should query the database, not build this in myself
  //the database should update the state
  //the state should render
  //the images should have a different object which will paste in the image url for them
  //nodes should use the image object to render using a map function

  console.log("testnode", checkId(state));
  const { graph, events } = state;
  //the key is a workaround for react strict mode
  //uuidv4 generates a unique string everytime the react component is rendered
  const key = uuidv4();
  return (
    <div>
      {/* <button onClick={() => updateNodes()}>Test Network Render</button> */}
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
