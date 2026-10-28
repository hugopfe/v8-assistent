chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message.type !== "IDENTIFY_PENDENCES") {
    return
  }

  const rows = [...document.querySelectorAll("table tr")]

  const pending = rows.filter((row) => {
    const text = row.innerText.replace(/\s+/g, " ").trim()

    return text.includes("Aguardando Consentimento")
  })

  respond({quantity: pending.length})
})
