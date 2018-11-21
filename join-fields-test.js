function joinValues() {
    var valueOne = loader.engine.document.getElementById(47408800).getProperty('value.value');
    var valueTwo = loader.engine.document.getElementById(47408837).getProperty('value.value');
    const joinedValues = valueOne + "-" + valueTwo ;
    loader.engine.document.getElementById(47408836).setValue(({"value": joinedValues}));
}
    
window.onchange = joinValues;
