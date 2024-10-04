// Mostrar mensaje de bienvenida
window.onload = function() {
    alert("Benvingut al Lloc de Futbol!");
};

// Cambiar la clase activa del enlace de navegación
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// Mostrar información adicional en cada sección (por ejemplo, "Història", "Equips", etc.)
document.getElementById("historia").addEventListener("click", function() {
    alert("Història del futbol: més informació pròximament!");
});

document.getElementById("equips").addEventListener("click", function() {
    alert("Equips destacats: FC Barcelona, Reial Madrid, Manchester United, etc.");
});

document.getElementById("jugadors").addEventListener("click", function() {
    alert("Jugadors famosos: Messi, Ronaldo, Pelé, i molts més.");
});

document.getElementById("contacte").addEventListener("click", function() {
    alert("Contacta'ns a contacte@futbolweb.com per a més informació.");
});
