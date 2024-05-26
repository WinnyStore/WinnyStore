function openLoginModal() {
    removeExistingModals();

    var loginModal = `
        <div id="loginModal" class="modal">
            <form class="modal-content animate" action="login.php">
                <div class="imgcontainer">
                    <span class="close" title="Close Modal">&times;</span>
                    <div class="modal-header">
                        <img src="https://img2.pic.in.th/pic/logofa984ef83df8c4a3.png" alt="Winny Store Logo" class="header-logo">
                        <h2>Login | <i class="fas fa-sign-in-alt" aria-label="Login"></i> เข้าสู่ระบบ</h2>
                    </div>
                </div>
                <div class="container">
                    <label for="uname">Username</label>
                    <input type="text" placeholder="Enter Username" name="uname" required>
                    <label for="psw">Password</label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    <button type="submit" name="login_user"><i class="fas fa-sign-in-alt" aria-label="Login"></i> Login</button>
                </div>
                <div class="container">
                    <span class="Forgot">Don't Have Account <a id="Forgot">Sign up?</a></span>
                    <a href="" class="discord"><i class="fab fa-discord"></i></a>
                </div>
            </form>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', loginModal);
    addModalEventListeners('loginModal', openSignupModal);
}

function openSignupModal() {
    removeExistingModals();

    var signupModal = `
        <div id="signupModal" class="modal">
            <form class="modal-content animate" action="register.php">
                <div class="imgcontainer">
                    <span class="close" title="Close Modal">&times;</span>
                    <div class="modal-header">
                        <img src="https://img2.pic.in.th/pic/logofa984ef83df8c4a3.png" alt="Winny Store Logo" class="header-logo">
                        <h2>Signup | <i class="fas fa-user-plus" aria-label="Signup"></i> สมัครสมาชิก</h2>
                    </div>
                </div>
                <div class="container">
                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required>
                    <label for="gmail"><b>Gmail</b></label>
                    <input type="email" placeholder="Enter Gmail" name="gmail" required>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>
                    <label for="confirm_psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="confirm_psw" required>
                    <button name="register_user" type="submit"><i class="fas fa-user-plus" aria-label="Signup"></i> Signup</button>
                </div>
                <div class="container">
                    <span class="No-Forgot">Already have an account<a id="logina"> Login?</a></span>
                    <a href="#" class="discord"><i class="fab fa-discord"></i></a>
                </div>
            </form>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', signupModal);
    addModalEventListeners('signupModal', openLoginModal);
}

function removeExistingModals() {
    document.querySelectorAll(".modal").forEach(modal => modal.remove());
}

function addModalEventListeners(modalId, switchFunction) {
    document.querySelector(`#${modalId} .close`).addEventListener("click", () => {
        document.getElementById(modalId).remove();
    });

    document.querySelector(`#${modalId} a`).addEventListener("click", () => {
        document.getElementById(modalId).remove();
        switchFunction();
    });
}

function initModals() {
    var loginBtn = document.getElementById("loginBtn");
    if (loginBtn) loginBtn.addEventListener("click", openLoginModal);

    var signupBtn = document.getElementById("signupBtn");
    if (signupBtn) signupBtn.addEventListener("click", openSignupModal);

    var loginLink = document.getElementById("login");
    if (loginLink) loginLink.addEventListener("click", openLoginModal);
}

function handlePageRedirection() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');

    if (pageParam) {
        const pageMap = {
            'home': '/home.html',
            'topup': '/topup.html',
            'shop': '/shop.html',
            'contact': '/contact.html'
        };

        if (pageMap[pageParam]) {
            window.location.href = pageMap[pageParam];
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initModals();
    handlePageRedirection();
});

window.addEventListener('load', () => {
    document.querySelector('.main-container').classList.add('loaded');

    var homeBtn = document.getElementById('home');
    if (homeBtn) homeBtn.addEventListener('click', () => {
        window.location.href = 'home.php';
    });
});
