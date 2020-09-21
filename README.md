# Time Management App (Frontend)

This is the frontend for a time managament App. You can also check the [backend project](https://github.com/danielfaleiro/time-management-app-backend).

## How to install

Run:
```bash
$ npm install
```

## How to run

After installing, you may run:
```bash
$ npm start
```
Then you can view the app at [http://localhost:3000/](http://localhost:3000/).

## Summary

Time Management App allows you to add and manage tasks. You can set a prefered daily hours to work. The app shows which days you have met your hours goal or not.

- Regular users can CRUD tasks.
- User managers can CRUD his/her own tasks and other users (except for Admins).
- Admins can CRUD all tasks and all users.
- If a date meets your hours gold, all its tasks will have a green background. Otherwise, green.
- Filter entries by date from-to

## Forms

Form validation is still not implemented on frontend. If an input field value is missing or incorrect, a notification will show up with a error message from server. The rules for each input are:
- **Name**: optional.
- **Username**: required. Minimum length: 3 characters. Must be unique.
- **Password (creation)**: required. Minimum length: 3 characters.
- **Password (update)**: optional. If left blank, password won't change. It also has a 3 characters minimum length.
- **Hours/Daily Hours**: required. Min: 1. Max: 24.
- **Task**: required.
- **Status**: required. Use 0 for regular user, 1 for user manager or 2 for admin.
