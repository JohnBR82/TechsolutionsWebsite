    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          },
          content: ['node_modules/preline/dist/*.js'],
          plugins: [ require('preline/plugin') ]
        }
      }
    }