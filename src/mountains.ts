import Mountain from "./models/Mountain";

export const mountains: Mountain[] = [
    {name:"Kilimanjaro", height: 19341}, 
    {name:"Everest", height:29029}, 
    {name: "Denali", height: 20310},
];

export const findNameOfTallestMountain = (arrOfMtns: Mountain[]): string => {
    if(arrOfMtns.length === 0) {return "sorry";}
    const result: Mountain = arrOfMtns.reduce((acc:Mountain, cv:Mountain) => acc.height < cv.height ? cv:acc);
    return result.name
};
