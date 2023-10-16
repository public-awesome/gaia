(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{561:function(t,e,a){"use strict";a.r(e);var l=a(1),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"build-gaia-deterministically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-gaia-deterministically"}},[t._v("#")]),t._v(" Build Gaia Deterministically")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/images/tree/master/rbuilder",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tendermint rbuilder Docker image"),a("OutboundLink")],1),t._v(" provides a deterministic build environment that is used to build Cosmos SDK applications. It provides a way to be reasonably sure that the executables are really built from the git source. It also makes sure that the same, tested dependencies are used and statically built into the executable.")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Make sure you have "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker installed on your system"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("All the following instructions have been tested on "),a("em",[t._v("Ubuntu 18.04.2 LTS")]),t._v(" with "),a("em",[t._v("docker 20.10.2")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),a("p",[t._v("Clone "),a("code",[t._v("gaia")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvZ2FpYS5naXQK"}}),t._v(" "),a("p",[t._v("Checkout the commit, branch, or release tag you want to build:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2QgZ2FpYS8KZ2l0IGNoZWNrb3V0IHY0LjIuMQo="}}),t._v(" "),a("p",[t._v("The buildsystem supports and produces binaries for the following architectures:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("darwin/amd64")])]),t._v(" "),a("li",[a("strong",[t._v("linux/amd64")])]),t._v(" "),a("li",[a("strong",[t._v("linux/arm64")])]),t._v(" "),a("li",[a("strong",[t._v("windows/amd64")])])]),t._v(" "),a("p",[t._v("Run the following command to launch a build for all supported architectures:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWFrZSBkaXN0Y2xlYW4gYnVpbGQtcmVwcm9kdWNpYmxlCg=="}}),t._v(" "),a("p",[t._v("The build system generates both the binaries and deterministic build report in the "),a("code",[t._v("artifacts")]),t._v(" directory.\nThe "),a("code",[t._v("artifacts/build_report")]),t._v(" file contains the list of the build artifacts and their respective checksums, and can be used to verify\nbuild sanity. An example of its contents follows:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"QXBwOiBnYWlhZApWZXJzaW9uOiB2NC4yLjEKQ29tbWl0OiBkYmQ4YTZmYjUyMmM1NzFkZWJmOTU4ODM3ZjkxMTNjNTZkNDE4ZjZiCkZpbGVzOgogMjlkMjE5YjBiMTIwYjMxODhiZDdjZDcyNDlmYzk2YjkgIGdhaWFkLXY0LjIuMS1kYXJ3aW4tYW1kNjQKIDgwMzM4ZDlmMGU1NWVhOGY2YzkzZjJlYzdkNGUxOGQ2ICBnYWlhZC12NC4yLjEtbGludXgtYW1kNjQKIDliYzc3YTUxMmFjY2E2NzNjYTE3NjlhZTY3YjRkNmM3ICBnYWlhZC12NC4yLjEtbGludXgtYXJtNjQKIGM4NDM4Nzg2MGY1MjE3OGUyYmZmZWUwODg5NzU2NGJiICBnYWlhZC12NC4yLjEtd2luZG93cy1hbWQ2NC5leGUKIGMyNWNjYThjY2NlZWMwNmE2ZmFiYWU5MGY2NzFmYWIxICBnYWlhZC12NC4yLjEudGFyLmd6CkNoZWNrc3Vtcy1TaGEyNTY6CiAwNWU1YjkwNjRiYWM0ZTcxZjAxNjJjNGMzYzNiZmY1NWRlZjIyY2EwMTZkMzQyMDVhNTUyMGZlZjg5ZmQyNzc2ICBnYWlhZC12NC4yLjEtZGFyd2luLWFtZDY0CiBjY2RhNDIyY2JkYTI5YzcyM2FhZjI3NjUzYmNmMGY2NDEyZTEzOGVlYzMzZmJhMmI0OWRlMTMxZjlmZmJlMmQyICBnYWlhZC12NC4yLjEtbGludXgtYW1kNjQKIDk1Zjg5ZTgyMTNjYjc1OGQxMmUxYjBiNjMxMjg1OTM4ZGU4MjJkMDRkMmUyNWYzOTllOTljMGI3OTgxNzNjZmQgIGdhaWFkLXY0LjIuMS1saW51eC1hcm02NAogN2VmOThmMDA0MWYxNTczZjBhODYwMWFiYWQ0YTE0YjFjMTYzZjQ3NDgxYzdiYTE5NTRmZDgxZWQ0MjNhNjQwOCAgZ2FpYWQtdjQuMi4xLXdpbmRvd3MtYW1kNjQuZXhlCiA0MjI4ODNiYTQzYzk2YTZlYTVlZjk1MTJkMzkzMjFkZDEzNTY2MzNjNmE5NTA1NTE3YjljNjUxNzg4ZGY0YTdmICBnYWlhZC12NC4yLjEudGFyLmd6Cg=="}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);