(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{515:function(e,a,t){"use strict";t.r(a);var r=t(1),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cosmos-hub-4-gaia-v11-upgrade-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-hub-4-gaia-v11-upgrade-instructions"}},[e._v("#")]),e._v(" Cosmos Hub 4, Gaia v11 Upgrade, Instructions")]),e._v(" "),t("p",[e._v("This document describes the steps for validators and full node operators, to upgrade successfully to the Gaia v11 release.\nFor more details on the release, please see the "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v11.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("release notes"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#cosmos-hub-4-gaia-v11-upgrade-instructions"}},[e._v("Cosmos Hub 4, Gaia v11 Upgrade, Instructions")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#instructions"}},[e._v("Instructions")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("On-chain governance proposal attains consensus")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-date"}},[e._v("Upgrade date")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("Chain-id will remain the same")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#preparing-for-the-upgrade"}},[e._v("Preparing for the upgrade")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#system-requirement"}},[e._v("System requirement")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#backups"}},[e._v("Backups")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#testing"}},[e._v("Testing")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#current-runtime"}},[e._v("Current runtime")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#target-runtime"}},[e._v("Target runtime")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-steps"}},[e._v("Upgrade steps")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#method-i-manual-upgrade"}},[e._v("Method I: Manual Upgrade")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor"}},[e._v("Method II: Upgrade using Cosmovisor")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#manually-preparing-the-binary"}},[e._v("Manually preparing the binary")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#preparation"}},[e._v("Preparation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#expected-upgrade-result"}},[e._v("Expected upgrade result")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#auto-downloading-the-gaia-binary"}},[e._v("Auto-Downloading the Gaia binary")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#preparation-1"}},[e._v("Preparation")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#expected-result"}},[e._v("Expected result")])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#upgrade-duration"}},[e._v("Upgrade duration")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#rollback-plan"}},[e._v("Rollback plan")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#communications"}},[e._v("Communications")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#risks"}},[e._v("Risks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#reference"}},[e._v("Reference")])])])])]),e._v(" "),t("h2",{attrs:{id:"on-chain-governance-proposal-attains-consensus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-governance-proposal-attains-consensus"}},[e._v("#")]),e._v(" On-chain governance proposal attains consensus")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.mintscan.io/cosmos/proposals/804",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 804"),t("OutboundLink")],1),e._v(" is the reference on-chain governance proposal for this upgrade, which is still in its voting period. Neither core developers nor core funding entities control the governance, and this governance proposal has passed in a "),t("em",[e._v("fully decentralized")]),e._v(" way.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-date"}},[e._v("#")]),e._v(" Upgrade date")]),e._v(" "),t("p",[e._v("The upgrade will take place at a block height of "),t("code",[e._v("16596000")]),e._v(". The date/time of the upgrade is subject to change as blocks are not generated at a constant interval. You can stay up-to-date using this "),t("a",{attrs:{href:"https://www.mintscan.io/cosmos/blocks/16596000",target:"_blank",rel:"noopener noreferrer"}},[e._v("live countdown"),t("OutboundLink")],1),e._v(" page.")]),e._v(" "),t("h2",{attrs:{id:"chain-id-will-remain-the-same"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chain-id-will-remain-the-same"}},[e._v("#")]),e._v(" Chain-id will remain the same")]),e._v(" "),t("p",[e._v("The chain-id of the network will remain the same, "),t("code",[e._v("cosmoshub-4")]),e._v(". This is because an in-place migration of state will take place, i.e., this upgrade does not export any state.")]),e._v(" "),t("h2",{attrs:{id:"preparing-for-the-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-for-the-upgrade"}},[e._v("#")]),e._v(" Preparing for the upgrade")]),e._v(" "),t("h3",{attrs:{id:"system-requirement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirement"}},[e._v("#")]),e._v(" System requirement")]),e._v(" "),t("p",[e._v("32GB RAM is recommended to ensure a smooth upgrade.")]),e._v(" "),t("p",[e._v("If you have less than 32GB RAM, you might try creating a swapfile to swap an idle program onto the hard disk to free up memory. This can\nallow your machine to run the binary than it could run in RAM alone.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"c3VkbyBmYWxsb2NhdGUgLWwgMTZHIC9zd2FwZmlsZQpzdWRvIGNobW9kIDYwMCAvc3dhcGZpbGUKc3VkbyBta3N3YXAgL3N3YXBmaWxlCnN1ZG8gc3dhcG9uIC9zd2FwZmlsZQo="}}),e._v(" "),t("h3",{attrs:{id:"backups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),t("p",[e._v("Prior to the upgrade, validators are encouraged to take a full data snapshot. Snapshotting depends heavily on infrastructure, but generally this can be done by backing up the "),t("code",[e._v(".gaia")]),e._v(" directory.\nIf you use Cosmovisor to upgrade, by default, Cosmovisor will backup your data upon upgrade. See below "),t("a",{attrs:{href:"#method-ii-upgrade-using-cosmovisor"}},[e._v("upgrade using cosmovisor")]),e._v(" section.")]),e._v(" "),t("p",[e._v("It is critically important for validator operators to back-up the "),t("code",[e._v(".gaia/data/priv_validator_state.json")]),e._v(" file after stopping the gaiad process. This file is updated every block as your validator participates in consensus rounds. It is a critical file needed to prevent double-signing, in case the upgrade fails and the previous chain needs to be restarted.")]),e._v(" "),t("h3",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("p",[e._v("For those validator and full node operators that are interested in ensuring preparedness for the impending upgrade, you can run a "),t("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/local",target:"_blank",rel:"noopener noreferrer"}},[e._v("v11 Local Testnet"),t("OutboundLink")],1),e._v(" or join in our "),t("a",{attrs:{href:"https://github.com/cosmos/testnets/tree/master/public",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Hub Public Testnet"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"current-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#current-runtime"}},[e._v("#")]),e._v(" Current runtime")]),e._v(" "),t("p",[e._v("The Cosmos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", is currently running "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/v10.0.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v10.0.2"),t("OutboundLink")],1),e._v(". We anticipate that operators who are running on v10.0.x, will be able to upgrade successfully. Validators are expected to ensure that their systems are up to date and capable of performing the upgrade. This includes running the correct binary, or if building from source, building with go "),t("code",[e._v("1.20")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"target-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target-runtime"}},[e._v("#")]),e._v(" Target runtime")]),e._v(" "),t("p",[e._v("The Cosmos Hub mainnet network, "),t("code",[e._v("cosmoshub-4")]),e._v(", will run "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v11.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia v11.0.0"),t("OutboundLink")],1),e._v(". Operators "),t("em",[t("strong",[e._v("MUST")])]),e._v(" use this version post-upgrade to remain connected to the network.")]),e._v(" "),t("h2",{attrs:{id:"upgrade-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-steps"}},[e._v("#")]),e._v(" Upgrade steps")]),e._v(" "),t("p",[e._v("There are 2 major ways to upgrade a node:")]),e._v(" "),t("ul",[t("li",[e._v("Manual upgrade")]),e._v(" "),t("li",[e._v("Upgrade using "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/cosmovisor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[e._v("Either by manually preparing the new binary")]),e._v(" "),t("li",[e._v("Or by using the auto-download functionality (this is not yet recommended)")])])])]),e._v(" "),t("p",[e._v("If you prefer to use Cosmovisor to upgrade, some preparation work is needed before upgrade.")]),e._v(" "),t("h3",{attrs:{id:"method-i-manual-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-i-manual-upgrade"}},[e._v("#")]),e._v(" Method I: Manual Upgrade")]),e._v(" "),t("p",[e._v("Make sure Gaia v11.0.0 is installed by either downloading a "),t("a",{attrs:{href:"https://github.com/cosmos/gaia/releases/tag/v11.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatible binary"),t("OutboundLink")],1),e._v(", or building from source. Building from source requires "),t("strong",[e._v("Golang 1.20")]),e._v(".")]),e._v(" "),t("p",[e._v("Run Gaia v10.0.x till upgrade height, the node will panic:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djExJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDE2NTk2MDAwOiB1cGdyYWRlIHRvIHYxMSBhbmQgYXBwbHlpbmcgdXBncmFkZSAmcXVvdDt2MTEmcXVvdDsgYXQgaGVpZ2h0OjE2NTk2MDAwCg=="}}),e._v(" "),t("p",[e._v("Stop the node, and switch the binary to Gaia v11.0.0 and re-start by "),t("code",[e._v("gaiad start")]),e._v(".")]),e._v(" "),t("p",[e._v("It may take several minutes to a few hours until validators with a total sum voting power > 2/3 to complete their node upgrades. After that, the chain can continue to produce blocks.")]),e._v(" "),t("h3",{attrs:{id:"method-ii-upgrade-using-cosmovisor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#method-ii-upgrade-using-cosmovisor"}},[e._v("#")]),e._v(" Method II: Upgrade using Cosmovisor")]),e._v(" "),t("h3",{attrs:{id:"manually-preparing-the-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manually-preparing-the-binary"}},[e._v("#")]),e._v(" Manually preparing the binary")]),e._v(" "),t("h5",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install the latest version of Cosmovisor ("),t("code",[e._v("1.5.0")]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),t("p",[t("strong",[e._v("Verify Cosmovisor Version")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciB2ZXJzaW9uCmNvc21vdmlzb3IgdmVyc2lvbjogdjEuNS4wCg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a Cosmovisor folder inside "),t("code",[e._v("$GAIA_HOME")]),e._v(" and move Gaia v9.1.1 into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("p",[e._v("build Gaia v11.0.0, and move gaiad v11.0.0 to "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v11/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy92MTEvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci91cGdyYWRlcy92MTEvYmluCg=="}}),e._v(" "),t("p",[e._v("Then you should get the following structure:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJzilIDilIAgZ2VuZXNpcwrilIIgICDilJTilIDilIAgYmluCuKUgiAgICAgICDilJTilIDilIAgZ2FpYWQgICN2MTAuMC54CuKUlOKUgOKUgCB1cGdyYWRlcwogICAg4pSU4pSA4pSAIHYxMQogICAgICAgIOKUlOKUgOKUgCBiaW4KICAgICAgICAgICAg4pSU4pSA4pSAIGdhaWFkICAjdjExLjAuMAo="}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCiMgcGxlYXNlIG5vdGUgYERBRU1PTl9IT01FYCBoYXMgdG8gYmUgYWJzb2x1dGUgcGF0aApleHBvcnQgREFFTU9OX0hPTUU9JEdBSUFfSE9NRQpleHBvcnQgREFFTU9OX1JFU1RBUlRfQUZURVJfVVBHUkFERT10cnVlCg=="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBydW4gIHN0YXJ0IC0teC1jcmlzaXMtc2tpcC1hc3NlcnQtaW52YXJpYW50cyAtLWhvbWUgJERBRU1PTl9IT01FCg=="}}),e._v(" "),t("p",[e._v("Skipping the invariant checks is strongly encouraged since it decreases the upgrade time significantly and since there are some other improvements coming to the crisis module in the next release of the Cosmos SDK.")]),e._v(" "),t("h4",{attrs:{id:"expected-upgrade-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-upgrade-result"}},[e._v("#")]),e._v(" Expected upgrade result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, Gaia will panic and stop:")]),e._v(" "),t("p",[e._v("This may take 7 minutes to a few hours.\nAfter upgrade, the chain will continue to produce blocks when validators with a total sum voting power > 2/3 complete their node upgrades.")]),e._v(" "),t("h3",{attrs:{id:"auto-downloading-the-gaia-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-downloading-the-gaia-binary"}},[e._v("#")]),e._v(" Auto-Downloading the Gaia binary")]),e._v(" "),t("p",[t("strong",[e._v("This method is not recommended!")])]),e._v(" "),t("h4",{attrs:{id:"preparation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation-2"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),t("p",[e._v("Install the latest version of Cosmovisor ("),t("code",[e._v("1.5.0")]),e._v("):")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z28gaW5zdGFsbCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Nvc21vdmlzb3IvY21kL2Nvc21vdmlzb3JAbGF0ZXN0Cg=="}}),e._v(" "),t("p",[e._v("Create a cosmovisor folder:")]),e._v(" "),t("p",[e._v("create a cosmovisor folder inside gaia home and move gaiad v10.0.x into "),t("code",[e._v("$GAIA_HOME/cosmovisor/genesis/bin")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"bWtkaXIgLXAgJEdBSUFfSE9NRS9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCmNwICQod2hpY2ggZ2FpYWQpICRHQUlBX0hPTUUvY29zbW92aXNvci9nZW5lc2lzL2Jpbgo="}}),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"LgrilJzilIDilIAgY3VycmVudCAtJmd0OyBnZW5lc2lzIG9yIHVwZ3JhZGVzLyZsdDtuYW1lJmd0OwrilJTilIDilIAgZ2VuZXNpcwogICAgIOKUlOKUgOKUgCBiaW4KICAgICAgICDilJTilIDilIAgZ2FpYWQgICN2MTAuMC54Cg=="}}),e._v(" "),t("p",[e._v("Export the environmental variables:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPWdhaWFkCiMgcGxlYXNlIGNoYW5nZSB0byB5b3VyIG93biBnYWlhIGhvbWUgZGlyCmV4cG9ydCBEQUVNT05fSE9NRT0kR0FJQV9IT01FCmV4cG9ydCBEQUVNT05fUkVTVEFSVF9BRlRFUl9VUEdSQURFPXRydWUKZXhwb3J0IERBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz10cnVlCg=="}}),e._v(" "),t("p",[e._v("Start the node:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Y29zbW92aXNvciBydW4gc3RhcnQgLS14LWNyaXNpcy1za2lwLWFzc2VydC1pbnZhcmlhbnRzIC0taG9tZSAkREFFTU9OX0hPTUUK"}}),e._v(" "),t("p",[e._v("Skipping the invariant checks can help decrease the upgrade time significantly.")]),e._v(" "),t("h4",{attrs:{id:"expected-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-result"}},[e._v("#")]),e._v(" Expected result")]),e._v(" "),t("p",[e._v("When the upgrade block height is reached, you can find the following information in the log:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"RVJSIFVQR1JBREUgJnF1b3Q7djExJnF1b3Q7IE5FRURFRCBhdCBoZWlnaHQ6IDE2NTk2MDAwOiB1cGdyYWRlIHRvIHYxMSBhbmQgYXBwbHlpbmcgdXBncmFkZSAmcXVvdDt2MTEmcXVvdDsgYXQgaGVpZ2h0OjE2NTk2MDAwCg=="}}),e._v(" "),t("p",[e._v("Then the Cosmovisor will create "),t("code",[e._v("$GAIA_HOME/cosmovisor/upgrades/v11/bin")]),e._v(" and download the Gaia v11.0.0 binary to this folder according to links in the "),t("code",[e._v("--info")]),e._v(" field of the upgrade proposal.\nThis may take 7 minutes to a few hours, afterwards, the chain will continue to produce blocks once validators with a total sum voting power > 2/3 complete their nodes upgrades.")]),e._v(" "),t("p",[t("em",[e._v("Please Note:")])]),e._v(" "),t("ul",[t("li",[e._v("In general, auto-download comes with the risk that the verification of correct download is done automatically. If users want to have the highest guarantee users should confirm the check-sum manually. We hope more node operators will use the auto-download for this release but please be aware this is a risk and users should take at your own discretion.")]),e._v(" "),t("li",[e._v("Users should run their node on v10.0.x if they use the cosmovisor v1.5.0 with auto-download enabled for upgrade process.")])]),e._v(" "),t("h2",{attrs:{id:"upgrade-duration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-duration"}},[e._v("#")]),e._v(" Upgrade duration")]),e._v(" "),t("p",[e._v("The upgrade may take a few minutes to several hours to complete because cosmoshub-4 participants operate globally with differing operating hours and it may take some time for operators to upgrade their binaries and connect to the network.")]),e._v(" "),t("h2",{attrs:{id:"rollback-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rollback-plan"}},[e._v("#")]),e._v(" Rollback plan")]),e._v(" "),t("p",[e._v("During the network upgrade, core Cosmos teams will be keeping an ever vigilant eye and communicating with operators on the status of their upgrades. During this time, the core teams will listen to operator needs to determine if the upgrade is experiencing unintended challenges. In the event of unexpected challenges, the core teams, after conferring with operators and attaining social consensus, may choose to declare that the upgrade will be skipped.")]),e._v(" "),t("p",[e._v("Steps to skip this upgrade proposal are simply to resume the cosmoshub-4 network with the (downgraded) v10.0.2 binary using the following command:")]),e._v(" "),t("blockquote",[t("p",[e._v("gaiad start --unsafe-skip-upgrade 16596000")])]),e._v(" "),t("p",[e._v("Note: There is no particular need to restore a state snapshot prior to the upgrade height, unless specifically directed by core Cosmos teams.")]),e._v(" "),t("p",[e._v("Important: A social consensus decision to skip the upgrade will be based solely on technical merits, thereby respecting and maintaining the decentralized governance process of the upgrade proposal's successful YES vote.")]),e._v(" "),t("h2",{attrs:{id:"communications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#communications"}},[e._v("#")]),e._v(" Communications")]),e._v(" "),t("p",[e._v("Operators are encouraged to join the "),t("code",[e._v("#cosmos-hub-validators-verified")]),e._v(" channel of the Cosmos Hub Community Discord. This channel is the primary communication tool for operators to ask questions, report upgrade status, report technical issues, and to build social consensus should the need arise. This channel is restricted to known operators and requires verification beforehand. Requests to join the "),t("code",[e._v("#cosmos-hub-validators-verified")]),e._v(" channel can be sent to the "),t("code",[e._v("#general-support")]),e._v(" channel.")]),e._v(" "),t("h2",{attrs:{id:"risks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),t("p",[e._v("As a validator performing the upgrade procedure on your consensus nodes carries a heightened risk of double-signing and being slashed. The most important piece of this procedure is verifying your software version and genesis file hash before starting your validator and signing.")]),e._v(" "),t("p",[e._v("The riskiest thing a validator can do is discover that they made a mistake and repeat the upgrade procedure again during the network startup. If you discover a mistake in the process, the best thing to do is wait for the network to start before correcting it.")]),e._v(" "),t("h2",{attrs:{id:"reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/cosmos/mainnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Join Cosmos Hub Mainnet"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=s.exports}}]);