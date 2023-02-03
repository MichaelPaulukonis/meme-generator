import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createVNode, b as createBaseVNode, _ as _export_sfc, H as HomePage } from "./index-87f205fa.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", null, "ABOUT", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_home_page = resolveComponent("home-page");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_home_page)
  ]);
}
const _sfc_main = {
  name: "HomeView",
  components: {
    HomePage
  }
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
export {
  About as default
};
