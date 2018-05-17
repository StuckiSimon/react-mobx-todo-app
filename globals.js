const response = {
  json: () => {
    return new Promise(resolve => resolve([]))
  }
}

global.fetch = jest.fn((() => new Promise(resolve => resolve(response))));