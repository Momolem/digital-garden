---
title: Continuous Delivery
aliases:
  - CD
tags:
  - cleancode
  - cleancode/ccd
  - cleancode/ccd/practic
---
# Continuous Delivery

>**Warum?**
>Als [CleanCodeDeveloper](/docs/main/CleanCode/CleanCodeDeveloper) möchte ich sicher sein, dass ein Setup das Produkt korrekt installiert. Wenn ich das erst beim Kunden herausfinde, ist es zu spät.

Im [grünen Grad](/docs/main/CleanCode/CleanCodeDeveloper/Grade/Grüner%20Grad) haben wir den [Continuous Integration](docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Continuous%20Integration.md) Prozess für Build und Test aufgesetzt. Damit sorgt der [Continuous Integration](docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Continuous%20Integration.md) Prozess dafür, dass Fehler während der Build- und Testphase schnell entdeckt werden. Wenn z.B. eine Änderung am Code dazu führt, dass eine andere Komponente nicht mehr übersetzt werden kann, weist der [Continuous Integration](docs/main/CleanCode/CleanCodeDeveloper/Praktiken/Continuous%20Integration.md) Prozess kurze Zeit nach dem Commit der Änderung auf den Fehler hin. Wenn am Ende jedoch ein Setup Programm produziert wird, welches sich aufgrund von Fehlern nicht installieren lässt, haben wir unser Ziel trotzdem nicht erreicht: funktionierende Software die bei unseren Kunden installiert werden kann.

Folglich müssen wir auch die Phasen Setup und Deployment automatisieren, um sie per Knopfdruck ausführen zu können. Nur so können wir sicher sein, dass wir installierbare Software produzieren. Und durch die Automatisierung ist sichergestellt, dass niemand einen wichtigen Schritt, der „zu Fuß“ ausgeführt werden muss, vergisst. So kann jeder im Team zu jedem Zeitpunkt den aktuellen Stand des Produktes installationsfertig produzieren und installieren.

Siehe auch unter [Tools](https://clean-code-developer.de/weitere-infos/werkzeuge/).
