texto=" ";
for (i = 0; i < 10; i++) {
if (i === 9)
{
continue;
}
texto += "O número é " + i + "<br>";
}
document.write(texto);