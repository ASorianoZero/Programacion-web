/* Modelo de objeto de documento DOM
- Toda la estructura HTML
- 99% de las veces que usamos JS interactuamos con DOM
- DOM no es JS
- DOM se considera un API (aplication program interface)
- DOM viene integrado en navegador y se puede usar con JS




NODITOS.
Cada parte del documento es un nodo, aunque técnicamente los elementos son objetos, para JS cada parte del árbol es un nodo.
Hay varios tipos de nodos: 12, los más usados son:
- Element node: cualquier etiqueta html -1
- Text node: contenido de etiqueta -3
- Comment node: cualquier comentario html -8

Cualquier consulta para saber el tipo de nodo, nos devuelve un número. 




Acceder a DOM desde navegador.
- Se utilizan DevTools
- Seleccionar etiqueta que queremos consultar
- En consola: comando: $0 Despliega propiedades del nodín (sólo funciona en navegador, no en JS)




Consultar H1.
>> $0 // nodo del h1
>> $0 .id // "titlel"
>> $0.className // "title"
>> $0.textContent // "DOM"
>> $0.nodeType // 1




Consultando contenido de h1.
>> $0.childNodes // NodeList
>> $0.childNodes[0] // #text "DOM"
>> $0.childNodes[0].length // 27
>> $0.childNodes[0].data // "DOM"
>> $0.chidNodes[0].nodeType // 8




Consultar a comentario.
>> $0 // <!--  <p> Soy un mendigo señor comentario </p> -->
>> $0.textContent // "<p> Soy un no tan mendigo comentario </p>"
>> $0.length // 28
>> $0.nodeType // 8














*/