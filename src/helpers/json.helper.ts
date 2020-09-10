function normalizeJson(json){
    console.log('normalizeJson',json);
    let data = {};
    for(const k of Object.keys(json)){
        if(typeof(json[k]) === typeof({})){
        data[k] = normalizeJson(json[k])
        }else if(json[k] !== undefined){
        data[k] = json[k];
        }
    }
    return data;
}

export {normalizeJson};