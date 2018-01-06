//Initialise the JSON Object
var obj = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"image":
		{
			"url": "images/0001.jpg",
			"width": 200,
			"height": 200
		},
	"thumbnail":
		{
			"url": "images/thumbnails/0001.jpg",
			"width": 32,
			"height": 32
		}
};

//Calling getObjPath(jsObj, path) and results are updated in console log
var result=getObjPath(obj, "image.url");
console.log("getObjPath(obj, image.url) ="+result);

var resultOne=getObjPath(obj, "image.height");
console.log("getObjPath(obj, image.height) ="+resultOne);

var resultTwo=getObjPath(obj, "thumbnail.url");
console.log("getObjPath(obj, thumbnail.url) ="+resultTwo);

var resultThree=getObjPath(obj, "thumbnail.width");
console.log("getObjPath(obj, thumbnail.width) ="+resultThree);

var resultFour=getObjPath(obj, "type");
console.log("getObjPath(obj, type) ="+resultFour);

var resultFive=getObjPath(obj, "typist");
console.log("getObjPath(obj, typist) ="+resultFive);

var resultSix=getObjPath(obj, "class.name");
console.log("getObjPath(obj, class.name) ="+resultSix);

//Search function to get json object path value
function getObjPath(jsObj, path) {
    if (!(jsObj instanceof Object) || typeof (path) === "undefined") {
        throw "Not valid argument:jsonData:" + jsObj + ", path:" + path;
    }
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, ''); // strip a leading dot
    var ArrayOfPath = path.split('.');
    for (var i = 0, length = ArrayOfPath.length; i < length; ++i) {
        var key = ArrayOfPath[i];
        if (key in jsObj) {
            
            if (jsObj[key] !== null) {
                jsObj = jsObj[key];
                 
            }else {
                return null;
            }
        } else {
            return null;
        }
    }
    return jsObj;
}