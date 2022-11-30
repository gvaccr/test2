export default {
    title: 'DRDO Simulator',
    description: 'Documentation for DRDO Simulator Development Project',
    outDir: '../public',
    base: '/test-docs',
    themeConfig: {
        algolia: {},
        nav: [
          { text: 'Environment Model', link: '/env-model/overview' },
          { text: 'Weather Model', link: '/weather-model/weather-models' },
          { text: 'Ground Scenarios', link: '/scenario-model/terrain-scenarios' },
          { text: 'Primitive Models', link: '/primitive-model/primitive-models' },
          { text: 'Current State of Ground Sensors', link: '/sensor-model/current-state-ground' },
          { text: 'Vehicle Models', link: '/vehicle-model/' },
        ],
        sidebar: [
            {
              text: 'Environment Model',
              items: [
                { text: 'Overview', link: '/env-model/overview' },
                {  text: 'Generating Real World Terrain', link: '/env-model/gen-real-world-terrain' },
                {  text: 'Simulating Terrain', link: '/env-model/sim-terrain-model' },
                {  text: 'Issues and Bugs', link: '/env-model/issues-bugs' },
              ]
            },
            {
                text: 'Weather Model',
                items: [
                    { text: 'Weather Models', link: '/weather-model/weather-models' },
                    { text: 'Time of Day', link: '/weather-model/time-of-day' },
                    { text: 'Weather Interface', link: '/weather-model/weather-interface' },
                ]
            },
            {
                text: 'Scenario Model',
                items: [
                    { text: 'Ground Scenarios', link: '/scenario-model/terrain-scenarios' },
                    { text: 'Underwater Scenarios', link: '/scenario-model/underwater-scenarios' },
                ]
            },
            {
                text: 'Primitive Model',
                items: [
                    { text: 'Primitive Models', link: '/primitive-model/primitive-models' },
                ]
            },
            {
                text: 'Sensor Model',
                items: [
                    { text: 'Current State of Ground Sensors', link: '/sensor-model/current-state-ground' },
                    { text: 'Current State of Underwater Sensors', link: '/sensor-model/current-state-underwater' },
                ]
            },
            {
                text: 'Vehicle Model',
                items: [
                    { text: 'Vehicle Models', link: '/vehicle-model/' },
                ]
            }            
          ]
      }
  }