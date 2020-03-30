const templates =
{
    "table":
        [
            {
                "id": "tableTop",
                "class": "grabbable table tableTop",
                "furniture": "tier: 0; totalSnapPoints: 4;",
                "mixin": "part",
                "scale": "1 1 1",
                "gltf": "#tableTopModel",
                "body": "type: dynamic; mass: 20; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.72 0.0225 0.72",

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
                "id": "tableLeg",
                "class": "grabbable table tableLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1 1 1",
                "gltf": "#tableLegModel",
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
                "gltf": "#tableSkirtModel",
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

    "shelf":
        [
            {
                "id": "shelfBack",
                "class": "grabbable shelf shelfBack",
                "furniture": "tier: 0; totalSnapPoints: 9;",
                "mixin": "part",
                "scale": "0.125 0.125 0.125",
                "gltf": "#shelfBackModel",
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
                "gltf": "#shelfRackModel",
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
                "gltf": "#shelfSideModel",
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
                "gltf": "#shelfSkirtModel",
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
                "gltf": "#shelfTopModel",
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
                "scale": "0.13 0.13 0.13",
                "gltf": "#shelfBottomModel",
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
}
