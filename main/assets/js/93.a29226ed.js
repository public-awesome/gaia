(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{533:function(e,o,t){"use strict";t.r(o);var a=t(1),i=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"slashing-subspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing-subspace"}},[e._v("#")]),e._v(" "),t("code",[e._v("slashing")]),e._v(" subspace")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("slashing")]),e._v(" module is responsible for enabling the Cosmos Hub to penalize any validator for an attributable violation of protocol rules by slashing (ie. partially destroying) the bonded ATOMs of their stake-backing. Penalties may include a) burning some amount of a staked bond and b) removing the ability to vote on future blocks and governance proposals for a period of time. Parameters include:")]),e._v(" "),t("table",[t("tr",[t("th",[e._v("Key")]),e._v(" "),t("th",[e._v("Value")])]),e._v(" "),e._l(e.$themeConfig.currentParameters.slashing,(function(o,a){return t("tr",[t("td",[t("a",{attrs:{href:"#"+a}},[t("code",[e._v(e._s(a))])])]),e._v(" "),t("td",[t("code",[e._v(e._s(o))])])])}))],2),e._v(" "),t("h2",{attrs:{id:"governance-notes-on-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#governance-notes-on-parameters"}},[e._v("#")]),e._v(" Governance notes on parameters")]),e._v(" "),t("h3",{attrs:{id:"signedblockswindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signedblockswindow"}},[e._v("#")]),e._v(" "),t("code",[e._v("SignedBlocksWindow")])]),e._v(" "),t("p",[t("strong",[e._v("Window for being offline without being slashed, in blocks.")])]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SignedBlocksWindow))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.200000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.200000000000000000")])])]),e._v(" "),t("p",[e._v("If a validator in the active set is offline for too long, the validator will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least the "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes.")]),e._v(" "),t("p",[e._v("How long is being offline for too long? There are two components: "),t("code",[e._v("SignedBlocksWindow")]),e._v(" and "),t("a",{attrs:{href:"#minsignedperwindow"}},[t("code",[e._v("MinSignedPerWindow")])]),e._v(". Since "),t("code",[e._v("MinSignedPerWindow")]),e._v(" is 5% and "),t("code",[e._v("SignedBlocksWindow")]),e._v(" is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The time window for being offline without breaking system rules is proportional to this parameter.")]),e._v(" "),t("p",[e._v("More about liveness "),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#signing-info-liveness",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-signedblockswindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-signedblockswindow"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("SignedBlocksWindow")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("SignedBlocksWindow")]),e._v(" parameter will decrease the window for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("p",[e._v("If we pass a proposal to cut "),t("code",[e._v("SignedBlocksWindow")]),e._v(" in half from 10,000 to 5,000 blocks, what happens?")]),e._v(" "),t("p",[e._v("Validators must now sign at least 5% of 5,000 blocks, which is 250 blocks. That means that a validator that misses 4,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),t("p",[e._v("That's ~9.25 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-signedblockswindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-signedblockswindow"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("SignedBlocksWindow")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("SignedBlocksWindow")]),e._v(" parameter will increase the window for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("p",[e._v("If we pass a proposal to double "),t("code",[e._v("SignedBlocksWindow")]),e._v(" from 10,000 to 20,000 blocks, what happens?")]),e._v(" "),t("p",[e._v("Validators must now sign at least 5% of 20,000 blocks, which is 1000 blocks. That means that a validator that misses 19,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),t("p",[e._v("That's ~37 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),t("h3",{attrs:{id:"minsignedperwindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minsignedperwindow"}},[e._v("#")]),e._v(" "),t("code",[e._v("MinSignedPerWindow")])]),e._v(" "),t("p",[t("strong",[e._v("Minimum proportion of blocks signed per window without being slashed.")])]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.MinSignedPerWindow))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.050000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.050000000000000000")])])]),e._v(" "),t("p",[e._v("If a validator in the active set is offline for too long, the validator will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least the "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes.")]),e._v(" "),t("p",[e._v("How long is being offline for too long? There are two components: "),t("a",{attrs:{href:"#signedblockswindow"}},[t("code",[e._v("SignedBlocksWindow")])]),e._v(" and "),t("code",[e._v("MinSignedPerWindow")]),e._v(". Since "),t("code",[e._v("MinSignedPerWindow")]),e._v(" is 5% and "),t("code",[e._v("SignedBlocksWindow")]),e._v(" is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The threshold-proportion of blocks is determined by this parameter, so the greater that "),t("code",[e._v("MinSignedPerWindow")]),e._v(" is, the lower the tolerance for missed blocks by the system.")]),e._v(" "),t("p",[e._v("More about liveness "),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#signing-info-liveness",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-minsignedperwindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-minsignedperwindow"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("MinSignedPerWindow")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("MinSignedPerWindow")]),e._v(" parameter will increase the threshold for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("p",[e._v("If we pass a proposal to cut "),t("code",[e._v("MinSignedPerWindow")]),e._v(" in half from "),t("code",[e._v("0.050000000000000000")]),e._v(" (5%) to "),t("code",[e._v("0.025000000000000000")]),e._v(" (2.5%), what happens?")]),e._v(" "),t("p",[e._v("Validators must now sign at least 2.5% of 10,000 blocks, which is 250 blocks. That means that a validator that misses 9,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),t("p",[e._v("That's ~19 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-minsignedperwindow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-minsignedperwindow"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("MinSignedPerWindow")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("MinSignedPerWindow")]),e._v(" parameter will decrease the threshold for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by "),t("a",{attrs:{href:"#slashfractiondowntime"}},[t("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("p",[e._v("If we pass a proposal to double the "),t("code",[e._v("MinSignedPerWindow")]),e._v(" from "),t("code",[e._v("0.050000000000000000")]),e._v(" (5%) to "),t("code",[e._v("0.100000000000000000")]),e._v(" (10%), what happens?")]),e._v(" "),t("p",[e._v("Validators must now sign at least 10% of 10,000 blocks, which is 1000 blocks. That means that a validator that misses 9,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),t("p",[e._v("That's ~17.5 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),t("h3",{attrs:{id:"downtimejailduration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#downtimejailduration"}},[e._v("#")]),e._v(" "),t("code",[e._v("DowntimeJailDuration")])]),e._v(" "),t("p",[t("strong",[e._v("The suspension time (aka jail time) for a validator that is offline too long, in nanoseconds.")])]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.DowntimeJailDuration))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("600000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("600000000000")])])]),e._v(" "),t("p",[e._v("A validator in the active set that's offline for too long, besides being slashed, will be temporarily removed from the active set (aka \""),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("jailed"),t("OutboundLink")],1),e._v('") for at least '),t("a",{attrs:{href:"#downtimejailduration"}},[t("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes ("),t("code",[e._v("600000000000")]),e._v(" nanoseconds). During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards. After the "),t("code",[e._v("DowntimeJailDuration")]),e._v(' period has passed, the validator operator may send an "'),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("unjail"),t("OutboundLink")],1),e._v('" transaction to resume validator operations.')]),e._v(" "),t("p",[e._v("More about liveness "),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#signing-info-liveness",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-downtimejailduration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-downtimejailduration"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("DowntimeJailDuration")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("DowntimeJailDuration")]),e._v(" parameter will require a validator to wait less time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-downtimejailduration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-downtimejailduration"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("DowntimeJailDuration")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("DowntimeJailDuration")]),e._v(" parameter will require a validator to wait more time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.")]),e._v(" "),t("h3",{attrs:{id:"slashfractiondoublesign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondoublesign"}},[e._v("#")]),e._v(" "),t("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),t("p",[t("strong",[e._v("Proportion of stake-backing that is bruned for equivocation (aka double-signing).")])]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SlashFractionDoubleSign))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.050000000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.050000000000000000")])])]),e._v(" "),t("p",[e._v('A validator proven to have signed two blocks at the same height is considered to have committed equivocation, and the system will then permanently burn ("slash") that validator\'s total delegations (aka stake-backing) by '),t("code",[e._v("0.050000000000000000")]),e._v(' (5%). All delegators to an offending validator will lose 5% of all ATOMs delegated to this validator. At this point the validator will be "'),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#staking-tombstone",target:"_blank",rel:"noopener noreferrer"}},[e._v("tombstoned"),t("OutboundLink")],1),e._v(",\" which means the validator will be permanently removed from the active set of validators, and the validator's stake-backing will only be slashed one time (regardless of how many equivocations).")]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-slashfractiondoublesign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-slashfractiondoublesign"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("SlashFractionDoubleSign")]),e._v(" parameter will lessen the penalty for equivocation, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are secure.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-slashfractiondoublesign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-slashfractiondoublesign"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("SlashFractionDoubleSign")]),e._v(" parameter will heighten the penalty for equivocation, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are secure.")]),e._v(" "),t("h3",{attrs:{id:"slashfractiondowntime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondowntime"}},[e._v("#")]),e._v(" "),t("code",[e._v("SlashFractionDowntime")])]),e._v(" "),t("p",[t("strong",[e._v("Proportion of stake that is slashed for being offline too long.")])]),e._v(" "),t("ul",[t("li",[e._v("on-chain value: "),t("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SlashFractionDowntime))])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-4")]),e._v(" default: "),t("code",[e._v("0.000100000000000000")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("0.000100000000000000")])])]),e._v(" "),t("p",[e._v('If a validator in the active set is offline for too long, the system will permanently burn ("slash") that validator\'s total delegations (aka stake-backing) by a '),t("code",[e._v("SlashFractionDowntime")]),e._v(" of "),t("code",[e._v("0.000100000000000000")]),e._v(' (0.01%). All delegators to an offending validator will lose 0.01% of all ATOMs delegated to this validator. At this point the validator will be "'),t("a",{attrs:{href:"https://docs.cosmos.network/main/modules/slashing#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("jailed"),t("OutboundLink")],1),e._v(",\" which means the validator will be temporarily removed from the active set of validators so the validator's stake-backing will only be slashed one time.")]),e._v(" "),t("h4",{attrs:{id:"decreasing-the-value-of-slashfractiondowntime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-slashfractiondowntime"}},[e._v("#")]),e._v(" Decreasing the value of "),t("code",[e._v("SlashFractionDowntime")])]),e._v(" "),t("p",[e._v("Decreasing the value of the "),t("code",[e._v("SlashFractionDowntime")]),e._v(" parameter will lessen the penalty for liveness violations, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are online.")]),e._v(" "),t("h4",{attrs:{id:"increasing-the-value-of-slashfractiondowntime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-slashfractiondowntime"}},[e._v("#")]),e._v(" Increasing the value of "),t("code",[e._v("SlashFractionDowntime")])]),e._v(" "),t("p",[e._v("Increasing the value of the "),t("code",[e._v("SlashFractionDowntime")]),e._v(" parameter will heighten the penalty for liveness violations, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are online.")]),e._v(" "),t("h3",{attrs:{id:"maxevidenceage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maxevidenceage"}},[e._v("#")]),e._v(" "),t("code",[e._v("MaxEvidenceAge")])]),e._v(" "),t("ul",[t("li",[e._v("deprecated in "),t("code",[e._v("cosmoshub-4")])]),e._v(" "),t("li",[t("code",[e._v("cosmoshub-3")]),e._v(" default: "),t("code",[e._v("1814400000000000")])])]),e._v(" "),t("p",[e._v("This parameter was present in "),t("code",[e._v("cosmoshub-3")]),e._v(", but was "),t("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/5952",target:"_blank",rel:"noopener noreferrer"}},[e._v("deprecated"),t("OutboundLink")],1),e._v(" for "),t("code",[e._v("cosmoshub-4")]),e._v(" genesis.")])])}),[],!1,null,null,null);o.default=i.exports}}]);