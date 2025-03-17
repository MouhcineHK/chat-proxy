# 🚀 Chatbot AI - Next.js & OpenAI GPT

## 📌 Description du Projet
Ce projet est une interface de chatbot construite avec **Next.js**, utilisant **OpenAI GPT** pour générer des réponses intelligentes. Il prend en charge le **streaming des réponses**, la gestion des messages, et propose une **interface moderne et responsive**.

---

## ⚡ Installation et Configuration

### 1️⃣ **Cloner le dépôt**
```bash
git clone https://github.com/ton-repo/chatbot-ai.git
cd chatbot-ai
```

### 2️⃣ **Installer les dépendances**
```bash
npm install  # ou yarn install
```

### 3️⃣ **Configurer l'environnement**
Créer un fichier `.env.local` à la racine du projet avec :
```ini
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

📌 **Important :** Remplace `sk-xxxxxxxxxx` par ta clé API OpenAI.

### 4️⃣ **Démarrer le serveur**
```bash
npm run dev  # ou yarn dev
```
Le projet sera accessible sur `http://localhost:3000`.

---

## 🛠️ Technologies Utilisées
- **Next.js** (Framework React moderne)
- **OpenAI GPT-4o** (Intelligence Artificielle)
- **TypeScript** (Sécurisation du code)
- **Tailwind CSS** (Style moderne et responsive)

---

## 📂 Structure du Projet
```
📂 chatbot-ai/
├── 📂 app/
│   ├── 📂 api/chat/route.ts  # API de communication avec OpenAI
│   ├── 📂 components/
│   │   ├── chat-message.tsx   # Composant d'affichage des messages
│   │   ├── loading-dots.tsx   # Indicateur de chargement
│   ├── page.tsx  # Page principale du chatbot
├── 📂 public/  # Images et assets
├── 📂 styles/  # Fichiers CSS
├── .env.local  # Variables d'environnement (non versionnées)
├── package.json  # Dépendances du projet
├── next.config.mjs  # Configuration Next.js
└── README.md  # Documentation du projet
```

---

## ❓ Dépannage et FAQ

### 🛠 **1. L'API OpenAI renvoie une erreur 500 ?**
- Vérifie que la **clé API OpenAI est bien définie** dans `.env.local`.
- Redémarre Next.js après modification :
  ```bash
  npm run dev
  ```
- Vérifie les logs dans `app/api/chat/route.ts` :
  ```typescript
  console.error("Error in chat API:", error);
  ```

### 🔗 **2. Comment tester l'API avec Postman ou cURL ?**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "Hello!"}]}'
```

---

## 📝 Auteur et Licence
Développé par **[Ton Nom]** 🚀
Licence **MIT** - Utilisation libre avec attribution.

📌 **N'oublie pas de mettre une ⭐ sur le repo GitHub si ce projet t'a aidé !**


