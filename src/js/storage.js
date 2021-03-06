async function setOptionValue(category, optName, value) {
    const store = await getAllOptions(category);
    return new Promise((resolve, reject) => {
        const obj = {};
        store[optName] = value;
        obj[category] = store;
        chrome.storage.local.set(obj, () => {
            resolve();
        });
    });
}

function getAllOptions(category) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(category, (items) => {
            resolve(items[category]);
        });
    });
}

async function getOption(category, name) {
    const options = await getAllOptions(category);
    if (options !== undefined) {
        return options[name];
    }
}

function createStore(category) {
    return new Promise((resolve, reject) => {
        const store = {};
        store[category] = {};
        chrome.storage.local.set(store, () => {
            resolve();
        });
    });
}

function getOptions(category, names) {
    return Promise.all(names.map(x => getOption(category, x)));
}