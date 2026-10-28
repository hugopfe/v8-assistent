chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message.type !== "IDENTIFY_PENDENCES") {
    return
  }

  const rows = [...document.querySelectorAll("table tr")]

  const pending = rows.filter((row) => {
    const text = row.innerText.replace(/\s+/g, " ").trim()

    return text.includes("Aguardando consentimento")
  })

  respond({quantity: pending.length})
})
