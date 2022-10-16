const make = url => new URL(url);


const setProtocol = (data, protocol) => {
    data.protocol = protocol;
    return true;
}

const getProtocol = data => data.protocol;


const setHost = (data, host) => {
    data.host = host;
    return true;
}

const getHost = data => data.host;


const setPath = (data, path) => {
    data.pathname = path;
    return true;
}

const getPath = data => data.pathname;

const setQueryParam = (data, key, value) => {
    const params = data.searchParams;
    params.set(key, value);
    return true;
}

const getQueryParam = (data, paramName, def = null) => {
   const params = data.searchParams;
   return params.get(paramName) ?? def;
}

const toString = data => data.toString();

