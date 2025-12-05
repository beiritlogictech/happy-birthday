# 🎉 Geburtstagskarte – Responsives Webprojekt mit Schneeflocken-Animation

Eine responsive digitale Geburtstagskarte mit zentriertem Bild, sanfter fallender Schneeflocken-Animation und harmonischem Hintergrund-Design. Gebaut mit **HTML5**, **CSS3**, **JavaScript** und **jQuery**.

---

## ✨ Funktionen

- **Responsives Bildanzeige** – Perfekt zentriert (horizontal & vertikal), proportionale Skalierung, maximale Breite: 1090px
- **Schneeflocken-Animation** – Dynamisch generierte Flocken (40–120px) mit variablen Geschwindigkeiten und horizontaler Drift
- **Harmonisches Design** – Warme Hintergrundfarbe (#f7c4d5), keine Layout-Verschiebungen

---

## 📂 Projektstruktur

```text
├── index.html
├── style.css
├── script.js
├── happy-birthday.png
└── README.md
```

---

## 🚀 Verwendung

- Projekt herunterladen oder klonen
- `index.html` im Browser öffnen
- Stelle sicher, dass `happy-birthday.png` im gleichen Ordner liegt
- Die Animation startet automatisch

---

## 🛠 Technologien

- HTML5
- CSS3 (Flexbox, Animationen)
- JavaScript / jQuery
- Unicode-Schneeflocken (❆)

---

## 🔧 Anpassungsoptionen

### Schneeflocken-Größe

Standardgrößenbereich:

```javascript
// Standard: 40–120px
const size = 40 + Math.random() * 80;
```

Beispiel für größere Flocken:

```javascript
// Beispiel: 60–180px
const size = 60 + Math.random() * 120;
```

### Menge der Schneeflocken

```javascript
// Standard: alle 150ms eine neue Schneeflocke
setInterval(createSnowflake, 150); // niedrigerer Wert = mehr Schnee
```

---

- Weihnachtskarten und festliche Grüße
- Event-Einladungen
- Portfolio-Showcase-Projekte

- Digitale Geburtstagswünsche
- Persönliche Grußseiten
- Saisonale Webseiten
- Übungsprojekt für HTML/CSS/JS

---

## 📜 Lizenz / License

Frei nutzbar, modifizierbar und erweiterbar.

## 🌍 Sprachen / Languages

- Deutsch
- English

---

## 📝 Autor / Author

Erstellt von / Created by: beiritlogictech

---

## 💬 Rückmeldung / Feedback

Gerne kannst du Verbesserungsvorschläge machen! / Feel free to suggest improvements!
