# 🚀 Users Dashboard

A modern Users Dashboard built with **React + TypeScript + Vite**, focused on clean UI, performance, and real-world data handling.

---

## 📌 Features

* 🔍 **Search users** (with debounce for better performance)
* 📄 **Pagination** (server-side)
* 🔽 **Sorting** (by name, age, email)
* 👤 **User detail modal**
* ⏳ **Loading states (skeleton UI)**
* ❌ **Error handling**
* 📭 **Empty state handling**

---

## 🛠️ Tech Stack

* **React (Vite)**
* **TypeScript**
* **Tailwind CSS**
* **Lucide Icons**
* **DummyJSON API**

---

## ⚙️ Getting Started

```bash
# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🌐 API

Data is fetched from:

👉 https://dummyjson.com/users

* Server-side pagination (`limit`, `skip`)
* Search (`/users/search?q=`)
* Sorting (`sortBy`, `order`)

---

## 🧠 Key Decisions

### 1. Server-side data handling

Instead of filtering/sorting on the client, I used API query params to simulate real-world backend interaction.

---

### 2. Debounced Search

Implemented a custom `useDebounce` hook to prevent excessive API calls while typing.

---

### 3. Component Architecture

* Reusable UI components (SearchInput, UserCard, Pagination, etc.)
* Separation of concerns (hooks, services, types)

---

### 4. Type Safety

All API responses are strongly typed using TypeScript interfaces.

---

### 5. UX Focus

* Skeleton loaders for better perceived performance
* Clear empty/error states
* Modal for detailed user view

---

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/
│   └── ui/
├── hooks/
├── services/
├── types/
├── pages/
```

---

## 🚀 Future Improvements

* URL state sync (page, search)
* Unit testing
* Accessibility improvements (ARIA)
* Dark mode support

---

## 👨‍💻 Author

Azizbek Sharipov

📧 Email: sharipovazizbek574@gmail.com
💼 LinkedIn: https://www.linkedin.com/in/azizbek-sharipov-6915452a9/
💻 GitHub: https://github.com/azizbeksharipov7