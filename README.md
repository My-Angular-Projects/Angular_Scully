# Awesome Blog

Команда `npx scully --project awesome-blog` выдает ошибку:

```bash
$ npx scully --project awesome-blog                          
⚠ Folder "./scully" doesn't seem to contain custom plugins
x Angular distribution files not found, run "ng build" first
```

... возможная причина - на момент создания учебного проекта Scully не поддерживает версию 17 Angular, используемую в проекте.

Есть также ответ по теме из сообщества Angular:

> Hi, I would not encourage using Scully nowadays.
The project is no longer maintained since a few versions (and due to some Angular internal changes, as far as I know, Scully is no longer able to discover routes, making it quite useless).

> Scully main focus was to provide a SSG (static site generation) for Angular.
The internals are about using GuessJS to understand the application routing structure to run the application at compilation time to make screenshots of all selected routes to create static html versions of them.
But latest changes upon Angular routing block GuessJS to work as intended.

> Scully was a good project but nowadays, to generate SSG you have two solutions:
> - Angular with SSR package
> - [AnalogJS](https://analogjs.org)

> If that's related to the Create a personal blog with Jamstack, Scully plugins, and SPA techniquesproject, I encourage you to use AnalogJS.
By creating a new application with the CLI, you will be asked if you want to bootstrap the application as a blog: https://analogjs.org/docs/getting-started#creating-a-new-application

Ссылка на исходный код из книги - [Angular-Projects-Third-Edition](https://github.com/PacktPublishing/Angular-Projects-Third-Edition)
