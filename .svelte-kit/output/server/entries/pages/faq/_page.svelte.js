import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".content.svelte-qg8xgx{width:100vw;display:flex;justify-content:center}.faq.svelte-qg8xgx{max-width:650px;width:100%;box-sizing:border-box;padding:8px 32px;margin-top:-12px}h2.svelte-qg8xgx{margin-top:24px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-11725o5_START -->${$$result.title = `<title>Frequently Asked Questions — AeroChat</title>`, ""}<meta name="title" content="Frequently Asked Questions — AeroChat"><meta name="description" content="Here are some frequently asked questions about AeroChat. AeroChat is an open source Discord client inspired by WLM 2009."><!-- HEAD_svelte-11725o5_END -->`, ""} <div class="content svelte-qg8xgx" data-svelte-h="svelte-1grlmdg"><div class="faq svelte-qg8xgx"><h1>FAQ</h1> <h2 class="svelte-qg8xgx">What is AeroChat?</h2> <p>AeroChat is a chat client for Discord, styled to look like Windows Live Messenger 2009.</p> <h2 class="svelte-qg8xgx">Why does it exist?</h2> <p>AeroChat exists simply because of a lack of options. A lot of people have great looking
			Windows themes, but then go and use Discord which looks completely out of place.
			AeroChat aims to fix that.</p> <h2 class="svelte-qg8xgx">Is my token safe?</h2> <p>Yes. AeroChat stores your token using the system&#39;s keychain, which guarantees
			encryption. AeroChat refuses to store the token if encryption is unavailable. Neither I,
			nor any other contributors, can access your token.</p> <h2 class="svelte-qg8xgx">Is AeroChat open source?</h2> <p>Yes. You can view the source code on <a href="https://github.com/Nostalgia-09/AeroChat" target="_blank">GitHub</a>.</p> <h2 class="svelte-qg8xgx">What functionality is missing compared to the official client?</h2> <p>AeroChat is still in early development, so there are a few features missing. However,
			the most important features are implemented, such as voice chat, file transfers, and
			more. If any of these features are important to you, feel free to contribute to the
			AeroChat project or not use AeroChat:</p> <ul><li><i>Calling</i> people (voice chats in servers work fine)</li> <li>Emoji picker</li> <li>Setting statuses (available but buggy)</li> <li>Any and all moderation features</li> <li>Most user customization (scenes are implemented, but only for other users of the
				client)</li></ul> <h2 class="svelte-qg8xgx">Is AeroChat worth using?</h2> <p>It depends on what your use case is. <b>Discord&#39;s Terms of Service prohibits against the usage of third-party clients</b> (like AeroChat), so if you value your Discord account, you should not install AeroChat.
			AeroChat is still in early development, which means there are features missing that would
			be considered standard in something like Discord.</p> <h2 class="svelte-qg8xgx">I received an error, what do I do?!</h2> <p>If you received an error, please join our <a href="https://discord.gg/EfHdHThNGX" target="_blank">Discord server</a>
			and report it in the <code>#aerochat-help</code> channel. Include all info which the error
			screen shows you.</p></div> </div>`;
});
export {
  Page as default
};
