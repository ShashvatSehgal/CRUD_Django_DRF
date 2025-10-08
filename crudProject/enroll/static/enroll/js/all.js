 document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit();
      // open modal programmatic access if needed:
      M.Modal.init(document.querySelectorAll('.modal'));
      // NOTE: Replace following placeholder functions with actual fetch()/AJAX to your Django API.
      fetchAndRenderItems();
      document.getElementById('create-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        // Implement POST to backend here
        M.toast({html: 'Create: implement POST to /api/items/'});
      });
      document.getElementById('update-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        // Implement PUT/PATCH to backend here
        M.toast({html: 'Update: implement PUT/PATCH to /api/items/<id>/'});
      });
    });

    // simple renderer placeholder (replace with backend data)
    function renderItems(items = []) {
      const tbody = document.getElementById('items-tbody');
      tbody.innerHTML = '';
      items.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${escapeHtml(item.id)}</td>
          <td>${escapeHtml(item.name)}</td>
          <td>${escapeHtml(item.description ?? '')}</td>
          <td>${escapeHtml(item.quantity ?? '')}</td>
          <td>
            <a class="btn-small waves-effect update-btn" data-id="${item.id}"><i class="material-icons">edit</i></a>
            <a class="btn-small red waves-effect delete-btn" data-id="${item.id}"><i class="material-icons">delete</i></a>
          </td>`;
        tbody.appendChild(tr);
      });
      // attach handlers (update/delete should call your API)
      document.querySelectorAll('.update-btn').forEach(btn => btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        M.toast({html: `Open update modal for id=${id} and load data from backend`});
        // load data into modal and open it
      }));
      document.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        if (confirm('Delete item #' + id + '?')) {
          M.toast({html: `Delete: implement DELETE to /api/items/${id}/`});
        }
      }));
    }

    // placeholder to simulate initial load
    function fetchAndRenderItems() {
      // replace this with an actual GET to your API endpoint, e.g. fetch('/api/items/')
      const demo = [
        {id:1,name:'Widget A',description:'Example item A',quantity:10},
        {id:2,name:'Widget B',description:'Example item B',quantity:5}
      ];
      renderItems(demo);
    }

    function escapeHtml(s){ if(s===undefined||s===null) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }