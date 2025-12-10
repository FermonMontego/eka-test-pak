
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
# копируем .env.example -> .env подключаемся к своей базе PostgreSQL
# вот эти поля заполнить
# DB_CONNECTION=pgsql
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_DATABASE=backend
# DB_USERNAME=root
# DB_PASSWORD=

composer setup # Обязательно

composer run dev # Запуск сервера

# Frontend (Next.js)
cd ../frontend
npm install
# или, если используете Yarn:
# yarn install
npm run dev 
или 
yarn dev
