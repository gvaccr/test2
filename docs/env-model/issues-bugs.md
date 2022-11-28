
Issues with ODE Physics Engine Collision Detector
=================================================

  

While working with the terrain models, it was found that the collision geometry of the generated terrain model differed from the visual geometry. This caused some unrealistic interactions of objects with the terrain. Some objects seemed to fall through the visual terrain and settle below it as show in the gif below.

  

![](https://t37413662.p.clickup-attachments.com/t37413662/0756318d-2098-40b6-8151-725604d8136c/190496531-63f3f776-4da5-459c-a679-bb21389ba600.gif)

  

The Cause: Triangulation Difference in ODE and OGRE
---------------------------------------------------

Gazebo uses [OGRE](https://www.ogre3d.org/) as the default rendering engine and [ODE](https://www.ode.org/) as the default physics engine. This means that OGRE determines how the models appear and interact with light while ODE determines the physics and how different objects interact with each other.

  

It was found that the above-mentioned issue happened due to the difference in the way OGRE and ODE triangulated the polygons in the meshes. Meshes are triangulated by drawing diagonals in the polygons that make them. OGRE draws diagonals in a zig-zag pattern (alternating direction) (shown below) while ODE does the opposite and draws it in the same direction. (Go through this [Reference](https://github.com/osrf/gazebo/issues/2838) for more details)

  

![](https://t37413662.p.clickup-attachments.com/t37413662/ee2d6ae3-ba15-4963-b0b3-3caa7243ab48/92044871-066b5080-ed34-11ea-9973-19228f8d0516.png)

  

This difference in triangulation causes the collision mesh to be different from the visual mesh and leads to the above-shown issue.

  

The Solution: Use Bullet Collision Detector
-------------------------------------------

An easy solution to this issue is to use the [Bullet Collision Detector](https://pybullet.org/wordpress/) in place of ODE. Bullet, by default, triangulates the mesh the same as ODE but has a flag that we can set which changes it follows OGRE-style triangulation. We can use the bullet collision detector in our simulation world by adding the following to the `<physics>` tag in our world file:

```xml
 <dart> 
   <!-- Heightmaps behave better with the bullet collision detector --> 
   <collision_detector>bullet</collision_detector> 
 </dart> 
```

  

Using Bullet Collision Detector solves the above-mentioned issue as shown in the gif below.

  

![](https://t37413662.p.clickup-attachments.com/t37413662/97af2b95-8951-4c8b-8d62-15d6e2877804/191126749-d8df3be0-8f66-4b78-8513-d433be7363e3.gif)
