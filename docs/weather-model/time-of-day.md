
# Time of Day


The set time feature works on the principle of calculating the position of the sun with respect to time in order to find the angle of depression made by it to the world.

  

![](https://t37413662.p.clickup-attachments.com/t37413662/767d52e1-02f9-46ba-9e21-65057196c0ac/Screenshot%20from%202022-09-24%2009-46-26.png)

  

  

Calculating the Position of the Sun
-----------------------------------

  

*   To calculate the position of the sun, it is assumed that the sun rises from the east at 6 am and sets in the west at 6 pm.
*   A sun model is made in the world file in order to depict the sun using a small yellow sphere.
*   A set small radius is taken not much larger that the world dimensions which acts as the rotating radius for the sun model.
*   A duration variable is calculated using the start time (6 AM) and end time (6 PM)
*   Assuming the sun moves around in a circle, we can calculate the angle of deprivation made by the sun using the duration calculated and the time of day entered by the user using the formula:

> **Angle of depriviation of sun = (PI / duration) \* ( Current time - Start time)**

  

*   Once the angle is calculated, we can also have the X and Z position of the sun using the formula:

> SunX = COS ( **Angle of depriviation of sun ) \* Radius**  
> SunY= SIN ( **Angle of depriviation of sun ) \* Radius**

  

*   After calculating all the necessary variables, the position and orientation of the sun can be set using the `set_pose` service provided by the ignition gazebo.