
enum ResourcesType {Done, Jhon, Xrive}

interface ResourcesEm<T> {
    uid : number;
    resourcesType: ResourcesType;
    date: T;
}

// const docEnThree:Resources<string> = {
//     uid : 1,
//     resourcesType: ResourcesType;
//     date: "Duo",
// }

const docEnOne:ResourcesEm<object> = {
    uid : 1,
    resourcesType: ResourcesType.Done,
    date: {date: 2011},
}


const docEnFour:ResourcesEm<string[]> = {
    uid : 1,
    resourcesType: ResourcesType.Jhon,
    date: ['Name', 'Age', 'Gender'],
}