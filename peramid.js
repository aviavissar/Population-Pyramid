//Task #1: Population Pyramid

//intilze data

const peramid = [{ age: 20, sex: "m" }, { age: 30, sex: 'm' }, { age: 35, sex: 'm' }, { age: 60, sex: 'm' }, { age: 70, sex: 'm' }, { age: 90, sex: 'm' },
{ age: 15, sex: 'f' }, { age: 20, sex: 'f' }, { age: 30, sex: 'f' }, { age: 22, sex: 'f' }, { age: 25, sex: 'f' }, { age: 29, sex: 'f' }, { age: 30, sex: 'f' },
{ age: 20, sex: 'f' }, { age: 50, sex: 'f' }, { age: 80, sex: 'f' }, { age: 90, sex: 'f' }
]

const ageArr = [];

peramid.map((obj) => {
    ageArr.push(obj.age)
})

console.log(ageArr);

//qu1
const doPeramidFromArry = (ageArr) => {
    const arr0_20 = []; const arr21_40 = []; const arr41_60 = []; const arrAbove61 = [];
    ageArr.map((age) => {
        if (age < 40) {
            if (age <= 20) {
                arr0_20.push(age);
            } else {
                arr21_40.push(age)
            }

        } else {
            if (age <= 60) {
                arr41_60.push(age)
            } else {
                arrAbove61.push(age)
            }
        }
    })
    return {
        'numOfpepole0_20': arr0_20.length,
        'numOfpepole21_40': arr21_40.length,
        'numOfpepole41_60': arr41_60.length,
        'numOfpepoleAbove61': arrAbove61.length
    }
} 

console.log(doPeramidFromArry(ageArr));

//qu2
const getPeramidRetrnFobove20=(peramid)=>{
   return peramid.filter((obj)=>obj.age>20 && obj.sex=='f').length
}

console.log(getPeramidRetrnFobove20(peramid));