📋 **ІНСТРУКЦІЯ: Як підключити Google Sheets**

1. **Тепер потрібно замінити URL в ServiceModal.jsx на свій Script ID**

## Кроки:

### Крок 1: Створи таблицю Google Sheets
- Йди на https://sheets.google.com
- Натисни "Новий" → "Таблиця"
- Назви її "Замовлення на послуги"
- Додай заголовки в перший рядок:
  - A1: Дата та час
  - B1: Ім'я
  - C1: Email
  - D1: Телефон
  - E1: Послуга
  - F1: Опис

### Крок 2: Створи Google Apps Script
- Йди на https://script.google.com
- Натисни "Новий проект"
- Замініть увесь код на це:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const timestamp = new Date().toLocaleString('uk-UA');
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.service,
      data.description
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Крок 3: Розгорни як веб-додаток
1. В меню "Deploy" → "New deployment"
2. Вибери тип: "Web app"
3. "Execute as" → твій акаунт
4. "Who has access" → "Anyone"
5. Натисни "Deploy"
6. Скопіюй URL з повідомлення (виглядає так):
   ```
   https://script.google.com/macros/d/ТВІЙ_SCRIPT_ID/usercopy
   ```

### Крок 4: Скопіюй URL в проект
- Відкрий файл `src/components/ServiceModal.jsx`
- Знайди строку:
  ```javascript
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercopy';
  ```
- Замініть `YOUR_SCRIPT_ID` на свій ID (це частина між `/d/` та `/usercopy`)

### Крок 5: Дай доступ скрипту до таблиці
1. В Google Apps Script натисни "Project Settings" ⚙️
2. Скопіюй "Project ID"
3. В своїй Google Sheets таблиці натисни "Поділитися"
4. Додай email з Apps Script (виглядає так: `YOUR-PROJECT-ID@appspot.gserviceaccount.com`)
5. Дай йому доступ як "Редактор"

**Готово! Тепер кожне замовлення буде потрапляти в твою таблицю 📊**

## Перевірка:
- Відкрий форму на сайті
- Заповни й надішли замовлення
- Поверни у Google Sheets - там має з'явитися новий рядок!
