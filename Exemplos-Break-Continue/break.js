var texto = " "
for (i = 0; i <10; i++) {
if (i == 3) {
continue;
}
texto = texto "O número é " + i + "<br>";
}
document.write(texto);