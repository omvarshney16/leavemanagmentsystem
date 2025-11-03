const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .bg-gradient-login {
    background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  }

  .bg-gray-50 {
    background-color: #f9fafb;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .p-4 {
    padding: 1rem;
  }

  .p-6 {
    padding: 1.5rem;
  }

  .p-8 {
    padding: 2rem;
  }

  .p-2 {
    padding: 0.5rem;
  }

  .p-3 {
    padding: 0.75rem;
  }

  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .login-container {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 28rem;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .inline-block {
    display: inline-block;
  }

  .inline-flex {
    display: inline-flex;
  }

  .icon-container-indigo {
    background-color: #4f46e5;
    border-radius: 9999px;
    margin-bottom: 1rem;
  }

  .icon-container-rounded {
    background-color: #4f46e5;
    border-radius: 0.5rem;
  }

  .text-white {
    color: white;
  }

  .text-gray-800 {
    color: #1f2937;
  }

  .text-gray-700 {
    color: #374151;
  }

  .text-gray-600 {
    color: #4b5563;
  }

  .text-gray-500 {
    color: #6b7280;
  }

  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-medium {
    font-weight: 500;
  }

  .mt-1 {
    margin-top: 0.25rem;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .mt-6 {
    margin-top: 1.5rem;
  }

  .mb-2 {
    margin-bottom: 0.5rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .mb-6 {
    margin-bottom: 1.5rem;
  }

  .mb-8 {
    margin-bottom: 2rem;
  }

  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }

  .gap-3 {
    gap: 0.75rem;
  }

  .gap-4 {
    gap: 1rem;
  }

  .gap-6 {
    gap: 1.5rem;
  }

  .gap-1 {
    gap: 0.25rem;
  }

  .form-input {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .form-input:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.5);
  }

  .btn-primary {
    width: 100%;
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
    font-size: 1rem;
  }

  .btn-primary:hover {
    background-color: #4338ca;
  }

  .demo-box {
    background-color: #dbeafe;
    border-radius: 0.5rem;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .dashboard-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-green {
    background: linear-gradient(to bottom right, #22c55e, #16a34a);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: white;
  }

  .card-blue {
    background: linear-gradient(to bottom right, #3b82f6, #2563eb);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: white;
  }

  .card-purple {
    background: linear-gradient(to bottom right, #a855f7, #9333ea);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    color: white;
  }

  .white-card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(205, 0, 0, 0.1);
  }

  .header {
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 80rem;
    margin: 0 auto;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  select.form-input {
    cursor: pointer;
  }

  textarea.form-input {
    resize: vertical;
  }

  .btn-submit {
    background-color: #4f46e5;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
    font-size: 1rem;
  }

  .btn-submit:hover {
    background-color: #4338ca;
  }

  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead tr {
    border-bottom: 1px solid #e5e7eb;
  }

  tbody tr {
    border-bottom: 1px solid #f3f4f6;
  }

  tbody tr:hover {
    background-color: #f9fafb;
  }

  th {
    text-align: left;
    padding: 0.75rem 1rem;
    font-weight: 600;
    color: #374151;
  }

  td {
    padding: 0.75rem 1rem;
  }

  .status-approved {
    background-color: #dcfce7;
    color: #166534;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .status-rejected {
    background-color: #fee2e2;
    color: #991b1b;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .status-pending {
    background-color: #fef3c7;
    color: #92400e;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .btn-approve {
    background-color: #22c55e;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    transition: background-color 0.2s;
  }

  .btn-approve:hover {
    background-color: #16a34a;
  }

  .btn-reject {
    background-color: #ef4444;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    transition: background-color 0.2s;
  }

  .btn-reject:hover {
    background-color: #dc2626;
  }

  .btn-logout {
    background-color: #ef4444;
    color: white;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .btn-logout:hover {
    background-color: #dc2626;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .empty-state {
    text-align: center;
    padding: 2rem;
    color: #6b7280;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .form-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .w-full {
    width: 100%;
  }

  @media (min-width: 768px) {
    .w-md-auto {
      width: auto;
    }
  }

  .icon-w-4 {
    width: 1rem;
    height: 1rem;
  }

  .icon-w-5 {
    width: 1.25rem;
    height: 1.25rem;
  }

  .icon-w-6 {
    width: 1.5rem;
    height: 1.5rem;
  }

  .icon-w-8 {
    width: 2rem;
    height: 2rem;
  }

  .icon-w-12 {
    width: 3rem;
    height: 3rem;
  }

  .text-green-100 {
    color: #dcfce7;
  }

  .text-green-200 {
    color: #bbf7d0;
  }

  .text-blue-100 {
    color: #dbeafe;
  }

  .text-blue-200 {
    color: #bfdbfe;
  }

  .text-purple-100 {
    color: #f3e8ff;
  }

  .text-purple-200 {
    color: #e9d5ff;
  }
    


  /* === Center main content horizontally === */
body {
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom right, #eff6ff, #e0e7ff);
  min-height: 100vh;
}

/* Keep content scrollable and not vertically centered */
body > * {
  width: 100%;
  max-width: 1200px; /* optional: control width of your layout */
}
  table, th, td {
  color: #1a1a1a; /* or a slightly softer gray like #333 */
}

/* Optional: ensure labels and paragraphs in white cards are readable too */
.card-white, .card, .form-card {
  color: #1a1a1a;
}

  
`;
export default styles;