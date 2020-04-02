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
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png",
                            "imgRotate": "90 180 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "-0 -0.045 -0.62",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "-0.62 -0.045 0",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "rotate": "0 90 0",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "0.62 -0.045 0",
                            "snap_point": "snapId: 3; snapTo: 4;",
                            "rotate": "0 -90 0",
                            "image": "/assets/graphics/snapPointImages/table_redHeart.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },

                        {
                            "position": "0.62 -0.045 0.62",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "-0.62 -0.045 -0.62",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "-0.62 -0.045 0.62",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
                        },
                        {
                            "position": "0.62 -0.045 -0.62",
                            "snap_point": "snapId: 1; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/table_yellowDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
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
                            "snap_point": "snapId: 2; snapTo: 1;",
                            "image": "/assets/graphics/snapPointImages/table_yellowStar.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
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
                            "position": "0 0.0395 0",
                            "snap_point": "snapId: 4; snapTo: 3;",
                            "image": "/assets/graphics/snapPointImages/table_redCross.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.05 0.05 0.05"
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
                            "position": "3.94 0 0",
                            "snap_point": "snapId: 1; snapTo: 6;",
                            "image": "/assets/graphics/snapPointImages/shelf_yellowTriangle.png",
                            "imgRotate": "0 90 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "-3.94 0 0",
                            "snap_point": "snapId: 1; snapTo: 6;",
                            "image": "/assets/graphics/snapPointImages/shelf_yellowTriangle.png",
                            "imgRotate": "0 90 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 8.67 0",
                            "snap_point": "snapId: 2; snapTo: 8;",
                            "image": "/assets/graphics/snapPointImages/shelf_brownHeart.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 -8.67 0",
                            "snap_point": "snapId: 3; snapTo: 10;",
                            "image": "/assets/graphics/snapPointImages/shelf_purpleHeart.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.4 0.4 0.4"
                        },

                        {
                            "position": "0 6.74 0.09",
                            "snap_point": "snapId: 4; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteHeart.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 4.05 0.09",
                            "snap_point": "snapId: 4; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteHeart.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 1.43 0.09",
                            "snap_point": "snapId: 4; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteHeart.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 -1.25 0.09",
                            "snap_point": "snapId: 4; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteHeart.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        {
                            "position": "0 -4.05 0.09",
                            "snap_point": "snapId: 4; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteHeart.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
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
                            "position": "0 0 -1.54",
                            "snap_point": "snapId: 5; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/shelf_whiteStar.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.4 0.4 0.4"
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
                            "position": "0.285 0.95 -1.74",
                            "snap_point": "snapId: 6; snapTo: 1;",
                            "image": "/assets/graphics/snapPointImages/shelf_yellowHeart.png",
                            "imgRotate": "0 90 0",
                            "scale": "0.4 0.4 0.4"
                        },

                        {
                            "position": "0.285 0.95 1.74",
                            "snap_point": "snapId: 6; snapTo: 1;",
                            "image": "/assets/graphics/snapPointImages/shelf_yellowHeart.png",
                            "imgRotate": "0 90 0",
                            "scale": "0.4 0.4 0.4"
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
                            "position": "0 0.28 0",
                            "snap_point": "snapId: 7; snapTo: 9;",
                            "image": "/assets/graphics/snapPointImages/shelf_greenCross.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.4 0.4 0.4"
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
                            "position": "0 -0.16 1.5",
                            "snap_point": "snapId: 8; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/shelf_brownSquare.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.4 0.4 0.4"
                        },
                        
                        {
                            "position": "0 -0.16 -1.75",
                            "snap_point": "snapId: 9; snapTo: 7;",
                            "image": "/assets/graphics/snapPointImages/shelf_greenSquare.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.4 0.4 0.4"
                        }
                    ]
            },

            {
                "id": "shelfBottom",
                "class": "grabbable shelf shelfBottom",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "0.125 0.125 0.125",
                "gltf": "assets/models/shelf/shelfBottom/shelfBottom.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 3.965 0.28 1.79;",

                "entity":
                    [
                        {
                            "position": "0 0 -1.8",
                            "snap_point": "snapId: 10; snapTo: 3;",
                            "image": "/assets/graphics/snapPointImages/shelf_purpleCircle.png",
                            "imgRotate": "0 0 90",
                            "scale": "0.4 0.4 0.4"
                        }
                    ]
            },
        ],

    // CHAIR
    "chair":
        [
            {
                "id": "chairBackLeg",
                "class": "grabbable chair chairBackLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1.2 1.2 1.2",
                "gltf": "assets/models/chair/chairLegBack/chairLegBack.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.0185 0.4445 .0225;",

                "entity":
                    [
                        {
                            "position": "0 0.42 -0.007",
                            "snap_point": "snapId: 1; snapTo: 5;",
                            "image": "/assets/graphics/snapPointImages/chair_greenCircle.png",
                            "imgRotate": "-4.95 0 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "0 0 0.023",
                            "snap_point": "snapId: 2; snapTo: 6;",
                            "image": "/assets/graphics/snapPointImages/chair_redCircle.png",
                            "imgRotate": "2.5 0 0",
                            "scale": "0.04 0.04 0.04"
                        }
                    ]
            },

            {
                "id": "chairFrontLeg",
                "class": "grabbable chair chairFrontLeg",
                "mixin": "part",
                "furniture": "tier: 1; totalSnapPoints: 1;",
                "scale": "1.2 1.2 1.2",
                "gltf": "/assets/models/chair/chairLegFront/chairLegFront.gltf",
                "body": "type: dynamic; mass: 10; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.019 0.2295 0.023;",

                "entity":
                    [
                        {
                            "position": "0 0.231 -0.005",
                            "snap_point": "snapId: 3; snapTo: 00000;",
                            "image": "/assets/graphics/snapPointImages/chair_blueTriangle.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "0 0.09 -0.015",
                            "snap_point": "snapId: 4; snapTo: 8;",
                            "image": "/assets/graphics/snapPointImages/chair_purpleSquare.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.04 0.04 0.04"
                        }
                    ]
            },

            {
                "id": "chairBack",
                "class": "grabbable chair chairBack",
                "furniture": "tier: 0; totalSnapPoints: 9;",
                "mixin": "part",
                "scale": "1.2 1.2 1.2",
                "gltf": "/assets/models/chair/chairBack/chairBack.gltf",
                "body": "type: dynamic; mass: 12; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.212 0.192 0.025",

                "entity":
                    [
                        {
                            "position": "-0.189 0.140 0.003",
                            "snap_point": "snapId: 5; snapTo: 1;",
                            "image": "/assets/graphics/snapPointImages/chair_greenHeart.png",
                            "imgRotate": "-5 13 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "0.189 0.140 0.003",
                            "snap_point": "snapId: 5; snapTo: 1;",
                            "image": "/assets/graphics/snapPointImages/chair_greenHeart.png",
                            "imgRotate": "-5 -13 0",
                            "scale": "0.04 0.04 0.04"
                        },
                    ]
            },

            {
                "id": "chairSeat",
                "class": "grabbable chair chairSeat",
                "mixin": "part",
                "furniture": "tier: 2; totalSnapPoints: 1;",
                "scale": "1.2 1.2 1.2",
                "gltf": "/assets/models/chair/chairSeat/chairSeat.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.204 0.026 0.187;",

                "entity":
                    [
                        {
                            "position": "0.182 0 -0.156",
                            "snap_point": "snapId: 6; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/chair_redDiamond.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "-0.182 0 -0.156",
                            "snap_point": "snapId: 6; snapTo: 2;",
                            "image": "/assets/graphics/snapPointImages/chair_redDiamond.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "0.170 -0.026 0.141",
                            "snap_point": "snapId: 7; snapTo: 0000;",
                            "image": "/assets/graphics/snapPointImages/chair_blueDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.04 0.04 0.04"
                        },
                        {
                            "position": "-0.170 -0.026 0.141",
                            "snap_point": "snapId: 7; snapTo: 0000;",
                            "image": "/assets/graphics/snapPointImages/chair_blueDiamond.png",
                            "imgRotate": "90 0 0",
                            "scale": "0.04 0.04 0.04"
                        }
                    ]
            },

            {
                "id": "chairSkirt",
                "class": "grabbable chair chairSkirt",
                "mixin": "part",
                "furniture": "tier: 2; totalSnapPoints: 2;",
                "scale": "1.2 1.2 1.2",
                "gltf": "/assets/models/chair/chairSkirt/chairSkirt.gltf",
                "body": "type: dynamic; mass: 6; shape: none;",
                "shape__main": "shape: box; halfExtents: 0.0165 0.0175 0.166;",

                "entity":
                    [
                        {
                            "position": "0 0 0.166",
                            "snap_point": "snapId: 8; snapTo: 4;",
                            "image": "/assets/graphics/snapPointImages/chair_purpleCross.png",
                            "imgRotate": "0 0 0",
                            "scale": "0.04 0.04 0.04"
                        }
                    ]
            },
        ],
}
