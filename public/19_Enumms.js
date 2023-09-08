"use strict";
var ResourcesType;
(function (ResourcesType) {
    ResourcesType[ResourcesType["Done"] = 0] = "Done";
    ResourcesType[ResourcesType["Jhon"] = 1] = "Jhon";
    ResourcesType[ResourcesType["Xrive"] = 2] = "Xrive";
})(ResourcesType || (ResourcesType = {}));
// const docEnThree:Resources<string> = {
//     uid : 1,
//     resourcesType: ResourcesType;
//     date: "Duo",
// }
const docEnOne = {
    uid: 1,
    resourcesType: ResourcesType.Done,
    date: { date: 2011 },
};
const docEnFour = {
    uid: 1,
    resourcesType: ResourcesType.Jhon,
    date: ['Name', 'Age', 'Gender'],
};
