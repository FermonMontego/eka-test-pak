
## стек

- **Backend**: PHP 8.4.15, Laravel 12, PostgreSQL  
- **Frontend**: Next.js, React, Redux Toolkit, React Query  
- **Архитектура**: Feature-Sliced Design (FSD)

---

## 🚀 Как запустить проект

### 1. Установка зависимостей

В корне проекта находятся две папки: `backend` и `frontend`.  
Необходимо установить зависимости в **обеих**:

```bash
# Backend (Laravel)
cd backend
composer install
composer run dev

# Frontend (Next.js)
cd ../frontend
npm install
# или, если используете Yarn:
# yarn install
npm run dev или yarn dev
