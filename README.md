# 🎉 Birthday Card – Responsive Web Project with Snowflake Animation

A responsive digital birthday card with centered image, gentle falling snowflake animation, and harmonious background design. Built with **HTML5**, **CSS3**, **JavaScript**, and **jQuery**.

---

## ✨ Features

- **Responsive Image Display** – Perfectly centered (horizontal & vertical), proportional scaling, maximum width: 1090px
- **Snowflake Animation** – Dynamically generated flakes (40–120px) with variable speeds and horizontal drift
- **Harmonious Design** – Warm background color (#f7c4d5), no layout shifts

---

## 📂 Project Structure

```text
├── index.html
├── style.css
├── script.js
├── happy-birthday.png
└── README.md
```

---

## 🚀 Usage

- Download or clone the project
- Open `index.html` in your browser
- Make sure `happy-birthday.png` is in the same folder
- The animation starts automatically

---

## 🛠 Technologies

- HTML5
- CSS3 (Flexbox, Animations)
- JavaScript / jQuery
- Unicode Snowflakes (❆)

---

## 🔧 Customization Options

### Snowflake Size

Default size range:

```javascript
// Default: 40–120px
const size = 40 + Math.random() * 80;
```

Example for larger flakes:

```javascript
// Example: 60–180px
const size = 60 + Math.random() * 120;
```

### Number of Snowflakes

```javascript
// Default: new snowflake every 150ms
setInterval(createSnowflake, 150); // lower value = more snow
```

---

## 🎯 Use Cases

- Christmas cards and festive greetings
- Event invitations
- Portfolio showcase projects
- Digital birthday wishes
- Personal greeting pages
- Seasonal websites
- Practice project for HTML/CSS/JS

---

## 📜 License

Free to use, modify, and extend.

## 🌍 Languages

- English
- German

---

## 📝 Author

Created by: beiritlogictech

---

## 💬 Feedback

Feel free to suggest improvements!
