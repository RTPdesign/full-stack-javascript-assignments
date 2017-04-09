export const greeting = (age = 0) => {                        
    if (age > 18) {
        return "Hello!";
}
    else  {
        return "Yo!";
    }
}
// Begins Taco Tuesday function
export const isTacoTuesday = (day = '') => {
    if(day === 'tuesday') {
        return true;
    }
    else {
        return false;
    }
}