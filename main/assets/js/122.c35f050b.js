(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{582:function(e,a,t){"use strict";t.r(a);var l=t(1),d=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"live-upgrade-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#live-upgrade-tutorial"}},[e._v("#")]),e._v(" Live Upgrade Tutorial")]),e._v(" "),t("p",[e._v("This document demonstrates how a live upgrade can be performed on-chain through a\ngovernance process.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start the network and trigger upgrade")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBzdGFydCBhIGdhaWEgYXBwbGljYXRpb24gZnVsbC1ub2RlCiQgZ2FpYWQgc3RhcnQKCiMgc2V0IHVwIHRoZSBjbGkgY29uZmlnCiQgZ2FpYWQgY29uZmlnIGNoYWluLWlkIHRlc3RpbmcKCiMgY3JlYXRlIGFuIHVwZ3JhZGUgZ292ZXJuYW5jZSBwcm9wb3NhbAokIGdhaWFkIHR4IGdvdiBzdWJtaXQtcHJvcG9zYWwgc29mdHdhcmUtdXBncmFkZSAmbHQ7cGxhbi1uYW1lJmd0OyBcCi0tdGl0bGUgJmx0O3Byb3Bvc2FsLXRpdGxlJmd0OyAtLWRlc2NyaXB0aW9uICZsdDtwcm9wb3NhbC1kZXNjcmlwdGlvbiZndDsgXAotLWZyb20gJmx0O25hbWUtb3Ita2V5Jmd0OyAtLXVwZ3JhZGUtaGVpZ2h0ICZsdDtkZXNpcmVkLXVwZ3JhZGUtaGVpZ2h0Jmd0OyAtLWRlcG9zaXQgMTAwMDAwMDBzdGFrZQoKIyBvbmNlIHRoZSBwcm9wb3NhbCBwYXNzZXMgeW91IGNhbiBxdWVyeSB0aGUgcGVuZGluZyBwbGFuCiQgZ2FpYWQgcXVlcnkgdXBncmFkZSBwbGFuCg=="}})],1),e._v(" "),t("li",[t("p",[e._v("Performing an upgrade")]),e._v(" "),t("p",[e._v("Assuming the proposal passes the chain will stop at given upgrade height.")]),e._v(" "),t("p",[e._v("You can stop and start the original binary all you want, but "),t("strong",[e._v("it will refuse to\nrun after the upgrade height")]),e._v(".")]),e._v(" "),t("p",[e._v("We need a new binary with the upgrade handler installed. The logs should look\nsomething like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"RVsyMDE5LTExLTA1fDEyOjQ0OjE4LjkxM10gVVBHUkFERSAmcXVvdDsmbHQ7cGxhbi1uYW1lJmd0OyZxdW90OyBORUVERUQgYXQgaGVpZ2h0OiAmbHQ7ZGVzaXJlZC11cGdyYWRlLWhlaWdodCZndDs6ICAgICAgIG1vZHVsZT1tYWluCkVbMjAxOS0xMS0wNXwxMjo0NDoxOC45MTRdIENPTlNFTlNVUyBGQUlMVVJFISEhCi4uLgo="}}),e._v(" "),t("p",[e._v("Note that the process will hang indefinitely (doesn't exit to avoid restart loops). So, you must\nmanually kill the process and replace it with a new binary. Do so now with "),t("code",[e._v("Ctrl+C")]),e._v(" or "),t("code",[e._v("killall gaiad")]),e._v(".")]),e._v(" "),t("p",[e._v("In "),t("code",[e._v("gaia/app/app.go")]),e._v(", after "),t("code",[e._v("upgrade.Keeper")]),e._v(" is initialized and set in the app, set the\ncorresponding upgrade "),t("code",[e._v("Handler")]),e._v(" with the correct "),t("code",[e._v("<plan-name>")]),e._v(":")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAgIGFwcC51cGdyYWRlS2VlcGVyLlNldFVwZ3JhZGVIYW5kbGVyKCZxdW90OyZsdDtwbGFuLW5hbWUmZ3Q7JnF1b3Q7LCBmdW5jKGN0eCBzZGsuQ29udGV4dCwgcGxhbiB1cGdyYWRlLlBsYW4pIHsKICAgICAgICAvLyBjdXN0b20gbG9naWMgYWZ0ZXIgdGhlIG5ldHdvcmsgdXBncmFkZSBoYXMgYmVlbiBleGVjdXRlZAogICAgfSkK"}}),e._v(" "),t("p",[e._v("Note that we panic on any error - this would cause the upgrade to fail if the\nmigration could not be run, and no node would advance - allowing a manual recovery.\nIf we ignored the errors, then we would proceed with an incomplete upgrade and\nhave a very difficult time every recovering the proper state.")]),e._v(" "),t("p",[e._v("Now, compile the new binary and run the upgraded code to complete the upgrade:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBjcmVhdGUgYSBuZXcgYmluYXJ5IG9mIGdhaWEgd2l0aCB0aGUgYWRkZWQgdXBncmFkZSBoYW5kbGVyCiQgbWFrZSBpbnN0YWxsCgojIFJlc3RhcnQgdGhlIGNoYWluIHVzaW5nIHRoZSBuZXcgYmluYXJ5LiBZb3Ugc2hvdWxkIHNlZSB0aGUgY2hhaW4gcmVzdW1lIGZyb20KIyB0aGUgdXBncmFkZSBoZWlnaHQ6CiMgYElbMjAxOS0xMS0wNXwxMjo0ODoxNS4xODRdIGFwcGx5aW5nIHVwZ3JhZGUgJmx0O3BsYW4tbmFtZSZndDsgYXQgaGVpZ2h0OiAmbHQ7ZGVzaXJlZC11cGdyYWRlLWhlaWdodCZndDsgICAgICBtb2R1bGU9bWFpbmAKJCBnYWlhZCBzdGFydAoKIyB2ZXJpZnkgdGhlcmUgaXMgbm8gcGVuZGluZyBwbGFuCiQgZ2FpYWQgcXVlcnkgdXBncmFkZSBwbGFuCgojIHZlcmlmeSB5b3UgY2FuIHF1ZXJ5IHRoZSBibG9jayBoZWFkZXIgb2YgdGhlIGNvbXBsZXRlZCB1cGdyYWRlCiQgZ2FpYWQgcXVlcnkgdXBncmFkZSBhcHBsaWVkICZsdDtwbGFuLW5hbWUmZ3Q7Cg=="}})],1)])])}),[],!1,null,null,null);a.default=d.exports}}]);