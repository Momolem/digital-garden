---
title: Automated Unit Tests
tags:
  - cleancode
  - cleancode/ccd
  - cleancode/ccd/practic
---
# Automated Unit Tests

>**Warum?**
>Nur automatisierte Tests werden auch wirklich konsequent ausgeführt. Je punktgenauer sie Code testen, desto besser.

Im [Orangenen Grad](/docs/main/CleanCode/CleanCodeDeveloper/Grade/Orangener%20Grad) haben wir Integration Tests eingeführt, nun geht es um Unit Tests. Im Gegensatz zu Integrationstests wird bei Unit Tests eine einzelne Funktionseinheit (vor allem Klassen, aber auch Methoden oder Komponenten) isoliert getestet. Dazu ist es erforderlich, diese Funktionseinheit von ihren Abhängigkeiten befreien zu können. Sollen Unit Tests im Nachhinein für bestehenden Code ergänzt werden, sind häufig Refaktorisierungen erforderlich. Wir haben durch die Integrationstests die Sicherheit, dass wir dabei keine Fehler einbauen.

Automatisierte Tests bieten zweifachen Nutzen:

-   Sie sparen Zeit
-   Sie nehmen Angst

Je stärker eine Codebasis in Veränderung begriffen ist, desto eher ist die Zeitersparnis zu spüren. Denn wo Code sich verändert, muss immer wieder Neues und auch Altes (Regressionstests) getestet werden. Da spart Automatisation einfach Zeit. Und je komplexer der Code, desto größer ist die Angstreduktion. Denn wenn komplexer Code verändert werden soll – um Funktionalität hinzuzufügen, ihn zu optimieren oder schlicht zu korrigieren –, da besteht hohe Gefahr, ungewollt Fehler einzuführen. Kleinschrittige automatisierte Tests decken diese jedoch auf, sodass kein Grund zur Angst besteht, zu „verschlimmbessern“.

Siehe auch unter [Tools](https://clean-code-developer.de/weitere-infos/werkzeuge/).
