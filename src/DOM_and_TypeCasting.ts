const anchor = document.querySelector('a');
if(anchor)
{
    // console.log(anchor.href);
    
}

//getting error beacus anchor maybe empty
// console.log(anchor.href);
//to solve this we can use
const anchors = document.querySelector('a')!;
// console.log(anchors.href);

// select from Element 
// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => 
{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})

