//  returns random color

function choice(arr) {
    const ranIndex = Math.floor(Math.random() * arr.length);
    return (arr[ranIndex]);
}

export { choice };