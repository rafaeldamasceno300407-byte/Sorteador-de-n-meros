# 🎲 Sorteador de Números

Um **pequeno jogo de sorteio de números** feito em **HTML, CSS e JavaScript**.  
O usuário escolhe um intervalo de números e a quantidade de números a serem sorteados, e o sistema retorna números aleatórios **não repetidos** dentro desse intervalo.

O botão **Reiniciar** só é habilitado após um sorteio válido, garantindo uma experiência mais segura, intuitiva e organizada.

---

## 🎯 Funcionalidades

- Escolher a quantidade de números a serem sorteados.  
- Definir um intervalo (`Do número` e `Até o número`).  
- Sorteio de números **aleatórios e não repetidos**.  
- Validações para:
  - Campos vazios.
  - Quantidade menor ou igual a zero.
  - Intervalo inválido (`Do número` maior que `Até o número`).
  - Quantidade maior que o intervalo disponível.
- Botão **Reiniciar** inicia desabilitado e só é ativado após um sorteio válido.
- Reiniciar limpa todos os campos e o resultado.
- Suporte a **atalhos de teclado** para melhor usabilidade.

---

## ⌨️ Atalhos de Teclado

- **Enter**
  - No campo **Quantidade** → move para **Do número**
  - No campo **Do número** → move para **Até o número**
  - No campo **Até o número** → realiza o sorteio
- **Barra de espaço (Space)**
  - Reinicia o jogo (somente quando o botão **Reiniciar** estiver habilitado)

---

## 🖥️ Tecnologias Utilizadas

- HTML  
- CSS  
- JavaScript  

---

## 📝 Observações

- O sistema não permite números negativos.
- O sorteio garante que os números não se repitam.
- Caso os valores sejam inválidos, alertas são exibidos para orientar o usuário.
- A navegação por teclado melhora a acessibilidade e a experiência do usuário.
