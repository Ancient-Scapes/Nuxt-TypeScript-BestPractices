const config = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    },
    'vue-jest': {
      babelConfig: false
    }
  },
  transform: {
    '.*\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  testMatch: ['<rootDir>/test/*.ts'],
  coveragePathIgnorePatterns: ['.nuxt']
}

module.exports = config
