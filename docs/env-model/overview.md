# Terrain Models


Ignition Gazebo supports the creation of terrain models in simulation using a height map. The following maps are required for the generation of a terrain model in simulation:

*   `Grayscale Heightmaps` images in any common `vector` or `raster` format like: `.tif, .png, etc.`

![](https://t37413662.p.clickup-attachments.com/t37413662/281295c7-e82a-46cf-b749-b136fdc684bd/dem.png)

  

*   `Image Texture` in `.png` format that will be used to render the colors and visual features of the terrain.

![](https://t37413662.p.clickup-attachments.com/t37413662/f4f7cbab-8545-43bf-87d6-523b27008467/color_map.png)

  

*   A `Normal Map` (not compulsory) which simulates how light interacts with the terrain due to smaller irregularities (bumps, rocks, pebbles, etc.) without actually changing the mesh. This prevents the terrain model from becoming complex and having a high polygon count which leads to a smoother simulation.

![](https://t37413662.p.clickup-attachments.com/t37413662/5a3f58b7-119a-4351-856f-5acee5c3967d/normal_map_dem.png)

  

Once all these maps are available, the terrain model can be described using a `.sdf` file that can be parsed by Gazebo just like any other model. The `.sdf` files for terrain models use the `<heightmap>` tag to specify the above-mentioned maps, terrain size, friction, etc. An example `.sdf` snippet for a terrain model can be seen below:

```xml
<model name="udaipur">
        <static>true</static>
        <pose>0 0 -200 0 0 0</pose>
        <link name="link">
            <collision name="collision">
                <geometry>
                    <heightmap>
                        <uri>dem/udaipur.tif</uri>
                        <size>582 582 20</size>
                        <pos>0 0 -200</pos>
                    </heightmap>
                </geometry>
            </collision>
            <visual name="visual">
                <geometry>
                    <heightmap>
                        <use_terrain_paging>false</use_terrain_paging>
                        <texture>
                          <diffuse>materials/textures/color_map.png</diffuse>
                          <normal>materials/textures/normal_map_textures.png</normal>
                          <size>20</size>
                        </texture>
                        <uri>dem/udaipur.tif</uri>
                        <size>582 582 20</size>
                        <pos>0 0 -200</pos>
                    </heightmap>
                </geometry>
            </visual>
        </link>
    </model>
```

  