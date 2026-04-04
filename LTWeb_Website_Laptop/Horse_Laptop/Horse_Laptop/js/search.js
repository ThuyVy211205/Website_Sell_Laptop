// Debounce helper
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function searchProducts(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    const base = window.AppStore?.getBaseList ? window.AppStore.getBaseList() : window.AppStore.products;
    window.AppStore.renderProducts(base);
    return;
  }

  const base = window.AppStore?.getBaseList ? window.AppStore.getBaseList() : window.AppStore.products;
  const filtered = base.filter((p) =>
    p.name.toLowerCase().includes(q)
  );
  window.AppStore.renderProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const btn = document.getElementById('searchBtn');
  if (!input) return;

  const debouncedSearch = debounce(() => searchProducts(input.value), 300);

  input.addEventListener('input', debouncedSearch);
  btn?.addEventListener('click', () => searchProducts(input.value));
});

// Expose nếu cần
window.Search = {
  searchProducts
};

