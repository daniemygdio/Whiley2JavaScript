

type nat is (int n) where n >= 0

function create(nat size, nat value) -> [nat]:
    r = []
    int i = 0
    while i < size where r is [nat]:
        r = r + [value]
        i = i + 1
    return r

public export method test() -> void:
    assume create(10, 10) == [10,10,10,10,10, 10,10,10,10,10]
    assume create(5, 0) == [0,0,0,0,0]
    assume create(0, 0) == []