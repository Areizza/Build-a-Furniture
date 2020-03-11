'use strict';

const templates =
        {
            "table":
            [
                {
                    "id": "tableTop",
                    "class": "grabbable",
                    "furniture": "tier: 0; totalSnapPoints: 4;",
                    "mixin": "part",
                    "scale": "2 2 2",
                    "gltf": "#tableTopModel",
                    "body": "type: dynamic; mass: 20; shape: none;",
                    "shape__main": "shape: box; halfExtents: 0.72 0.061 0.72",
                    "position": "0 0.09 0",
                    "rotation": "180 0 0",
        
                    "entity":
                    [
                        {
                            "position": "0.62 -0.07 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.07 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "-0.62 -0.07 0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        },
                        {
                            "position": "0.62 -0.07 -0.62",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 1; snapTo: 2;"
                        }
                    ]
                },
        
                {
                    "id": "tableLeg",
                    "class": "grabbable",
                    "mixin": "tableLeg",
                    "position": "0 0.7 -4",
        
                    "entity":
                    [
                        {
                            "position": "0 0.345 0",
                            "class": "snapPoint",
                            "mixin": "sphereCollider",
                            "snap_point": "snapId: 2; snapTo: 1;"
                        }
                    ]
                }
            ]

        }

AFRAME.registerComponent('spawner',
    {
        schema:
        {
            spawnPosition: { type: 'vec3', default: { x: 0, y: 0, z: 0 } },
            furniture: { type: 'string', default: ''},
            piece: { type: 'string', default: ''},
        },

        init: function ()
        {
            const self = this;

            this.el.addEventListener('click', function (event)
            {
                self.makeTemplate(self.data.furniture, self.data.piece);
                //self.spawnPiece();
            });
        },

        

        makeTemplate: function(furniture, piece)
        {
            let jsonStr= templates;
            //let jsonObj = JSON.parse(jsonStr);

            let search = eval("jsonStr." + furniture);
            let result;

            let output = "<a-entity "

            for (let i = 0; i < search.length; i++)
            {
                if (search[i].id == piece) {
                    //console.log(search[i].id);
                    result = search[i];
                }
            }
            
            console.log(result);

            // for(let property in result) {
            //     output += property + "='" + result.property + "' ";
                    //THIS IS SO DUMB THAT IT DOESN'T WORK >:(
            //     console.log(property)
            //     //console.log(result.id);
            // }

            console.log(result.entity)

            output += "id= '" + result.id + "' ";
            output += "class= '" + result.class + "' ";
            output += "furniture= '" + result.furniture + "' ";
            output += "mixin= '" + result.mixin + "' ";
            output += "scale= '" + result.scale + "' ";
            output += "gltf-model= '" + result.gltf + "' ";
            output += "body= '" + result.body + "' ";
            output += "shape__main= '" + result.shape__main + "' ";
            output += "position= '" + result.position + "' ";
            output += "rotation= '" + result.rotation + "'>";

            for (let i = 0; i < result.entity.length; i++)
            {
                output += "<a-entity ";
                output += "position= '" + result.entity[i].position + "' ";
                output += "class= '" + result.entity[i].class + "' ";
                output += "mixin= '" + result.entity[i].mixin + "' ";
                output += "snap-point= '" + result.entity[i].snap_point + "'>";
                output += "</a-entity>";
            }

            output += "</a-entity>";

            console.log(output);

            //console.log(jsonStr.table[0]);
            //console.log(jsonStr.length);
        
        },

        spawnPiece: function ()
        {
            const self = this;
            const sceneEl = this.el.sceneEl;

            let entity = document.createElement('a-entity');
            // entity.setAttribute('template', { src: self.data.templateSrc });
            entity.setAttribute('position', { x: self.data.spawnPosition.x, y: self.data.spawnPosition.data.y, z: self.data.spawnPosition.z });

            sceneEl.appendChild(entity);
        },
    });