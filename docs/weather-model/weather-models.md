# Weather Models


The simulation's weather models like rain, fog, dust, and clouds are made using the particle emitter system provided by the ignition gazebo.
  

A particle emitter generates a stream of particles. The particle emitter can be added like any other model added in the scene and can be added to the link of any model of such and is created using the `CreateParticleEmitter method`. The particle emitter system can be configured using the following parameters:

  

*   Emitter size: Adjust the dimensions of the volume from which the particles are emitted.
*   Rate: Set the number of particles per second emitted.
*   Duration: This parameter can be used to automatically disable the emitter after some time.
*   Emitting: Enable/Disable the emission of particles.
*   Particle size: Adjust the particle dimensions.
*   Lifetime: Set the number of seconds each particle "lives" before being destroyed.
*   Material: Set the material which all particles in the emitter will use.
*   Velocity: Set a velocity range and each particle is emitted with a random velocity within this range.
*   Color range: Set the color for all particles emitted. You have two options to set the color.
    *   Using two color values: The actual color is interpolated between these two colors along the particle's lifetime.
    *   Using an image: The colors are taken from a specified image file. The range of color values begins from the left side of the image and moves to the right over the lifetime of the particle, therefore only the horizontal dimension of the image is used.
*   Scale rate: Adjust the amount by which to scale the particles in both `X` and `Y` direction per second.

  

  

 
Weather Models using Particle Emitter
-------------------------------------

Using different parameters for the particle emitter system a variety of weather models are simulated.

  

### Rain

*   To simulate rain-like particles in the world, a model is created with a particle emitter attached to its link emitting a high rate of thin particles of small size.
*   The model is set to a certain height with the emitter facing downwards orientation to emmit the rain particles.
*   The particles are set to a high velocity to simulate the water falling from a height
*   The rain emitter model can be scaled up in the x and y direction to increase the area covered by the rain

![](https://t37413662.p.clickup-attachments.com/t37413662/1726d2d7-d756-4f81-b91e-84493890cede/rain.gif)

  

  

### Dust

*   To simulate a dust-like pattern in the simulation, the dust\_emitter model with the particle emitter attached to its link emits dust-colored particles in the direction of the wind which can be set up by the user.
*   The dust\_emitter is set on the ground level to simulate the dust particles rising from the ground,
*   The particles are set to a low velocity

![](https://t37413662.p.clickup-attachments.com/t37413662/af32b7be-cb40-4cb8-b8a8-bc57c67058d4/dust.gif)

  

  

### Fog

*   The fog is created with the help of a particle emitter attached to a link of the fog generator model in the world file that is emitting colored particles in an upward direction.
*   The fox emitter model can be scaled up in the x and y direction to increase the area covered by the fog
*   The particle emitter is set to produce particles at a low velocity.

[fog](https://t37413662.p.clickup-attachments.com/t37413662/cbcf3aab-959b-4a2b-a60b-5449c953dce1/fog)

  

### Clouds

*   The clouds are simulated using a model with a particle emitter system attached to its link emitting particles in a horizontal direction in a could-like color (light grey) at a certain height.
*   The particles move at a slow velocity to simulate the clouds
*   The area of the clouds can be increased by increasing the x and y dimensions of the particle emitter
*     
    

  

  

  

Effects on Sensors
------------------

The particle emitters add certain noise and hindrance to the sensor data to provide a realistic feel. Here's an image displaying the effects of the particle emitter system on several sensors:

*   The RGB camera will have a visual block to the surroundings
*   The Depth camera will have some noise introduced due to the emitted particles
*   Certain values of the LIDAR sensor will be obstructed due to the particle emitter system
*   The thermal camera will not be affected by the particle emitter

  

![](https://t37413662.p.clickup-attachments.com/t37413662/30be4085-a8e9-46ab-9ac2-e7b67aab5929/Screenshot%20from%202022-09-24%2003-50-36.png)