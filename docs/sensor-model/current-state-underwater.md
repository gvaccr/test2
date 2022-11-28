# Review of Hydrodynamic simulation of underwater vehicles on Ignition-Gazebo

Overview
========

Simulation of underwater vehicles in ignition gazebo is performed using a combination of four plugins

*   Buoyancy plugin
*   Hydrodynamics plugin
*   Thruster plugin
*   BuoyancyEngine Plugin

Buoyancy plugin
-----------
  
Description


*   A system that simulates buoyancy of objects immersed in fluid. This system must be attached to the world and this system will apply buoyancy to all links that have inertia and collision shapes.
*   The volume and center of volume will be computed for each link, and stored as components. During each iteration, Archimedes' principle is applied to each link with a volume and center of volume component.
*   The force on each link is described as follows

![](https://t37413662.p.clickup-attachments.com/t37413662/2dd450f2-605a-413a-9420-55dc17b66a30/image.png) where ,

![](https://t37413662.p.clickup-attachments.com/t37413662/e928e651-6763-4ddf-b001-b9a80ffdd4e7/image.png)

  

System Parameters


*   **_uniform\_fluid\_density :_** sets the density of the fluid that surrounds the buoyant object \[ kg/m^3\]
*   **_graded\_buoyancy :_** allows you to define a world where the buoyancy changes along the Z axis. An example of such a world could be if we are simulating an open ocean with its surface and under water behavior.
*   **_default\_density_** **_:_** is the default fluid which the world should be filled with. \[Units: kgm^-3\]
*   **_density\_change_** **:** allows you to define a new layer.
*   **_above\_depth_** **:** this determine the height at which the next fluid layer should start. \[m\]

  

Notes


*   One of the primary demands of a maritime simulation is the option to simulate scenarios where both surface and underwater vessels can be tested. For this particular situation the Buoyancy plugin allows for creation of two different fluids where one is water and the other is air.

  

Hydrodynamics plugin
-----------

Description


*   Hydrodynamics refers to the behavior of bodies in water. It includes forces like linear and quadratic drag, buoyancy etc.
*   This plugin is based of Fossen's equations described in "Guidance and Control of Ocean Vehicles" . This should be used together with buoyancy plugin to help simulate behavior of maritime vehicles.
*   The nonlinear model representation detailed in Fossen's equations and hence implemented in the plugin is the following:

  

![](https://t37413662.p.clickup-attachments.com/t37413662/32643ebd-697b-4a59-8714-de086ed0f482/image.png) where

  

![](https://t37413662.p.clickup-attachments.com/t37413662/58e68ea8-b1f2-4a12-b84c-6385dbed9721/image.png)

  

![](https://t37413662.p.clickup-attachments.com/t37413662/62ab0811-bb3f-4940-8d17-f2375417c58a/image.png)

  

![](https://t37413662.p.clickup-attachments.com/t37413662/dde4d654-bbdc-4905-ad32-b869bf2412de/image.png)

  

![](https://t37413662.p.clickup-attachments.com/t37413662/7f18655e-86a1-41d8-bbf7-3b8468d9a87c/image.png)![](https://t37413662.p.clickup-attachments.com/t37413662/5f45e17e-1ff5-4441-9860-af4fb18d0eed/image.png)

  

![](https://t37413662.p.clickup-attachments.com/t37413662/09209729-2ae9-4396-ba0e-c44e978ac27d/CodeCogsEqn(8).gif)

  

System Parameters


*   **_xDotU_** : Added mass in x direction \[kg\]
*   **_yDotV :_** Added mass in y direction \[kg\]
*   **_zDotW_** : Added mass in z direction \[kg\]
*   **_kDotP_** : Added mass in roll direction \[kgm^2\]
*   **_mDotQ_** : Added mass in pitch direction \[kgm^2\]
*   **_nDotR_** : Added mass in yaw direction \[kgm^2\]
*   **_xUU_** : Stability derivative, 2nd order, x component \[kg/m\]
*   **_xU_** : Stability derivative, 1st order, x component \[kg\]
*   **_yVV_** : Stability derivative, 2nd order, y component \[kg/m\]
*   **_yV_** : Stability derivative, 1st order, y component \[kg\]
*   **_zWW_** : Stability derivative, 2nd order, z component \[kg/m\]
*   **_zW_** : Stability derivative, 1st order, z component \[kg\]
*   **_kPP_** : Stability derivative, 2nd order, roll component \[kg/m^2\]
*   **_kP_** : Stability derivative, 1st order, roll component \[kg/m\]
*   **_mQQ_** : Stability derivative, 2nd order, pitch component \[kg/m^2\]
*   **_mQ_** : Stability derivative, 1st order, pitch component \[kg/m\]
*   **_nRR_** : Stability derivative, 2nd order, yaw component \[kg/m^2\]
*   **_nR_** : Stability derivative, 1st order, yaw component \[kg/m\]

  

Differences between the equations in \[[Reference](http://ave.dee.isep.ipp.pt/~jes/english/publications/mmar07.pdf)\] and this plugin


*   L(ν) is the lift drag matrix and is written explicitly in the reference whereas here the Damping matrix D(v) accounts for the lift drag as well.
*   ![](https://t37413662.p.clickup-attachments.com/t37413662/e4dcf952-d1af-416c-ba2e-e9a0bb8f6a89/image.png) and ![](https://t37413662.p.clickup-attachments.com/t37413662/416c6b77-b8d3-4010-97b1-37b4514cb256/image.png) are assumed because of the chosen model's symmetry whereas in the plugin no such assumption is made.

  

Thruster plugin
-----------

Description


*   This plugin simulates a maritime thruster for boats and underwater vehicles. It uses the equations described in **Fossen's "Guidance and Control of Ocean Vehicles"**
*   This plugin takes force in Newtons and applies it to the thruster. It also calculates the theoretical angular velocity of the blades and spins them accordingly.

  

System Parameters


*   **_fluid\_density_** : The fluid density of the liquid in which the thruster is operating in.
*   **_propeller\_diameter_**: The diameter of the propeller in meters
*   **_thrust\_coefficient_**: This is the coefficient which relates the angular velocity to actual thrust.![](https://t37413662.p.clickup-attachments.com/t37413662/1a962a95-d26a-4b20-8cda-d35414a61596/image.png)

Where omega is the propeller's angular velocity in rad/s.

*   **_velocity\_control_** : If true, use joint velocity commands to rotate the propeller. If false, use a PID controller to apply wrenches directly to the propeller link instead.
*   **_p\_gain_** : Proportional gain for joint PID controller.
*   **_i\_gain:_** Integral gain for joint PID controller.
*   **_d\_gain:_** Derivative gain for joint PID controller.

  

BuoyancyEngine plugin
-----------

  

Description


This class provides a simple mechanical bladder which is used to control the buoyancy of an underwater glider. It uses Archimedes' principle to apply an upward force based on the volume of the bladder.

  

System Parameters


*   **_min\_volume_** : Minimum volume of the engine
*   **_neutral\_volume_** : At this volume the engine has neutral buoyancy. Used to estimate the weight of the engine
*   **_default\_volume_** : The volume which the engine starts at
*   **_max\_volume_** : Maximum volume of the engine
*   **_max\_inflation\_rate_** : Maximum inflation rate for bladder
*   **_fluid\_density_** : The fluid density of the liquid its suspended in

  

References


*   [https://github.com/gazebosim/gz-sim/pull/748](https://github.com/gazebosim/gz-sim/pull/748)
*   [Guidance and Control of Ocean Vehicles by Thor I. Fossen](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9goqm37H6AhWrRmwGHVocCkAQFnoECAsQAQ&url=http%3A%2F%2Fkashti.ir%2Ffiles%2FENBOOKS%2FGuidance%2520and%2520Control%2520of%2520Ocean%2520Vehicles%2520Fossen.pdf&usg=AOvVaw0EZoioAorldpy1M4cQqTw8)
*   [https://gazebosim.org/api/gazebo/5.1/classignition\_1\_1gazebo\_1\_1systems\_1\_1Hydrodynamics.html](https://gazebosim.org/api/gazebo/5.1/classignition_1_1gazebo_1_1systems_1_1Hydrodynamics.html)
*   [https://gazebosim.org/api/gazebo/6.3/classignition\_1\_1gazebo\_1\_1systems\_1\_1Thruster.html](https://gazebosim.org/api/gazebo/6.3/classignition_1_1gazebo_1_1systems_1_1Thruster.html)
*   [https://gazebosim.org/api/gazebo/6.1/classignition\_1\_1gazebo\_1\_1systems\_1\_1Buoyancy.html](https://gazebosim.org/api/gazebo/6.1/classignition_1_1gazebo_1_1systems_1_1Buoyancy.html)
