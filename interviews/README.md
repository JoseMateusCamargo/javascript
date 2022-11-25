<img src="https://i.ibb.co/M6nBBb0/mascote.png" align="right" width="130">

# JavaScript e JQuery

## Interview Question

Questões utilizadas em entrevistas técnicas.

#### _Let's Code!_

- Amazon Interview Question
    - Cell compete
- Outros
    - Contador de ocorrencia

--- 

### Amazon Interview Question

**Cell compete**

Oito casas, representadas como células, são dispostas em linha reta. A cada dia, todas as células competem com células
adjacentes. Um valor inteiro 1 representa uma célula ativa e um valor de 0 representa uma célula inativa, se o vizinho
em ambos os lados da célula estiver ativo ou inativo, a célula torna-se inativa no dia seguinte, caso contrário,
torna-se ativa. As duas células em cada uma ou têm uma única célula adjacente, então suponha que o espaço desocupado no
lado oposto seja uma célula inativa, mesmo depois de atualizar o estado da célula, considere seu estado anterior ao
atualizar o estado das outras células. As informações de estado das células devem ser atualizadas simultaneamente.
[Solution](https://github.com/JoseMateusCamargo/javascript/blob/main/interview-question/amazon.cell.compete.js)

---

### Outros

**Contador de ocorrencia**

```Javascript
const frequencies = (arr) =>
    arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1
        return a
    }, {})

console.log(frequencies(['a', 'b', 'b', 'f', 'b', 'b', 'w']))
// { a: 1, b: 4, f: 1, w: 1 }

console.log(frequencies([...'contador de ocorrencia']))
// { c: 3, o: 4, n: 2, t: 1, a: 2, d: 2, r: 3, ' ': 2, e: 2, i: 1 }
```