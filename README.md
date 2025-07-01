
# 🛠️ Items REST API

This is a simple RESTful API built with **Node.js**, **Express**, and **express-validator** to manage a collection of items. Each item has a `name`, an optional `description`, and a unique `id`.

---

## 📦 Features

- CRUD operations for items (`Create`, `Read`, `Update`, `Delete`)
- Input validation using `express-validator`
- UUIDs for unique item identification
- Custom 404 error handling

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v16 or higher) and npm installed:

```bash
node -v
npm -v
```

---

### 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/items-api.git
cd items-api
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm run dev   # for development using nodemon
npm start     # for production
```

---

## 📁 Project Structure

```
.
├── routes/
│   └── items.js
├── index.js
├── package.json
└── README.md
```

---

## 📌 API Documentation

Base URL: `http://localhost:3000`

### GET `/`

Returns a welcome message.

---

### GET `/items`

Returns all items.

**Response**:

```json
[
  {
    "id": "uuid",
    "name": "Pen",
    "description": "Blue ink pen"
  }
]
```

---

### GET `/items/:id`

Get a single item by `id`.

**Response**:

```json
{
  "id": "uuid",
  "name": "Pen",
  "description": "Blue ink pen"
}
```

**If not found**:

```json
{
  "error": "Item not found"
}
```

---

### POST `/items`

Create a new item.

**Request Body**:

```json
{
  "name": "Notebook",
  "description": "A 100-page notebook"
}
```

**Validation Rules**:

- `name` is required and must be at least 3 characters
- `description` (optional) must be less than 200 characters

**Success Response (201)**:

```json
{
  "id": "uuid",
  "name": "Notebook",
  "description": "A 100-page notebook"
}
```

**Error Response (400)**:

```json
{
  "errors": [
    {
      "msg": "Name is required",
      "param": "name"
    }
  ]
}
```

---

### PATCH `/items/:id`

Update parts of an item.

**Request Body** (at least one field required):

```json
{
  "name": "New Name",
  "description": "Updated description"
}
```

---

### PUT `/items/:id`

Replace an item entirely.

**Request Body**:

```json
{
  "name": "Updated Name",
  "description": "Updated description"
}
```

---

### DELETE `/items/:id`

Delete an item by `id`.

**Response**:

```text
Item deleted
```

---

## ❌ 404 Handling

Any undefined route returns:

```json
{
  "error": "404: Page not found"
}
```

---

## 🧪 Testing

Use tools like [Postman](https://www.postman.com/) or `curl` to test the endpoints.

---

## 📝 License

MIT — feel free to use and modify.

---

## ✨ Author

**Ibrahim Bello Aliyu**  
GitHub: [@ibronmu](https://github.com/ibronmu)
