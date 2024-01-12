
const boot = () =>
    new Promise((resolve) => {
        console.log("something done");
        resolve("text");
    });

export default boot;