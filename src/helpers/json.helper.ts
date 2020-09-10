function normalizeJson(json){
    console.log('normalizeJson',json);
    if(json instanceof Array)
      return json
    let data = {};
    const keys = Object.keys(json);
  
    if(keys.length===0)
        return json;

    for(const k of keys){
      if(json[k] instanceof Object){
        data[k] = normalizeJson(json[k])
      }else if(json[k] !== undefined){
        data[k] = json[k];
      }
    }
    return data;
  }

export {normalizeJson};