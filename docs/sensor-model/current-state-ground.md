# State of existing plugins for sensors for underwater simulation

GPS
--------------

Current Status


*   [System](https://gazebosim.org/api/gazebo/6.6/classignition_1_1gazebo_1_1System.html) that handles navigation satellite sensors, such as GPS, that reports position and velocity in spherical coordinates (latitude / longitude) over Ignition Transport.
*   A much more comprehensive GazeboRosGps exists for Gazebo and can be used while porting to ignition.
*
    

Needed Development

*   Plugin takes no parameters and currently there is no assumed noise model for the plugin.

References


*   [https://gazebosim.org/api/gazebo/6.6/classignition\_1\_1gazebo\_1\_1systems\_1\_1NavSat.html#details](https://gazebosim.org/api/gazebo/6.6/classignition_1_1gazebo_1_1systems_1_1NavSat.html#details)
*   [https://github.com/gazebosim/gz-sim/pull/1248](https://github.com/gazebosim/gz-sim/pull/1248)

IMU
--------------

Current Status


*   Ignition Gazebo has an IMU plugin that eports **vertical position**, **angular velocity** and **linear acceleration** readings over Ignition Transport.
*   IMU sensors now support custom `orientation_reference_frame`
*   A much comprehensive GazeboRosIMU sensor plugin exists and can be used as a reference for porting.

Needed Development


*   Plugin takes no other parameters and currently there is no assumed noise model for the plugin.
*   A custom version of this with the required specification and noise models would be needed.

  

References


*   [http://docs.ros.org/en/api/gazebo\_plugins/html/classgazebo\_1\_1GazeboRosImuSensor.html](http://docs.ros.org/en/api/gazebo_plugins/html/classgazebo_1_1GazeboRosImuSensor.html)
*   [https://gazebosim.org/api/sensors/3.0/ImuSensor\_8hh\_source.html](https://gazebosim.org/api/sensors/3.0/ImuSensor_8hh_source.html)
*   [https://gazebosim.org/api/gazebo/5.0/classignition\_1\_1gazebo\_1\_1systems\_1\_1Imu.html](https://gazebosim.org/api/gazebo/5.0/classignition_1_1gazebo_1_1systems_1_1Imu.html)
*   [https://github.com/gazebosim/gz-sim/tree/ign-gazebo6/src/systems/imu](https://github.com/gazebosim/gz-sim/tree/ign-gazebo6/src/systems/imu)

Doppler Velocity Log
--------------

Current Status


*     
    

Needed Development


*     
    

  

References


*   [https://field-robotics-lab.github.io/dave.doc/contents/dave\_sensors/whn\_dvl\_examples/](https://field-robotics-lab.github.io/dave.doc/contents/dave_sensors/whn_dvl_examples/)
*   [https://github.com/uuvsimulator/uuv\_simulator/blob/master/uuv\_sensor\_plugins/uuv\_sensor\_ros\_plugins/include/uuv\_sensor\_ros\_plugins/DVLROSPlugin.hh](https://github.com/uuvsimulator/uuv_simulator/blob/master/uuv_sensor_plugins/uuv_sensor_ros_plugins/include/uuv_sensor_ros_plugins/DVLROSPlugin.hh)
*   [https://github.com/uuvsimulator/uuv\_simulator/blob/master/uuv\_sensor\_plugins/uuv\_sensor\_ros\_plugins/src/DVLROSPlugin.cc](https://github.com/uuvsimulator/uuv_simulator/blob/master/uuv_sensor_plugins/uuv_sensor_ros_plugins/src/DVLROSPlugin.cc)

Forward Looking Sonar
--------------

Current Status


*   FLS Sensors do not exists for Ignition gazebo but there is an implementation in classic gazebo asa

  

Some of the params for the Multibeam FLS Plugin


*   **Source level (SL)** : predefined by sonar specification
*   **Transmission Loss (TL)** : path, absorption coefficient with ocean (temp, depth) Currently, a typical 0.0354 dB/m constant used, with a straight-line path (=distance)
*   **Noise Level (NL)** : Ocean dependent, (maybe some statistics models exists). Currently, Gaussian noise is used.
*   **Directivity index (DI)** : Sonar transducer specification For our purpose, having sonar resolution from the catalogue provides enough information considering typical characteristics of far-field directivity. Currently, half-power width of sinc function is used..
*   **Target strength (TS)** : Object material, incident angle dependent. Currently, 1E-4 reflectivity constant used.

  

Needed Development


  

References


*   [https://field-robotics-lab.github.io/dave.doc/contents/dave\_sensors/Multibeam-Forward-Looking-Sonar/](https://field-robotics-lab.github.io/dave.doc/contents/dave_sensors/Multibeam-Forward-Looking-Sonar/)
*   [https://community.gazebosim.org/t/community-meeting-multibeam-sonar-ignition-physics-mar-2022/1341](https://community.gazebosim.org/t/community-meeting-multibeam-sonar-ignition-physics-mar-2022/1341)

 