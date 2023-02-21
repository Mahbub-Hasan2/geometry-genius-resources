let cardsGroupFlex = document.getElementById("cards");
let areaCalculationCards = document.getElementById("area-calculation-cards");

// All the cards are shown on the website through this function.
function getContentDetails(details, i) {


    return `
        <div id="${details.title}" onmouseenter="random_rgba('${details.title}')" class="border p-4 rounded-lg text-center ">
            <div class="text-center h-52 flex justify-center items-center">
                <img src=${'./Assets/images/' + details.title.toLowerCase() + '.png'} alt="" class="">
            </div>
            <div class="py-3">
                <h3 class="text-xl font-semibold pb-1">${details.title}</h3>
                <p class="text-sm pt-2">${details.area}</p>
                ${!details.input1 ?
            ""
            :
            `<div class="w-2/3 mx-auto flex justify-between">
                    <p class="text-base py-2">
                        <span>b = ${details.input1} cm</span>
                        <span> h= ${details.input2} cm</span>
                    </p>
                    <img onclick="setdefoultValue('${details.title.toLowerCase()}')" src="./Assets/icons/edite.svg" alt="" class="cursor-pointer" />
                </div>
            `
        }
                
 
                <form class="" action="index.html" method="post">
                    <div class="flex justify-between gap-2">
                        <div class="flex gap-2 mb-5 mt-2">
                            <div id="${details.title.toLowerCase()}-edite" class="flex gap-1">
                                <input  name="${details.title.toLowerCase() + 1}" value="" id=${details.title.toLowerCase() + 1} class="border w-5/6 bg-white text-black rounded" type="text">
                                <p class="">cm</p>
                            </div>
                            <div class="flex gap-1">
                                <input name="${details.title.toLowerCase() + 2}" value="" id=${details.title.toLowerCase() + 2} class="border w-5/6 bg-white text-black rounded" type="text">
                                <p class="">cm</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <img onclick="calculate('${details.title.toLowerCase()}', '${i}')" src="./Assets/icons/done.svg" alt="" class="cursor-pointer h-10" />
                        </div>
                    </div>
                    <button  type="button" name="button" onclick="calculate('${details.title.toLowerCase()}', '${i}')" class="bg-blue-600 text-white w-full py-2 rounded-lg font-semibold">Calculate</button>
                </form>
            </div>
        </div>
    `;
}

// The data of each card is taken from here.
let detailArray = [
    {
        title: "Triangle",
        area: "Area (A) = 0.5 X b X h",
        img: "./Assets/images/triangle.png"
    },
    {
        title: "Rectangle",
        area: "Area (A) = w X I",
        img: "./Assets/images/triangle.png"
    },
    {
        title: "Parallelogram",
        area: "Area (A) = b x h",
        img: "./Assets/images/triangle.png"
    },
    {
        title: "Rhombus",
        area: "Area (A) = 0.5 X d1 X d1",
        img: "./Assets/images/triangle.png"
    },
    {
        title: "Pentagon",
        area: "Area (A) = 0.5 X p X b",
        img: "./Assets/images/triangle.png"
    },
    {
        title: "Ellipse",
        area: "Area (A) = 0.5 X b X h",
        img: "./Assets/images/triangle.png"
    },
];

cardsGroupFlex.innerHTML = detailArray.map((item, i) => getContentDetails(item, i)).join("");



// All the results are kept here except for calculating.s
let areaCalculationArray = [];

function calculate(a, cardIndex) {

    // Each card has 2 input values ​​coming through it.
    var input1 = document.getElementsByName(`${a}1`)[0].value;
    var input2 = document.getElementsByName(`${a}2`)[0].value;

    // Checking validation
    if (isNaN(parseInt(input1)) || isNaN(parseInt(input2))) {
        alert("❌ Error !! Please enter numbers in both input fields.")
    }
    else if (input1 <= 0 || input2 <= 0) {
        alert("❌ Error !! Please enter positive numbers in both input fields.")
    }
    else {

        // calculate all cards input 
        if (a === 'triangle') {
            const area = 0.5 * input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else if (a === 'rectangle') {
            const area = input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else if (a === 'parallelogram') {
            const area = input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else if (a === 'rhombus') {
            const area = 0.5 * input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else if (a === 'pentagon') {
            const area = 0.5 * input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else if (a === 'ellipse') {
            const area = 3.14 * input1 * input2;
            areaCalculationArray.push({ name: a, area: area.toFixed(2) });
        }
        else { }
        console.log(detailArray)
        areaCalculationCards.innerHTML = areaCalculationArray.map((item, i) => getAreaContentDetails(item, i)).join("");
        setInputValueInMainArray(a);
    }

}

//  this function for area all items maping
function getAreaContentDetails(item, i) {

    return (`
        <div class="grid grid-cols-12 mb-2">
            <div class="col-span-4">
                <p class="text-xm py-2">${i + 1}. ${item.name}</p>
            </div>
            <div class="col-span-3">
                <p class="text-xm py-2">${item.area} <sup>2</sup></p>
            </div>
            <div class="relative col-span-5">
                <button class="text-xm w-full py-2 bg-blue-600 rounded-lg text-white font-semibold">Convert to m <sup>2</sup></button>
                <p onclick="deleteArea('${i}')" class="absolute -right-4 -top-3 bg-red-500 px-2 rounded-full text-white font-semibold">x</p>
            </div>
        </div>
    `)
}

//  Colors are generated when moused over each card.
function random_rgba(e) {
    var o = Math.round, r = Math.random, s = 255;
    let color = 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
    document.getElementById(e).style.backgroundColor = `${color}`;
}

// delete calculate item by index 
function deleteArea(position) {
    areaCalculationArray = areaCalculationArray.filter((item, i) => i != position);
    areaCalculationCards.innerHTML = areaCalculationArray.map((item, i) => getAreaContentDetails(item, i)).join("");
}

function setInputValueInMainArray(id) {
    var input1 = document.getElementsByName(`${id}1`)[0].value;
    var input2 = document.getElementsByName(`${id}2`)[0].value;

    const newDetailArray = detailArray.map(item => {
        if (item.title.toLocaleLowerCase() === id) {
            return { ...item, input1, input2 };
        }
        return item;
    });
    detailArray = newDetailArray;
    cardsGroupFlex.innerHTML = detailArray.map((item, i) => getContentDetails(item, i)).join("");
}




function setdefoultValue(id) {
    const item = detailArray.find(el => el.title.toLocaleLowerCase() === id);

    document.getElementsByName(`${id}1`)[0].defaultValue = item.input1;
    document.getElementsByName(`${id}2`)[0].defaultValue = item.input2;
}



