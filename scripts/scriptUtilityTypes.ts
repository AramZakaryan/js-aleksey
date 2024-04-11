////////// Additional Question: utility types

// ///// Union Type and Intersection Type
//
// string | number
//
// NameType & AgeType

// ///// Record type
//
// type NameType = "gago" | "valo" | "peto"
//
// type InfoType = {
//     fullName: string,
//     age: number
// }
//
// const people: Record<NameType, InfoType> = {
//     gago: {fullName: "Gago", age: 56},
//     valo: {fullName: "Valo", age: 34},
//     peto: {fullName: "Peto", age: 44},
// };

// ///// Pick type
//
// type PersonFullInfoType = {
//     name: string
//     age: number
//     isMarried: boolean
//     address: string
// }
//
// type PersonShortInfo = Pick<PersonFullInfoType, "name" | "age">
//
// const gago: PersonShortInfo = {
//     name: "Gago",
//     age: 56
// }

// ///// Omit type
//
// type PersonFullInfoType = {
//     name: string
//     age: number
//     isMarried: boolean
//     address: string
// }
//
// type PersonShortInfo = Omit<PersonFullInfoType, "isMarried" | "address">
//
// const gago: PersonShortInfo = {
//     name: "Gago",
//     age: 56
// }

// ///// Extract Type
//
// type SomeType = "test" | 1 | false
//
//
// type ResultType = Extract<SomeType, "test" | 1>
//
// const result1 :ResultType = "test"
// const result2 :ResultType = 1



