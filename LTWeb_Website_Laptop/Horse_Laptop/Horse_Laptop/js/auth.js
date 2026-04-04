(function () {
  const USERS_KEY = 'ecom_users';
  const SESSION_KEY = 'ecom_current_user';

  // --- DATA ---
  function getUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setCurrentUser(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function clearCurrentUser() {
    localStorage.removeItem(SESSION_KEY);
  }

  function normalizeEmail(email) {
    return String(email || '').trim().toLowerCase();
  }

  // --- AUTH ---
  function handleRegisterSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName')?.value.trim();
    const email = normalizeEmail(document.getElementById('registerEmail')?.value);
    const password = document.getElementById('registerPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;

    if (!fullName || !email || !password) {
      alert('Vui lòng nhập đủ thông tin');
      return;
    }

    if (password !== confirmPassword) {
      alert('Mật khẩu không khớp');
      return;
    }

    const users = getUsers();

    if (users.some(u => normalizeEmail(u.email) === email)) {
      alert('Email đã tồn tại');
      return;
    }

    users.push({
      id: Date.now(),
      fullName,
      email,
      password,
      role: 'customer'
    });

    saveUsers(users);
    alert('Đăng ký thành công!');
    window.location.href = 'login.html';
  }

  function handleLoginSubmit(e) {
    e.preventDefault();

    const email = normalizeEmail(document.getElementById('loginEmail')?.value);
    const password = document.getElementById('loginPassword')?.value;

    // ADMIN
    if (email === 'admin@gmail.com' && (password === '123' || password === 'admin123')) {
      setCurrentUser({
        id: 'admin',
        fullName: 'Admin',
        email,
        role: 'admin'
      });
      window.location.href = 'admin.html';
      return;
    }

    const users = getUsers();
    const user = users.find(u => normalizeEmail(u.email) === email && u.password === password);

    if (!user) {
      alert('Sai tài khoản hoặc mật khẩu');
      return;
    }

    setCurrentUser(user);
    window.location.href = 'index.html';
  }

  // --- HEADER ---
  function setupHeaderAuth() {
    const userBtn = document.getElementById('userBtn');
    if (!userBtn) return;

    const user = getCurrentUser();

    if (!user) {
      // Chưa đăng nhập - giữ nguyên userBtn
      userBtn.href = 'login.html';
      userBtn.title = 'Đăng nhập';
      userBtn.classList.remove('user-logged-in');
      return;
    }

    // Đã đăng nhập - thay đổi structure
    const container = userBtn.parentElement;
    
    container.innerHTML = `
      <div class="user-menu">
        <div class="avatar" id="avatarClick">
          ${user.fullName.charAt(0).toUpperCase()}
        </div>

        <div class="user-dropdown" id="dropdownMenu">
          <p>Chào, <b>${user.fullName}</b></p>

          ${
            user.role === 'admin'
              ? `<a href="admin.html">Trang quản trị</a>`
              : ``
          }

          <a href="#" id="logoutBtn">Đăng xuất</a>
        </div>
      </div>
    `;

    // Toggle dropdown
    document.getElementById('avatarClick')?.addEventListener('click', () => {
      document.getElementById('dropdownMenu')?.classList.toggle('show');
    });

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
      e.preventDefault();
      clearCurrentUser();
      window.location.href = 'index.html';
    });
  }

  // --- INIT ---
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerForm')?.addEventListener('submit', handleRegisterSubmit);
    document.getElementById('loginForm')?.addEventListener('submit', handleLoginSubmit);

    setupHeaderAuth();
  });

  window.Auth = {
    getCurrentUser,
    clearCurrentUser,
    setupHeaderAuth
  };

})();