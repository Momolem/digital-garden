---
title: Automated Unit Tests
tags:
  - cleancode
  - cleancode/ccd
  - cleancode/ccd/practic
---
# Automated [Unit Tests](/docs/main/CleanCode/CleanCodeDeveloper/Unit%20Test)

>**Warum?**
>Nur automatisierte Tests werden auch wirklich konsequent ausgeführt. Je punktgenauer sie Code testen, desto besser.

Im [Orangenen Grad](/docs/main/CleanCode/CleanCodeDeveloper/Grade/Orangener%20Grad) haben wir [Integration Tests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Integration%20Tests.md) eingeführt, nun geht es um [Unit Tests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Unit%20Test.md). Im Gegensatz zu [Integrationstests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Integration%20Tests.md) wird bei [Unit Tests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Unit%20Test.md) eine einzelne Funktionseinheit (vor allem Klassen, aber auch Methoden oder Komponenten) isoliert getestet. Dazu ist es erforderlich, diese Funktionseinheit von ihren Abhängigkeiten befreien zu können. Sollen [Unit Tests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Unit%20Test.md) im Nachhinein für bestehenden Code ergänzt werden, sind häufig Refaktorisierungen erforderlich. Wir haben durch die [Integrationstests](docs/main/CleanCode/1.%20CleanCodeDeveloper/Integration%20Tests.md) die Sicherheit, dass wir dabei keine Fehler einbauen.

Automatisierte Tests bieten zweifachen Nutzen:

-   Sie sparen Zeit
-   Sie nehmen Angst

Je stärker eine Codebasis in Veränderung begriffen ist, desto eher ist die Zeitersparnis zu spüren. Denn wo Code sich verändert, muss immer wieder Neues und auch Altes (Regressionstests) getestet werden. Da spart Automatisation einfach Zeit. Und je komplexer der Code, desto größer ist die Angstreduktion. Denn wenn komplexer Code verändert werden soll – um Funktionalität hinzuzufügen, ihn zu optimieren oder schlicht zu korrigieren –, da besteht hohe Gefahr, ungewollt Fehler einzuführen. Kleinschrittige automatisierte Tests decken diese jedoch auf, sodass kein Grund zur Angst besteht, zu „verschlimmbessern“.

Siehe auch unter [Tools](https://clean-code-developer.de/weitere-infos/werkzeuge/).