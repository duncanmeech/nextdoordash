class KeyValueStore {
  private storeHash = {};
  get(key, defaultValue = {}) {
    if (this.storeHash[key] === undefined) {
      this.storeHash[key] = defaultValue;
      return defaultValue;
    }
    return this.storeHash[key];
  }
  set(key, value) {
    this.storeHash[key] = value;
  }
}

const singleton = new KeyValueStore();

export default singleton;
