const templates =
{
    "table":
        [
            {
                "id": "tableTop",
                "class": "grabbable table tableTop",
                "furniture": "tier: 0; totalSnapPoints: 4;",
                "mixin": "part",
                "scale": "2 2 2",
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
                "scale": "2 2 2",
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
                "scale": "2 2 2",
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
                "id": "tableTop",
                "class": "grabbable table tableTop",
                "furniture": "tier: 0; totalSnapPoints: 4;",
                "mixin": "part",
                "scale": "2 2 2",
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
                "scale": "2 2 2",
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
                "scale": "2 2 2",
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
}
