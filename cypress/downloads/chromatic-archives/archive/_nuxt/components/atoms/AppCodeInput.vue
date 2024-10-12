import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppCodeInput.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
    props: {
        code: String,
        index: Number
    },
    methods: {
        handleInput(event) {
            const value = event.target.value;
            if (/^\d$/.test(value)) {
                this.$emit('input', { value, index: this.index });
            } else {
                event.target.value = '';
            }
        },

    }
};

import { openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = ["value"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("input", {
    type: "text",
    maxlength: "1",
    class: "h-full w-full text-center border-b text-2xl bg-white",
    value: $props.code,
    onInput: _cache[0] || (_cache[0] = (...args) => ($options.handleInput && $options.handleInput(...args))),
    "data-v-inspector": "components/atoms/AppCodeInput.vue:2:5"
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1))
}

import "/_nuxt/components/atoms/AppCodeInput.vue?vue&type=style&index=0&scoped=3d4f1c1d&lang.css"

_sfc_main.__hmrId = "3d4f1c1d"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-3d4f1c1d"],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppCodeInput.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU1BLEtBQUssVUFBVTtJQUNYLEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE1BQUs7SUFDaEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDZixLQUFJLENBQUUsS0FBSSxDQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2hDLEVBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUksQ0FBRSxDQUFDLENBQUM7WUFDckQsRUFBRSxJQUFHLENBQUU7Z0JBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0I7UUFDSixDQUFDOztJQUVMO0FBQ0osQ0FBQzs7OzttQkF0QkQ7Ozt3QkFDSSxvQkFDb0Y7SUFEN0UsSUFBSSxFQUFDLE1BQU07SUFBQyxTQUFTLEVBQUMsR0FBRztJQUFDLEtBQUssRUFBQyxzREFBdUQ7SUFBRSxLQUFLLEVBQUUsV0FBSTtJQUN0RyxPQUFLLDBDQUFFLHFEQUFXO0lBQUUsa0JBQWdCLEVBQUMsdUNBQXVDOzJDQUZyRiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwQ29kZUlucHV0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMVwiIGNsYXNzPVwiaC1mdWxsIHctZnVsbCB0ZXh0LWNlbnRlciBib3JkZXItYiB0ZXh0LTJ4bCAgYmctd2hpdGVcIiA6dmFsdWU9XCJjb2RlXCJcbiAgICAgICAgQGlucHV0PVwiaGFuZGxlSW5wdXRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBDb2RlSW5wdXQudnVlOjI6NVwiIC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGNvZGU6IFN0cmluZyxcbiAgICAgICAgaW5kZXg6IE51bWJlclxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVJbnB1dChldmVudCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoL15cXGQkLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgeyB2YWx1ZSwgaW5kZXg6IHRoaXMuaW5kZXggfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuaW5wdXQge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG48L3N0eWxlPiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL2F0b21zL0FwcENvZGVJbnB1dC52dWUifQ==