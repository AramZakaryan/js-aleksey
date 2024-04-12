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

// ///// Exclude Type
//
// type SomeType = "test" | 1 | false
//
//
// type ResultType = Exclude<SomeType, false>
//
// const result1 :ResultType = "test"
// const result2 :ResultType = 1

// ///// NonNullable Type
//
// type SomeType = "test" | 1 | null | undefined
//
// type ResultType = NonNullable<SomeType>
//
// type ResultType2 = Exclude<SomeType, null | undefined>

///// Partial type

// type SomeType = Partial<{ name: string, age: number }>

// ///// Required type
//
// type SomeType = Required<{ name?: string, age: number }>

// ///// Readonly type
//
// type SomeType = Readonly<{ name: string, age: number, c: { d: boolean } }>
//
// type SomeType = { name: string, age: number, c: { d: boolean } }
//
// const someObject: SomeType = {name: "Gago", age: 56, c: {d: true}}
//
// const newObject = Object.freeze(someObject)

// ///// Parameters type
//
// // type SomeType = Parameters<(name: string, age: number)  => string>
//
// function someFunc (name: string, age: number):string {
//     return name+age
// }
//
// type SomeType = Parameters<typeof someFunc>


// ///// ReturnType
//
// // type SomeType = ReturnType<(name: string, age: number)  => string>
//
// function someFunc (name: string, age: number):string {
//     return name+age
// }
//
// type SomeType = ReturnType<typeof someFunc>


// ///// Awaited type
//
// type ResultType = Awaited<Promise<string>>


// ///// Class type
//
// class Car {
//     constructor(mark: string, speed: number) {
//         this.mark = mark
//         this.speed = speed
//     }
//
//     greed() {
//         console.log(this.mark)
//     }
// }
//
// const car1: Car = new Car("mers", 200)
//
//
// car1.greed()
//
//
// const Vehicle: { new(mark: string, speed: number): Car } = Car

// ///// this type
// function getInnerWidth (this:Window) {
//     console.log(this.innerWidth)
// }
//
// window.getInnerWidth()

///// InstanceType

///// ConstructorParameters

///// OmitThisParameter

///// ThisParameterType

///// ThisType

// ///// Uppercase   Lowercase   Capitalize   Uncapitalize
//
//
// type newType1 =  Uppercase<"gago">
//
//
//
// type newType2 =  Lowercase<"GAGO">
//
//
//
// type newType3 =  Capitalize<"gago">
//
//
//
// type newType4 =  Uncapitalize<"Gago">















////////// Type Guards

// function myIncrement(value: unknown) {
//     if (typeof value !== "number") {
//         return null
//     }
//     return value
// }
//
//
// console.log(myIncrement("gago"));
//
// console.log(myIncrement(3));

// function test (arg: object) {
//     if("someKey" in arg) {
//         arg
//     }
// }

// function isNumber (value:unknown) {
//     return typeof value==="number"
// }
//
// function test (value:unknown) {
//     if (isNumber(value)) {
//         value
//     }
// }

// function test (value:unknown) {
//     if (typeof value ==="number") {
//         value
//     }
// }

// function isNumber (value:unknown): value is number {
//     return typeof value==="number"
// }
//
// function test (value:unknown) {
//     if (isNumber(value)) {
//         value
//     // ^? (local var)
//     }
// }

// function isNumber(value: unknown): asserts value is number {
//     if (typeof value !== "number") {
//         throw new Error("value must be number!")
//     }
// }
//
// function test(value: unknown) {
//     let c ={}
//     isNumber(value)
//     value
// }

