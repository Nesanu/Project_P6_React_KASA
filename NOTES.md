
# Mes notes 

### Acceder aux options de mon IDE (éditeur de code)

Pour importer ou voir ce que mon éditeur de code aura à me proposer. 
Je me place à la fin de mon mot/variable/fonction -->
Puis j'appuie sur 'CTRL + Espace" afin d'avoir une liste de suggestion via mon éditeur de code (IDE).


### Navigation import 

/ => origine de mon projet
./ => à l'origine de où je me situe
../ => Un dossier en arrière de où je me situe 

### TODO 

: Convertir les modules SCSS en inline ou inversement c'est mon choix perso, mais à garder une unicité de gestion de SCSS. 

Avoir la définition de la différence entre l'utilisation de module ou non avec scss : 
Définition → 

### **Différence entre SCSS classique et SCSS modules dans React**  

Dans un projet **React**, l'utilisation de **SCSS classique** et des **modules SCSS** impacte la façon dont les styles sont appliqués et gérés.

---

## **1. SCSS classique (global)**
### 🔹 **Caractéristiques :**  
- Les styles sont **globaux**, donc une classe CSS définie dans un fichier SCSS peut affecter **n'importe quel composant** du projet.  
- Risque élevé de **conflits de styles** si plusieurs composants utilisent les mêmes classes.  
- Généralement importé dans un fichier **global** (`index.scss`) ou dans un composant `App.js`.  

### ✅ **Quand l'utiliser ?**  
- Pour des **styles généraux**, comme les resets, les thèmes, et les styles communs aux composants.  

### **Exemple :**
#### **Fichier `styles.scss` (global)**
```scss
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```
#### **Import et utilisation dans React :**
```jsx
import "./styles.scss";

function Button() {
  return <button className="button">Cliquez ici</button>;
}

export default Button;
```
### **⚠️ Problème potentiel :**
Si un autre composant utilise `.button`, il héritera des mêmes styles, ce qui peut poser problème si des styles spécifiques sont nécessaires.

---

## **2. SCSS Modules (localisé)**
### 🔹 **Caractéristiques :**  
- Chaque classe est **localisée** au fichier dans lequel elle est importée, évitant les conflits de styles.  
- Les classes CSS sont transformées en **identifiants uniques** (ex: `button__xyz123`), ce qui empêche d'écraser d'autres styles.  
- Plus adapté aux **projets React modulaire** (comme Next.js, Create React App).  

### ✅ **Quand l'utiliser ?**  
- Pour les **composants individuels**, lorsque l'on veut éviter que les styles affectent d'autres éléments du projet.  

### **Exemple :**
#### **Fichier `Button.module.scss` (module SCSS)**
```scss
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```
#### **Import et utilisation dans React :**
```jsx
import styles from "./Button.module.scss";

function Button() {
  return <button className={styles.button}>Cliquez ici</button>;
}

export default Button;
```
### **🔍 Avantages :**  
✅ **Pas de conflits de styles** entre les composants  
✅ **Styles encapsulés** et mieux organisés  
✅ **Parfait pour les projets React évolutifs**

---

## **📌 Différence principale :**  

| **Critère**          | **SCSS classique (global)** | **SCSS Modules (localisé)** |
|----------------------|----------------------|----------------------|
| **Portée des styles**  | Globale (peut affecter tout le projet) | Limitée au fichier où il est importé |
| **Risque de conflits** | Élevé si plusieurs composants utilisent les mêmes classes | Aucun (les classes sont renommées automatiquement) |
| **Facilité d’utilisation** | Simple mais moins organisé | Un peu plus de configuration mais plus robuste |
| **Meilleur usage** | Styles globaux et thèmes | Composants individuels |

### **Conclusion**  
- **SCSS classique** est utile pour **les styles globaux**.  
- **SCSS Modules** est recommandé pour **les composants React**, car il garantit un **style isolé et maintenable**.



Voici une documentation détaillée sur l'utilisation de `.map()` dans le code, faisant référence à [GALLERY.JSX](src/components/gallery/Gallery.jsx):  
---
### **Explication de `{datas.map((data) => ( <Card ... /> ))}`**
```javascript
{datas.map((data) => (
  <Card key={data.id} id={data.id} title={data.title} cover={data.cover} />
))}
```
---

### **📌 Description**
Ce morceau de code utilise la méthode `.map()` pour parcourir le tableau `datas` et générer une liste de composants `<Card />`.  

Chaque élément de `datas` est représenté par `data`, qui est un objet contenant les informations d'un logement (comme son `id`, `title`, et `cover`).  

---

### **📍 Fonctionnement de `.map()`**
`.map()` est une méthode JavaScript qui permet de **transformer un tableau** en **un nouveau tableau** en appliquant une fonction sur chaque élément.  
Dans ce cas, `.map()` est utilisé pour créer un tableau de composants React (`<Card />`).

#### **Syntaxe de `.map()` :**
```javascript
array.map((element, index) => {
  return newElement;
});
```
- **`element`** → élément actuel du tableau (`data` dans notre cas).
- **`index`** → index de l'élément dans le tableau (non utilisé ici).
- **Retourne un nouvel élément** pour chaque élément du tableau.

---

### **💡 Application dans le code**
#### **Avant `.map()` (données brutes) :**
```javascript
const datas = [
  { id: 1, title: "Logement A", cover: "image1.jpg" },
  { id: 2, title: "Logement B", cover: "image2.jpg" }
];
```
#### **Après `.map()` (résultat généré) :**
```javascript
[
  <Card key={1} id={1} title="Logement A" cover="image1.jpg" />,
  <Card key={2} id={2} title="Logement B" cover="image2.jpg" />
]
```
---

### **📌 Pourquoi utiliser `.map()` ici ?**
1. **Affichage dynamique** : Permet de générer automatiquement un ensemble de composants sans les écrire manuellement.
2. **Meilleure maintenabilité** : Si `datas` change, la liste s'adapte sans modifier le code.
3. **Performance et clarté** : `.map()` est une approche fonctionnelle plus lisible que `forEach()` ou une boucle `for`.

---

### **⚠️ Erreurs possibles**
- **`datas.map is not a function`**  
  🔹 Vérifier que `datas` est bien un **tableau** avant d'appeler `.map()`.  
  👉 Solution : Initialiser `datas` à `[]` avec `useState([])`.  
  ```javascript
  const [datas, setDatas] = useState([]);
  ```

- **Problème de clé unique (`key`)**  
  🔹 React exige une clé unique (`key`) pour chaque élément de liste.  
  👉 Solution : Utiliser `data.id` comme `key` :
  ```javascript
  <Card key={data.id} ... />
  ```

---

### **✅ Résumé**
- `.map()` sert à **transformer** un tableau de données (`datas`) en **une liste de composants React**.
- Il **évite les répétitions** et **optimise l'affichage dynamique**.
- Une `key` unique est nécessaire pour chaque élément affiché.

---

Tu as maintenant une explication claire sur l'utilisation de `.map()` ! 🚀