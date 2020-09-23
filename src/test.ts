var Validator = require('jsonschema').Validator;

Validator = new Validator();

let data = {
    "draft":{
        "title":"  Q T 1  ",
        "body":"Q B 1",
        "tags":["T1","T2","T3"]
    },
    "published":{
        "title":"",
        "body":"",
        "tags":[]
    },
    "customAttributes":{
        "random":"value",
        "superRandom":{
            "value":"stranger"
        },
        "places":["San Jose","SFO"]
    }
};

const schema = {
    "type": "object",
    "additionalProperties": false,
    "definitions": {
        "contentSchema": {
          "id": "/contentSchema",
          "type": "object",
          "required":[
            "title",
            "body",
            "tags"
          ],  
          "properties": {
            "title": {
              "type": "string"
            },
            "body": {
              "type": "string"
            },
            "tags": {
              "type": "array",
              "uniqueItems": true,
              "items": {
                "type": "string"
              }
            },
            "dummy":{
                "type":"string"
            }
          }
        }
      },
    "properties": {
      "draft": {
        "$ref": "/contentSchema"
      },
      "published": {
        "$ref": "/contentSchema"
      },
      "customAttributes":{
          "type":"object"
      },
      "status":{
          "type":"string",
          "enum":["draft","published","deleted"]
      }
    }
  };

if("definitions" in schema){
    for(const key of Object.keys(schema["definitions"])){
        const schemaObj = schema["definitions"][key]
        Validator.addSchema(schemaObj,schemaObj["id"]);
    }
}

  console.log(data);

  console.log('SchemaValidationResult',Validator.validate(data,schema),'SchemaValidationResult');

  console.log(data);
