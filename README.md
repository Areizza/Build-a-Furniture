# :hammer_and_wrench: Build-a-Furniture
Build-a-Furniture is a 3D VR game with the main objective of two players working together to find furniture pieces in a warehouse and build furniture in the living room.

Have you ever wanted to try building furniture? We would like to introduce a hassle-free method to learn this life skill! In this immersive VR experience, two players will collaboratively build real-scale furniture. We were inspired by the experience of following instructions and building IKEA furniture. In translating this to a video game, we introduce two player roles: a Finder and a Builder.

![Game Screenshots](https://media.discordapp.net/attachments/279016447131385857/734789298225676338/screenshots.png)

The **Finder** looks for the required furniture pieces in the **Warehouse** and sends them to the Builder via the green shipping platform.

The **Builder** puts the pieces together, as delivered via the chimney, and builds the furniture in the **Living Room**.

Both players must communicate their specific needs to each other since the list of required pieces are shown only to the Builder and the instructions on how to build the furniture are shown only to the Finder. For example, the symbols above the shipping platform indicate how the furniture pieces connect. We hope to teach homeowners and realists how to build furniture to furnish their dream living room. People of all ages should be able to enjoy our simple game and there are no language limitations as all instructions are displayed with visuals only.

## :construction: Warehouse

![Warehouse](https://media.discordapp.net/attachments/279016447131385857/734784091995504701/warehouse.png?width=866&height=562)

The Warehouse is manned by the Finder on desktop to gather materials. Every building component the Builder requires can be found here along with other extraneous pieces to add a
degree of challenge. The Warehouse has aisles organized by context of parts (i.e. legs, top, seat, shelf, back, plank, etc.). This room is usually clean and organized but can become messy and difficult to manage as the Finder continues to spawn more pieces (with a hard limit on how many parts can be spawned at once). The visual blueprints to the objective are displayed above the shipping platform and must be relayed to the Builder.

## :house: Living Room

![Living Room](https://media.discordapp.net/attachments/279016447131385857/734784225794064485/livingRoom.png?width=963&height=562)

On the other system, the Builder in VR operates in their Living Room. As the building components are shipped to their location from the Warehouse via the chimney. The parts list
for the furniture being built are displayed on the TV and update based on current building progress and must be relayed to the Finder. This room contains everything expected of a traditional living room such as sofas, lamps, books, a TV, and windows. The missing pieces such as tables, chairs, bookshelves, etc. are left to be built by the player.

## :notebook_with_decorative_cover: Furniture Catalogue
![Catalogue](https://media.discordapp.net/attachments/279016447131385857/734783071294980136/Catalogue.png)

3 options are currently available to be built: a white table, a brown chair, and a blue shelf. The catalogue displays the completed items with a difficulty rating and a short description. This catalogue is located on the Living Room wall by the TV, where the Builder can click one of the furniture options to start a new build.

## :video_game: Platform
- [x] Desktop, keyboard and mouse - Our game is built for the web using Javascript, HTML, and CSS

This game was originally created for a school project requiring an asynchronous cooperative experience. Our initial plan was to have the Finder player use a standard game controller and PC setup while the Builder player has a VR set up. An example of the physical setup is shown in the diagram below. However, due to some technical difficulties with acquiring hardware, we had to change our target platform from using the VR headset and controller to using desktop with mouse and keyboard.

![Physical Setup by Priscilla Lo](https://media.discordapp.net/attachments/279016447131385857/734777126883950592/PhysicalSetup.png)

## :sweat_drops: Process and Challenges
![Project Timeline](https://media.discordapp.net/attachments/279016447131385857/734794183516356638/projectPlan.png?width=1083&height=296)
Above is an overview of our intiial project timeline. As planned by our project manager, we set up weekly goals and meetings to discuss our current development progress. These can be reviewed in more detail on our [project board](https://github.com/Areizza/Build-a-Furniture/projects/1).

The application required many small pieces that could each have multiple snap-points, and each snap-point has an image, but these objects had to be spawned dynamically on demand for both the Builder and the Finder while remaining consistent.  The best solution we could find was to create a template JSON file that held the important data for all the furniture pieces, and a specialised serialiser takes this data and converts it to Aframe entities.  In addition to this, the bounding shapes and snap-points all had to be manually placed and created for each individual piece, which was incredibly tedious.

The biggest challenge was the snapping functionality, which continually caused issues or required more functionality throughout the development process.  As the Aframe Physics system cannot handle reparenting physics objects, every time an snap occurred, the child piece would have to be duplicated in its entirety (including other snap-points on the child), and then attached to the parent piece, using the relative positions and rotations of the two snap-points to place the new body.  As one object cannot consist of multiple dynamic physics bodies, the bounding shape of the child piece would also have to be added the the parent object. 

Curious about how we got here? Want to learn more about our process? Check us out on our development blog for our weekly updates: https://seismicoctopus.blogspot.com/

## :scream: Known Issues
The markings on the pieces helped visualise how and where pieces are snapped. Previously, as seen on the right, we used emissive maps to show this so it was visible anywhere despite light levels, however, the problem was that they needed to be small enough to be covered up post snap so that they don’t remain visible. As a result, in certain cases, they turned out to be too small to make out the symbols. Our solution to fix this was by connecting larger images of the symbols to the snap points themselves. They appear large an obvious when spawned but will disappear once the snap is complete.

A minor challenge we found branches off from adding images to snap points. We use sphere colliders to detect the collision or intersection of two snap points, which are essential in making the whole mechanic function. Any attempt to hide them only creates this effect of a transparent surface on hover.

Another challenge we faced had to do with the orientation of the pieces being snapped. This issues arise in certain cases where an object snaps to two different points at once like on the chair’s backrest, or when an object is mirrored on both ends of the furniture, such as with the shelf’s sideboards. As seen here, because there are two snapping options and only one is ideal, there’s a chance that the object will snap to the wrong component and create a mess. There’s no way to detach pieces so the only option is to restart.

## :zzz: Conclusion
Were we given more time and personnel, there are several things we would add to improve the experience of our game.
* This includes a detachment element that allows users to remove pieces off of furniture in case they make mistakes.
* Another is a trash can to delete components entirely if the player wishes for any reason. This would also help avoid clutter and not being able to do anything to pieces being spawned continuously in the warehouse.
* We would also improve the movement of how smaller pieces are controlled. While large blocks are easy to drag and move around, smaller pieces such as legs and skirts are not.
* We also want to fully implement VR. We were unable to do this as a result of time and resource constraints but a lot of our movements and controls are designed for VR in mind.
* As an aside, we would also add a crouch mechanic for desktop users to lower their camera and view objects from closer when they’re on the floor or on a lower level of the scaffolds.
* Finally, we would want to add more furniture of varying complexities and additional extraneous pieces.

**:smiley: We hope you enjoy our game! :smiley:**
