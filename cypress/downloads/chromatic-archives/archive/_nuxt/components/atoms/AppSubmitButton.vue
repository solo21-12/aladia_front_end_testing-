import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppSubmitButton.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

const _sfc_main = {
    props: {
        buttonText: {
            type: String,
            default: 'Enter'
        },
        onClick: {
            type: Function,
            default: () => { console.log('Button clicked'); }
        },
        loading: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (!this.isDisabled && !this.loading) {
                this.onClick();
            }
        }
    }
};

import {  toDisplayString as _toDisplayString, openBlock as _openBlock,  createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = ["disabled"]
const _hoisted_2 = {
  key: 0,
  class: "text-gray-400 group-hover:text-white",
  "data-v-inspector": "components/atoms/AppSubmitButton.vue:9:9"
}
const _hoisted_3 = {
  key: 1,
  class: "loader",
  "data-v-inspector": "components/atoms/AppSubmitButton.vue:10:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("button", {
    type: "submit",
    id: "submit-button",
    class: _normalizeClass([
        'relative group flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/0 bg-black text-center text-sm mb-2 transition-all duration-200 disabled:cursor-auto disabled:border-none',

    ]),
    disabled: $props.isDisabled || $props.loading,
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args))),
    "data-v-inspector": "components/atoms/AppSubmitButton.vue:2:5"
  }, [
    _cache[1] || (_cache[1] = _createElementVNode("div", {
      class: "gradient absolute inset-0 opacity-50 group-hover:border-2 group-disabled:border-none group-disabled:text-gray-400",
      "data-v-inspector": "components/atoms/AppSubmitButton.vue:6:9"
    }, null, -1 /* HOISTED */)),
    (!$props.loading)
      ? (_openBlock(), _createElementBlock("div", _hoisted_2, _toDisplayString($props.buttonText), 1 /* TEXT */))
      : (_openBlock(), _createElementBlock("div", _hoisted_3))
  ], 8 /* PROPS */, _hoisted_1))
}

import "/_nuxt/components/atoms/AppSubmitButton.vue?vue&type=style&index=0&scoped=b0257145&lang.css"

_sfc_main.__hmrId = "b0257145"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-b0257145"],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppSubmitButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQSxLQUFLLFVBQVU7SUFDWCxLQUFLLEVBQUU7UUFDSCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUs7UUFDbkIsQ0FBQztRQUNELE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBSyxDQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUU7UUFDcEQsQ0FBQztRQUNELE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLEtBQUk7UUFDakIsQ0FBQztRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLEtBQUk7UUFDakI7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsV0FBVyxDQUFDLEVBQUU7WUFDVixFQUFDLENBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xCO1FBQ0o7SUFDSjtBQUNKLENBQUM7Ozs7bUJBeENEOztFQUFBO0VBUWEsS0FBSyxFQUFDLHNDQUFzQztFQUFpQixrQkFBZ0IsRUFBQywwQ0FBMEM7OztFQVJySTtFQVNvQixLQUFLLEVBQUMsUUFBUTtFQUFDLGtCQUFnQixFQUFDLDJDQUEyQzs7Ozt3QkFSM0Ysb0JBU1M7SUFURCxJQUFJLEVBQUMsUUFBUTtJQUFDLEVBQUUsRUFBQyxlQUFlO0lBQUUsS0FBSyxFQURuRCxnQkFDcUQ7OztLQUdoRDtJQUFHLFFBQVEsRUFBRSxpQkFBVSxJQUFJLGNBQU87SUFBRyxPQUFLLDBDQUFFLHFEQUFXO0lBQUUsa0JBQWdCLEVBQUMsMENBQTBDOzs4QkFDakgsb0JBRU07TUFERixLQUFLLEVBQUMsbUhBQW1IO01BQUMsa0JBQWdCLEVBQUMsMENBQTBDOztNQUVoSSxjQUFPO3VCQUFoRSxvQkFBb0osT0FBcEosVUFBb0osbUJBQW5CLGlCQUFVO3VCQUMzSSxvQkFBOEYsT0FBOUYsVUFBOEY7b0JBVHRHIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBTdWJtaXRCdXR0b24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdC1idXR0b25cIiA6Y2xhc3M9XCJbXG4gICAgICAgICdyZWxhdGl2ZSBncm91cCBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXItd2hpdGUvMCBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIG1iLTIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGRpc2FibGVkOmN1cnNvci1hdXRvIGRpc2FibGVkOmJvcmRlci1ub25lJyxcblxuICAgIF1cIiA6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkIHx8IGxvYWRpbmdcIiBAY2xpY2s9XCJoYW5kbGVDbGlja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFN1Ym1pdEJ1dHRvbi52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZ3JhZGllbnQgYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTUwIGdyb3VwLWhvdmVyOmJvcmRlci0yIGdyb3VwLWRpc2FibGVkOmJvcmRlci1ub25lIGdyb3VwLWRpc2FibGVkOnRleHQtZ3JheS00MDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBTdWJtaXRCdXR0b24udnVlOjY6OVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiIHYtaWY9XCIhbG9hZGluZ1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFN1Ym1pdEJ1dHRvbi52dWU6OTo5XCI+e3sgYnV0dG9uVGV4dCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxvYWRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFN1Ym1pdEJ1dHRvbi52dWU6MTA6OVwiPjwvZGl2PlxuICAgIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnRW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4geyBjb25zb2xlLmxvZygnQnV0dG9uIGNsaWNrZWQnKTsgfVxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL2F0b21zL0FwcFN1Ym1pdEJ1dHRvbi52dWUifQ==