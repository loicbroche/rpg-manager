export const objectToArray = (_Object) => {
    var _Array = [];
    for(var name in _Object){
        _Array[name] = _Object[name];
    }
    return _Array;
}