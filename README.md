# frontend
Single Page Application проекта DoskiAd

### Заметки по деплою

Убедитесь, что в каталоге репозитория присутствует файл publicConf.json

Он должен содержать актуальный адрес, по которому доступен API, в таком формате:

```{ "apiUrl": "http://159.65.200.195/doskiad/" }```

Обновите адрес, если необходимо.
Затем убедитесь, что установлен Node.js, и выполните из каталога репозитория:

```npm install && npm run build```

После этого статические файлы для раздачи будут доступны в подкаталоге dist
