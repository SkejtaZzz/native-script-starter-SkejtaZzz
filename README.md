# NativeScript: Scan Inventory (Angular) — Inventory App

## Cel projektu
Zbudowanie podstawowej aplikacji mobilnej w **NativeScript + Angular**, która:
- posiada **3 widoki** i nawigację,
- używa **natywnej funkcji** (wibracja),
- komunikuje się z **API** (min. 1 endpoint),
- ma minimalną **walidację** formularza,
- działa i testowana jest lokalnie na emulatorze/urządzeniu.

---

## Funkcje aplikacji (co działa)

### Widoki (3)
1. **Lista produktów**  
   - wyświetla produkty (nazwa + kod),
   - przejście do szczegółów po kliknięciu,
   - przycisk dodania nowego produktu,
   - przycisk pobrania przykładowych danych z API (opcjonalny, do zaliczenia wymogu API).

2. **Szczegóły produktu**
   - podgląd danych produktu (nazwa, kod),
   - akcja: **Usuń** (z wibracją jako feedback),
   - akcja: **Wróć** do listy.

3. **Dodaj produkt**
   - formularz: **nazwa** i **kod**,
   - minimalna walidacja: pola wymagane,
   - jeśli pola są puste → **wibracja** + brak zapisu,
   - zapis produktu i powrót do listy.

---

## Wymagania z zadania — realizacja

### ✅ Natywna funkcja (min. 1)
**Wibracja telefonu (Vibrate)**:
- użyta w formularzu dodawania produktu, gdy pola są puste,
- użyta jako feedback po usunięciu produktu.

**Uzasadnienie wyboru**:  
Wibracja jest prostą, natywną formą informacji zwrotnej (haptic feedback). Poprawia UX w sytuacjach takich jak błąd walidacji lub wykonanie akcji (np. usunięcie), bez potrzeby dodatkowych okien dialogowych.

**Plugin**:
- `nativescript-vibrate`

---

### ✅ API (min. 1 endpoint)
Aplikacja posiada komunikację z API poprzez `ApiService`.

**Endpoint (GET)**:
- przykładowo używany publiczny endpoint:
  - `https://dummyjson.com/products?limit=10`

**Cel**:
- pobranie listy produktów z API i podmiana danych na liście produktów.

**Obsługa błędów**:
- przy braku internetu/błędzie API aplikacja nie przestaje działać (dane lokalne nadal są dostępne).

---

### ✅ Walidacja formularza
W widoku **Dodaj produkt**:
- `name` i `code` są wymagane,
- jeśli puste → wibracja i brak zapisu.

---

### ✅ Nawigacja
Routing Angular:
- `/products` — lista
- `/products/:id` — szczegóły
- `/add` — dodaj produkt

---

## Struktura projektu (ważne pliki)

### Routing
- `src/app/app.routes.ts` — definicje tras

### Moduł aplikacji
- `src/app/app.module.ts` — importy (Forms, Router, HttpClient), bootstrap

### Komponenty (widoki)
- `src/app/products-list/*` — lista produktów
- `src/app/product-detail/*` — szczegóły produktu
- `src/app/add-product/*` — dodawanie produktu

### Serwisy
- `src/app/product.service.ts` — logika lokalnej listy produktów (BehaviorSubject)
- `src/app/api.service.ts` — pobieranie danych z API (GET)

### Start aplikacji
- `src/main.ts`
- `src/polyfills.ts`

---

## Jak uruchomić projekt lokalnie

### Wymagania
- Node.js + npm
- NativeScript CLI
- Android SDK (Android Studio) / emulator

### Instalacja
npm install

### instalacja pluginu do wibracji
ns plugin add nativescript-vibrate

### Uruchomienie na Androidzie
ns clean
ns run android

Testowanie lokalne (w trakcie developmentu)
1) Test dodawania produktu + natywna funkcja

Wejdź w Dodaj produkt

Kliknij Zapisz bez wpisywania danych
✅ telefon/emulator wykona wibrację i nie zapisze produktu

Wpisz nazwę i kod → Zapisz
✅ produkt pojawi się na liście

2) Test listy i szczegółów

Kliknij produkt na liście
✅ przejście do szczegółów

Kliknij Usuń
✅ produkt znika z listy + wibracja

3) Test komunikacji z API

Na liście kliknij Pobierz z API
✅ produkty z API pojawią się na liście

Wyłącz internet i kliknij ponownie
✅ aplikacja nie crashuje (pozostaje ostatni stan danych)

### Screenshots
![d](https://github.com/user-attachments/assets/4c86b574-1b1c-494c-bf88-e38c2d9e4ab2)
![c](https://github.com/user-attachments/assets/3cf619e3-73fa-4891-b4b4-dbea22c54078)
![b](https://github.com/user-attachments/assets/701d4ce7-24ae-4b73-bb38-43a8a8f9e4fb)
![a](https://github.com/user-attachments/assets/0069f50f-f30e-4d38-9276-effaba1e0e40)


Autor: Dominik
