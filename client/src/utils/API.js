export const getDeveloper = new Promise(function (resolve) {
    setTimeout(() => {
        resolve({
            isAuthenticated: false
        });
    }, 1000);
});
