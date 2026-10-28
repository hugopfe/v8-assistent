document.querySelector("#start").addEventListener("click", async () => {
  const status = document.querySelector("#status")

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  })

  if (!tab?.id) {
    status.textContent = "Nenhuma aba ativa encontrada."
    return
  }

  try {
    const result = await chrome.tabs.sendMessage(tab.id, {
      type: "IDENTIFY_PENDENCES",
    })

    status.textContent =
      `Consultas pendentes encontradas: ${result.quantity}`
  } catch (err) {
    status.textContent =
      "Não foi possível acessar esta página. Verifique se ela é do V8."
    console.error(err);
    
  }
})
