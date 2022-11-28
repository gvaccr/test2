
Launching the Simulation with the Terrain Model
===============================================

  

The maps generated above along with the downloaded DEM (Digital Elevation Model)/heightmap can be used to create a terrain model in simulation using a `.sdf` file as discussed before. The simulation

Requirements
------------

*   [Ignition Gazebo Garden (~v7.0)](https://gazebosim.org/docs/garden/install_ubuntu_src) or later installed. As of now, Ignition Gazebo Garden is the latest and available for source as well as binary install.

Installation
------------

*   Create a workspace

```
mkdir -p colcon_ws/src
```

  

*   Change directory to previously created `src` directory and clone the repo.

```
git clone git@github.com:TechnoYantra/Simulator-DRDO.git
```

  

Launching the Simulation (Using Gazebo Launch File)
---------------------------------------------------

*   Source your ignition gazebo garden workspace if you have installed it by source.
*   Export `GZ_SIM_RESOURCE_PATH` environment variable.

```
export             GZ_SIM_RESOURCE_PATH=cloned/repo/heightmap_ign_gazebo/dem_examples/worlds:cloned/repo/heightmap_ign_gazebo/dem_examples/models
```

  

*   Move to the `launch` directory in `dem_examples` package.
*   The directory contains a custom `dem_world.ign` ignition launch file. Use the following command to launch Gazebo with the launch file

```
gz launch dem_world.ign
```

This launches a moon-like desert terrain by default.

*   Different terrains can be launched using the `terrainName` argument while launching as follows:

```bash
gz launch dem_world.ign terrainName:=udaipur
```

  

The above command launches the Udaipur terrain using the above-generated color map and DEM (Digital Elevation Model). The gif below shows the launched terrain in Gazebo.

  

![](https://t37413662.p.clickup-attachments.com/t37413662/6c188b3c-6652-41e9-9f95-6bc8440cfc50/188221093-67bdd403-e536-40da-85d6-b1e730c9aa65.gif)

  

**Note:** Currently the simulation uses the `empty_world.sdf` as the default world file to set things like light source, physics engine settings, etc. It can be found in the `worlds` directory. A different world can be used by using the `worldName` argument same as `terrainName` as shown above.
