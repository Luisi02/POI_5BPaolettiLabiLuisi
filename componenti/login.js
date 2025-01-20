const loginComponent = () => {
    const login = document.getElementById('login');
    const input_password = document.getElementById('input_password');
    const input_username = document.getElementById('input_username');
    const modale_login = document.getElementById('modale_login');
    const submit_login = document.getElementById('submit_login');
    return {
        render: () => {
            login.innerHTML = "login";
            window.onclick = () => {
                if (event.target == modale_login) {
                    modale_login.style.display = "none";
                }
            }
            login.onclick = () => {
                modale_login.style.display = "flex";
                input_password.value = "";
                input_username.value = "";
            }
            submit_login.onclick = () => {
                if (input_password.value === "password" && input_username.value === "username"){
                    modale_login.style.display = "none"
                    login.innerHTML = input_username.value
                }
            }
        }
    }
}

export {loginComponent};