# Weather-Interface
# Weather Interface

The weather interface is an interactive GUI made using `PYQT5` and `QT Designer` in order to configure the parameters for different weather models set up in the world.

A UI file is created using QT designer generates a blank interface that is imported and controlled using a python script.

  

![](https://t37413662.p.clickup-attachments.com/t37413662/ce886e15-347f-41ae-b307-4e87392c4e3c/Screenshot%20from%202022-09-24%2009-09-15.png)

  

  

  

Changing Weather Parameters
---------------------------

*   The weather models can be toggled ON/OFF using the on-screen button provided in the bottom left corner of the respective weather field. The toggle buttons trigger a function in the python script to publish the desired message on the respective ignition topic to change `emitting` the attribute of the particle emitter.
*   The weather models can be configured by entering the desired values in the respective input fields provided in the given GUI.
*   To publish the values for the changed values in the input fields, use the `publish values` button provided at the top left corner of the GUI. When pressed, it triggered a function to publish the values taken from the input fields to the desired ignition topic in which all the values taken from the input fields are set to the appropriate particle emitter attribute.

  

Clouds Intensity
----------------

*   The clouds in the simulation are turned off by default. To toggle the clouds use the ON/OFF buttons in the clouds field.
*   You can configure the intensity of the clouds using the adjustment slider in the clouds field.
*   The clouds also affect the intensity of light emitted by the sun. That is, the lower the intensity of the clouds, The higher the intensity of light would be.

  

Change Lighting
---------------

*   The lighting system of the simulation world depends on the Time of the Day. The position and angle of deprivation of the sun are calculated depending on the time entered in the interface.
*   The lighting parameters also affect the size and direction of the shadows formed by objects.
*   To change the lighting, enter a time in 24-hour format from 6 to 18 hours. i.e. At 6, the sun starts to rise from the east, and at 18, the sun sets in the west.

  

Default Config
--------------

*   The default values for the weather parameters are loaded for a `YAML` config file while initializing the interface. The default values can be changed by editing the `defalut_config` file in the directory.
*   You can also revert back to the default config settings after changing values in the interface by using the `reset default` button present on the top left corner of the interface.

  

World Size
----------

*   As the size of the simulation can vary from world to world, The weather parameters are needed to be adjusted accordingly.
*   To scale the world accordingly, use the `world scale` field in the interface and enter the x and y dimensions of the world.