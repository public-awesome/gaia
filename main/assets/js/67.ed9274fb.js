(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{541:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"delegator-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegator-faq"}},[e._v("#")]),e._v(" Delegator FAQ")]),e._v(" "),a("h2",{attrs:{id:"what-is-a-delegator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-delegator"}},[e._v("#")]),e._v(" What is a delegator?")]),e._v(" "),a("p",[e._v("People that cannot or do not want to operate "),a("RouterLink",{attrs:{to:"/validators/overview.html"}},[e._v("validator nodes")]),e._v(" can still participate in the staking process as delegators. Indeed, validators are not chosen based on their self-delegated stake but based on their total stake, which is the sum of their self-delegated stake and of the stake that is delegated to them. This is an important property, as it makes delegators a safeguard against validators that exhibit bad behavior. If a validator misbehaves, their delegators will move their Atoms away from them, thereby reducing their stake. Eventually, if a validator's stake falls under the top 180 addresses with highest stake, they will exit the validator set.")],1),e._v(" "),a("p",[a("strong",[e._v("Delegators share the revenue of their validators, but they also share the risks.")]),e._v(" In terms of revenue, validators and delegators differ in that validators can apply a commission on the revenue that goes to their delegator before it is distributed. This commission is known to delegators beforehand and can only change according to predefined constraints (see "),a("a",{attrs:{href:"#choosing-a-validator"}},[e._v("section")]),e._v(" below). In terms of risk, delegators' Atoms can be slashed if their validator misbehaves. For more, see "),a("a",{attrs:{href:"#risks"}},[e._v("Risks")]),e._v(" section.")]),e._v(" "),a("p",[e._v("To become delegators, Atom holders need to send a "),a("RouterLink",{attrs:{to:"/delegators/delegator-guide-cli.html#sending-transactions"}},[e._v('"Delegate transaction"')]),e._v(' where they specify how many Atoms they want to bond and to which validator. A list of validator candidates will be displayed in Cosmos Hub explorers. Later, if a delegator wants to unbond part or all of their stake, they needs to send an "Unbond transaction". From there, the delegator will have to wait 3 weeks to retrieve their Atoms. Delegators can also send a "Rebond Transaction" to switch from one validator to another, without having to go through the 3 weeks waiting period.')],1),e._v(" "),a("p",[e._v("For a practical guide on how to become a delegator, click "),a("RouterLink",{attrs:{to:"/delegators/delegator-guide-cli.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"choosing-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-a-validator"}},[e._v("#")]),e._v(" Choosing a validator")]),e._v(" "),a("p",[e._v("In order to choose their validators, delegators have access to a range of information directly in "),a("a",{attrs:{href:"https://lunie.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lunie"),a("OutboundLink")],1),e._v(" or other Cosmos block explorers.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Validator's moniker")]),e._v(": Name of the validator candidate.")]),e._v(" "),a("li",[a("strong",[e._v("Validator's description")]),e._v(": Description provided by the validator operator.")]),e._v(" "),a("li",[a("strong",[e._v("Validator's website")]),e._v(": Link to the validator's website.")]),e._v(" "),a("li",[a("strong",[e._v("Initial commission rate")]),e._v(": The commission rate on revenue charged to any delegator by the validator (see below for more detail).")]),e._v(" "),a("li",[a("strong",[e._v("Commission max change rate:")]),e._v(" The maximum daily increase of the validator's commission. This parameter cannot be changed by the validator operator.")]),e._v(" "),a("li",[a("strong",[e._v("Maximum commission:")]),e._v(" The maximum commission rate this validator candidate can charge. This parameter cannot be changed by the validator operator.")]),e._v(" "),a("li",[a("strong",[e._v("Validator self-bond amount")]),e._v(": A validator with a high amount of self-delegated Atoms has more skin-in-the-game than a validator with a low amount.")])]),e._v(" "),a("h2",{attrs:{id:"directives-of-delegators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directives-of-delegators"}},[e._v("#")]),e._v(" Directives of delegators")]),e._v(" "),a("p",[e._v("Being a delegator is not a passive task. Here are the main directives of a delegator:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Perform careful due diligence on validators before delegating.")]),e._v(" If a validator misbehaves, part of their total stake, which includes the stake of their delegators, can be slashed. Delegators should therefore carefully select validators they think will behave correctly.")]),e._v(" "),a("li",[a("strong",[e._v("Actively monitor their validator after having delegated.")]),e._v(" Delegators should ensure that the validators they delegate to behave correctly, meaning that they have good uptime, do not double sign or get compromised, and participate in governance. They should also monitor the commission rate that is applied. If a delegator is not satisfied with its validator, they can unbond or switch to another validator (Note: Delegators do not have to wait for the unbonding period to switch validators. Rebonding takes effect immediately).")]),e._v(" "),a("li",[a("strong",[e._v("Participate in governance.")]),e._v(" Delegators can and are expected to actively participate in governance. A delegator's voting power is proportional to the size of their bonded stake. If a delegator does not vote, they will inherit the vote of their validator(s). If they do vote, they override the vote of their validator(s). Delegators therefore act as a counterbalance to their validators.")])]),e._v(" "),a("h2",{attrs:{id:"revenue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revenue"}},[e._v("#")]),e._v(" Revenue")]),e._v(" "),a("p",[e._v("Validators and delegators earn revenue in exchange for their services. This revenue is given in three forms:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Block provisions (Atoms):")]),e._v(" They are paid in newly created Atoms. Block provisions exist to incentivize Atom holders to stake. The yearly inflation rate is calculated to target 2/3 bonded stake. If the total bonded stake in the network is less than 2/3 of the total Atom supply, inflation increases until it reaches 20%. If the total bonded stake is more than 2/3 of the Atom supply, inflation decreases until it reaches 7%. This means that if total bonded stake stays less than 2/3 of the total Atom supply for a prolonged period of time, unbonded Atom holders can expect their Atom value to deflate by 20% (compounded) per year.")]),e._v(" "),a("li",[a("strong",[e._v("Transaction fees (various tokens):")]),e._v(" Each transfer on the Cosmos Hub comes with transactions fees. These fees can be paid in any currency that is whitelisted by the Hub's governance. Fees are distributed to bonded Atom holders in proportion to their stake. The first whitelisted token at launch is the ATOM.")])]),e._v(" "),a("h2",{attrs:{id:"validator-commission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-commission"}},[e._v("#")]),e._v(" Validator Commission")]),e._v(" "),a("p",[e._v("Each validator receives revenue based on their total stake. Before this revenue is distributed to delegators, the validator can apply a commission. In other words, delegators have to pay a commission to their validators on the revenue they earn. Let us look at a concrete example:")]),e._v(" "),a("p",[e._v("We consider a validator whose stake (i.e. self-delegated stake + delegated stake) is 10% of the total stake of all validators. This validator has 20% self-delegated stake and applies a commission of 10%. Now let us consider a block with the following revenue:")]),e._v(" "),a("ul",[a("li",[e._v("990 Atoms in block provisions")]),e._v(" "),a("li",[e._v("10 Atoms in transaction fees.")])]),e._v(" "),a("p",[e._v("This amounts to a total of 1000 Atoms and 100 Photons to be distributed among all staking pools.")]),e._v(" "),a("p",[e._v("Our validator's staking pool represents 10% of the total stake, which means the pool obtains 100 Atoms and 10 Photons. Now let us look at the internal distribution of revenue:")]),e._v(" "),a("ul",[a("li",[e._v("Commission = "),a("code",[e._v("10% * 80% * 100")]),e._v(" Atoms = 8 Atoms")]),e._v(" "),a("li",[e._v("Validator's revenue = "),a("code",[e._v("20% * 100")]),e._v(" Atoms + Commission = 28 Atoms")]),e._v(" "),a("li",[e._v("Delegators' total revenue = "),a("code",[e._v("80% * 100")]),e._v(" Atoms - Commission = 72 Atoms")])]),e._v(" "),a("p",[e._v("Then, each delegator in the staking pool can claim their portion of the delegators' total revenue.")]),e._v(" "),a("h2",{attrs:{id:"liquid-staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#liquid-staking"}},[e._v("#")]),e._v(" Liquid Staking")]),e._v(" "),a("p",[e._v("The Liquid Staking module enacts a safety framework and associated governance-controlled parameters to regulate the adoption of liquid staking.")]),e._v(" "),a("p",[e._v("The LSM mitigates liquid staking risks by limiting the total amount of ATOM that can be liquid staked to a percentage of all staked ATOM. As an additional risk-mitigation feature, the LSM introduces a requirement that validators self-bond ATOM to be eligible for delegations from liquid staking providers or to be eligible to mint LSM tokens. This mechanism is called the “validator bond”, and is technically distinct from the current self-bond mechanism, but functions similarly.")]),e._v(" "),a("p",[e._v("At the same time, the LSM introduces the ability for staked ATOM to be instantly liquid staked, without having to wait for the unbonding period.")]),e._v(" "),a("p",[e._v("The LSM enables users to instantly liquid stake their staked ATOM, without having to wait the twenty-one day unbonding period. This is important, because a very large portion of the ATOM supply is currently staked. Liquid staking ATOM that is already staked incurs a switching cost in the form of three weeks’ forfeited staking rewards. The LSM eliminates this switching cost.")]),e._v(" "),a("p",[e._v("A user would be able to visit any liquid staking provider that has integrated with the LSM and click a button to convert her staked ATOM to liquid staked ATOM. It would be as easy as liquid staking unstaked ATOM.")]),e._v(" "),a("p",[e._v("Technically speaking, this is accomplished by using something called an “LSM share.” Using the liquid staking module, a user can tokenize their staked ATOM and turn it into LSM shares. LSM shares can be redeemed for underlying staked tokens and are transferable. After staked ATOM is tokenized it can be immediately transferred to a liquid staking provider in exchange for liquid staking tokens - without having to wait for the unbonding period.")]),e._v(" "),a("h3",{attrs:{id:"toggling-the-ability-to-tokenize-shares"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#toggling-the-ability-to-tokenize-shares"}},[e._v("#")]),e._v(" Toggling the ability to tokenize shares")]),e._v(" "),a("p",[e._v("Currently the liquid staking module facilitates the immediate conversion of staked assets into liquid staked tokens. Despite the many benefits that come with this capability, it does inadvertently negate a protective measure available via traditional staking, where an account can stake their tokens to render them illiquid in the event that their wallet is compromised (the attacker would first need to unbond, then transfer out the tokens).")]),e._v(" "),a("p",[e._v("Tokenization obviates this potential recovery measure, as an attacker could tokenize and immediately transfer staked tokens to another wallet. So, as an additional protective measure, the staking module permit accounts to selectively disable the tokenization of their stake with the "),a("code",[e._v("DisableTokenizeShares")]),e._v(" message.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("DisableTokenizeShares")]),e._v(" message is exposed by the staking module and can be executed as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Z2FpYWQgdHggc3Rha2luZyBkaXNhYmxlLXRva2VuaXplLXNoYXJlcyAtLWZyb20gbXlrZXkgIAo="}}),e._v(" "),a("p",[e._v("When tokenization is disabled, a lock is placed on the account, effectively preventing the tokenization of any delegations. Re-enabling tokenization would initiate the removal of the lock, but the process is not immediate. The lock removal is queued, with the lock itself persisting throughout the unbonding period. Following the completion of the unbonding period, the lock would be completely removed, restoring the account's ablility to tokenize. For liquid staking protocols that enable the lock, this delay better positions the base layer to coordinate a recovery in the event of an exploit.")]),e._v(" "),a("h2",{attrs:{id:"risks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks"}},[e._v("#")]),e._v(" Risks")]),e._v(" "),a("p",[e._v("Staking Atoms is not free of risk. First, staked Atoms are locked up, and retrieving them requires a 3 week waiting period called unbonding period. Additionally, if a validator misbehaves, a portion of their total stake can be slashed (i.e. destroyed). This includes the stake of their delegators.")]),e._v(" "),a("p",[e._v("There is one main slashing condition:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Double signing:")]),e._v(" If someone reports on that a validator signed two different blocks with the same chain ID at the same height, this validator will get slashed.")])]),e._v(" "),a("p",[e._v("This is why Atom holders should perform careful due diligence on validators before delegating. It is also important that delegators actively monitor the activity of their validators. If a validator behaves suspiciously or is too often offline, delegators can choose to unbond from them or switch to another validator. **Delegators can also mitigate risk by distributing their stake across multiple validators.**s")])],1)}),[],!1,null,null,null);t.default=i.exports}}]);