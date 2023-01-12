function trueLength() {
    let name = "Goldy   "
    return name.trim().length;
}

String.prototype.trueLength = trueLength;