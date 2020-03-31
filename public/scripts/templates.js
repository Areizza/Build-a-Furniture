const templates =
{
    // TABLE
    "table":
        [
            {
                "id": "tableTop",
                "class": "grabbable table tableTop",
                "furniture": "tier: 0; totalSnapPoints: 4;",
                "mixin": "part",
                "scale": "1 1 1",
                "gltf": "/assets/models/table/tableTop/tableTop.gltf",
                "body": "type: dynamic; mass: 20; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.72 0.0225 0.72",

                "entity":
                    [
                        {
                            "position": "0 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png"
                        },
                        {
                            "position": "-0 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png"
                        },
                        {
                            "position": "-0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png"
                        },
                        {
                            "position": "0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png"
                        },

                        {
                            "position": "0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png"
                        },
                        {
                            "position": "-0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png"
                        },
                        {
                            "position": "-0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png"
                        },
                        {
                            "position": "0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png"
                        }
                    ]
            },

            {
                "id": "tableLeg",
                "class": "grabbable table tableLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "/assets/models/table/tableLeg/tableLeg.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.036 0.345 0.036;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "tableSkirt",
                "class": "grabbable table tableSkirt",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "/assets/models/table/tableSkirt/tableSkirt.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.6 0.0395 0.02;",

                "entity":
                    [
                        {
                            "position": "0 0.09 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 4; snapTo: 3;"
                        }
                    ]
            }
        ],

    // SHELF
    "shelf":
        [
            {
                "id": "shelfBack",
                "class": "grabbable shelf shelfBack",
                "furniture": "tier: 0; totalSnapPoints: 9;",
                "mixin": "part",
                "scale": "0.125 0.125 0.125",
                "gltf": "assets/models/shelf/shelfBack/shelfBack.gltf",
                "body": "type: dynamic; mass: 20; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.95 8.65 0.08",

                "entity":
                    [
                        {
                            "position": "0 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "-0 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "-0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },

                        {
                            "position": "0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        }
                    ]
            },

            {
                "id": "shelfRack",
                "class": "grabbable shelf shelfRack",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "0.125 0.125 0.125",
                "gltf": "assets/models/shelf/shelfRack/shelfRack.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.94 0.088 1.54;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "shelfSide",
                "class": "grabbable shelf shelfSide",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "0.125 0.125 0.125",
                "gltf": "/assets/models/shelf/shelfSideBoard/shelfSide.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.281 9.7 1.8;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "shelfSkirt",
                "class": "grabbable shelf shelfSkirt",
                "mixin": "part",
                "furniture": "tier: 2; totalSnapPoints: 1;",
                "scale": "0.125 0.125 0.125",
                "gltf": "/assets/models/shelf/shelfSkirt/shelfSkirt.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.97 0.275 0.098;",

                "entity":
                    [
                        {
                            "position": "0 0.09 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 4; snapTo: 3;"
                        }
                    ]
            },
            
            {
                "id": "shelfTop",
                "class": "grabbable shelf shelfTop",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 2;",
                "scale": "0.125 0.125 0.125",
                "gltf": "/assets/models/shelf/shelfTop/shelfTop.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 4.5 0.15 1.85;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "shelfBottom",
                "class": "grabbable shelf shelfBottom",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "0.25 0.25 0.25",
                "gltf": "assets/models/shelf/shelfBottom/shelfBottom.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.965 0.28 1.79;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },
        ],

    // CHAIR
    "chair":
        [
            {
                "id": "chairBack",
                "class": "grabbable chair chairBack",
                "furniture": "tier: 0; totalSnapPoints: 9;",
                "mixin": "part",
                "scale": "1 1 1",
                "gltf": "/assets/models/chair/chairBack/chairBack.gltf",
                "body": "type: dynamic; mass: 12; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.95 8.65 0.08",

                "entity":
                    [
                        {
                            "position": "0 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "-0 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "-0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },
                        {
                            "position": "0.62 -0.045 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 3; snapTo: 4;"
                        },

                        {
                            "position": "0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.045 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "0.62 -0.045 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        }
                    ]
            },

            {
                "id": "chairBackLeg",
                "class": "grabbable chair chairBackLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "assets/models/chair/chairLegBack/chairLegBack.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.94 0.088 1.54;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "chairFrontLeg",
                "class": "grabbable chair chairFrontLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "/assets/models/chair/chairLegFront/chairLegFront.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.281 9.7 1.8;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },

            {
                "id": "chairSeat",
                "class": "grabbable chair chairSeat",
                "mixin": "part",
                "furniture": "tier: 2; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "/assets/models/chair/chairSeat/chairSeat.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.97 0.275 0.098;",

                "entity":
                    [
                        {
                            "position": "0 0.09 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 4; snapTo: 3;"
                        }
                    ]
            },

            {
                "id": "chairSkirt",
                "class": "grabbable chair chairSkirt",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 2;",
                "scale": "1 1 1",
                "gltf": "/assets/models/chair/chairSkirt/chairSkirt.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 4.5 0.15 1.85;",

                "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
            },
        ],
}
