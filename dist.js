(() => {
  // node_modules/tinykeys/dist/tinykeys.module.js
  var t = ["Shift", "Meta", "Alt", "Control"];
  var e = "object" == typeof navigator ? navigator.platform : "";
  var n = /Mac|iPod|iPhone|iPad/.test(e);
  var r = n ? "Meta" : "Control";
  var o = "Win32" === e ? ["Control", "Alt"] : n ? ["Alt"] : [];
  function i(t2, e2) {
    return "function" == typeof t2.getModifierState && (t2.getModifierState(e2) || o.includes(e2) && t2.getModifierState("AltGraph"));
  }
  function a(t2) {
    return t2.trim().split(" ").map(function(t3) {
      var e2 = t3.split(/\b\+/), n2 = e2.pop();
      return [e2 = e2.map(function(t4) {
        return "$mod" === t4 ? r : t4;
      }), n2];
    });
  }
  function u(e2, n2) {
    var r2;
    void 0 === n2 && (n2 = {});
    var o2 = null != (r2 = n2.timeout) ? r2 : 1e3, u2 = Object.keys(e2).map(function(t2) {
      return [a(t2), e2[t2]];
    }), c = /* @__PURE__ */ new Map(), f = null;
    return function(e3) {
      e3 instanceof KeyboardEvent && (u2.forEach(function(n3) {
        var r3 = n3[0], o3 = n3[1], a2 = c.get(r3) || r3;
        !function(e4, n4) {
          return !(n4[1].toUpperCase() !== e4.key.toUpperCase() && n4[1] !== e4.code || n4[0].find(function(t2) {
            return !i(e4, t2);
          }) || t.find(function(t2) {
            return !n4[0].includes(t2) && n4[1] !== t2 && i(e4, t2);
          }));
        }(e3, a2[0]) ? i(e3, e3.key) || c.delete(r3) : a2.length > 1 ? c.set(r3, a2.slice(1)) : (c.delete(r3), o3(e3));
      }), f && clearTimeout(f), f = setTimeout(c.clear.bind(c), o2));
    };
  }

  // index.js
  var PREFIX = "Control+i ";
  var settings = {
    "d": () => {
      const mapId = game.getMyPlayer().map;
      game.teleport(mapId, 78, 44);
    },
    "u d": () => {
      alert("pressed `u d`");
    },
    "i d r": () => {
      window.open("https://www.notion.so/pokota/a6840685dbc14681934ea74c69fbd1d8?v=e7495b8e056f4e6e875fe90a6e502688");
    }
  };
  var binds = {};
  Object.keys(settings).forEach((k) => {
    binds[`${PREFIX}${k}`] = settings[k];
  });
  window.addEventListener("keydown", u(binds));
})();
