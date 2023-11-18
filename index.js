import { createKeybindingsHandler } from "tinykeys"

const PREFIX = "Control+i "

// gather settings
const settings = {
  "d": () => {
    const mapId = game.getMyPlayer().map
    game.teleport(mapId, 78, 44)
  },
  "u d": () => { alert("pressed `u d`") },
}

let binds = {}
Object.keys(settings).forEach(k => { binds[`${PREFIX}${k}`] = settings[k] })
window.addEventListener("keydown", createKeybindingsHandler(binds))
