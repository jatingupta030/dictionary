var servicePath = {};
servicePath["fileUpload"] = "/api/file/save";

servicePath["getVolumes"] = "/DictionaryApp/json/volume.json";

/* for create and update
 if there is id then it is update
 otherwise create
*/
servicePath["saveVolume"] = "/DictionaryApp/service/volume/post";
servicePath["deleteVolume"] = "/DictionaryApp/api/volume/delete";

//news services
servicePath["getNewes"] = "/DictionaryApp/rest/service/news/all";
servicePath["saveNews"] = "/DictionaryApp/rest/service/news/post";

servicePath["getManageVolume"] = "/DictionaryApp/json/manageVolume.json";
servicePath["getCategory"] = "/DictionaryApp/json/category.json";
servicePath["updateManageVol"] = "/DictionaryApp/api/managevol/save";
servicePath["deleteManageVol"] = "/DictionaryApp/api/managevol/delete";

servicePath["getnewlyEditedWordData"] = "/DictionaryApp/rest/service/edited/word/";
servicePath["updateNewlyEditedWord"] = "/DictionaryApp/rest/service/edited/word/update";
servicePath["deletedNewlyEditedWord"] = "/DictionaryApp/rest/service/edited/word/delete/";
servicePath["addNewlyEditedWord"] = "/DictionaryApp/rest/service/edited/word/"
