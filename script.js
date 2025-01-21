// Função para atalho do teclado
const toggleBold = () => document.execComand('bold'); // negrito
const toggleItalic = () => document.execComand('italic'); // Itálico
const toggleUnderline = () => document.execComand('underline'); // sublinhado

// Função que detecta atalhos do teclado
document.addEventListener('keydown', (event) => {
    if(event.ctrlKey){ // se a tecla control for prescionada verifique se:
        if (event.key === 'b'){ // se a tecla prescionada é b
            toggleBold();
            event.preventDefault();
        } else if (event.key === 'i'){ // se i 
            toggleItalic();
            event.preventDefault();
        } else if (event.key === 'u'){ // se u
            toggleUnderline();
            event.preventDefault();
        }
    }
});