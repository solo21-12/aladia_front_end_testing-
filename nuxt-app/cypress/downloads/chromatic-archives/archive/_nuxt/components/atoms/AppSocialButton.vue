import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppSocialButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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
        icon: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Click Me'
        },
        altText: {
            type: String,
            default: 'Social Button Icon'
        },
        onClick: {
            type: Function,
            default: () => { }
        }
    },
    methods: {
        handleClick() {
            this.onClick();
        }
    }
};

import {  toDisplayString as _toDisplayString, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = ["src", "alt"]
const _hoisted_2 = {
  class: "w-40 text-sm",
  "data-v-inspector": "components/atoms/AppSocialButton.vue:5:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: "flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95",
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args))),
    "data-v-inspector": "components/atoms/AppSocialButton.vue:2:5"
  }, [
    _createElementVNode("img", {
      src: $props.icon,
      alt: $props.altText,
      class: "h-6",
      "data-v-inspector": "components/atoms/AppSocialButton.vue:4:9"
    }, null, 8 /* PROPS */, _hoisted_1),
    _createElementVNode("div", _hoisted_2, _toDisplayString($props.buttonText), 1 /* TEXT */)
  ]))
}


_sfc_main.__hmrId = "af1ef3a1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppSocialButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQSxLQUFLLFVBQVU7SUFDWCxLQUFLLEVBQUU7UUFDSCxJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFHO1FBQ2pCLENBQUM7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLEtBQUksQ0FBRSxFQUFFO1FBQ3RCLENBQUM7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxDQUFDLE1BQUssQ0FBRSxNQUFLLENBQUUsSUFBSTtRQUNoQyxDQUFDO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JCO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xCO0lBQ0o7QUFDSixDQUFDOzs7O21CQWpDRDs7RUFJYSxLQUFLLEVBQUMsY0FBYztFQUFDLGtCQUFnQixFQUFDLDBDQUEwQzs7Ozt3QkFIekYsb0JBSU07SUFKRCxLQUFLLEVBQUMsZ05BQWdOO0lBQ3ROLE9BQUssMENBQUUscURBQVc7SUFBRSxrQkFBZ0IsRUFBQywwQ0FBMEM7O0lBQ2hGLG9CQUEwRztNQUFwRyxHQUFHLEVBQUUsV0FBSTtNQUFHLEdBQUcsRUFBRSxjQUFPO01BQUUsS0FBSyxFQUFDLEtBQUs7TUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7NEJBSC9HO0lBSVEsb0JBQTRHLE9BQTVHLFVBQTRHLG1CQUFuQixpQkFBVSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwU29jaWFsQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHJvdW5kZWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBweS0xLjUgc2hhZG93LVswcHhfM3B4XzZweF8jMDAwMDAwMDBdIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLXdoaXRlLzIwIGhvdmVyOnNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMF0gYWN0aXZlOnNjYWxlLTk1XCJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBTb2NpYWxCdXR0b24udnVlOjI6NVwiPlxuICAgICAgICA8aW1nIDpzcmM9XCJpY29uXCIgOmFsdD1cImFsdFRleHRcIiBjbGFzcz1cImgtNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFNvY2lhbEJ1dHRvbi52dWU6NDo5XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctNDAgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFNvY2lhbEJ1dHRvbi52dWU6NTo5XCI+e3sgYnV0dG9uVGV4dCB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnQ2xpY2sgTWUnXG4gICAgICAgIH0sXG4gICAgICAgIGFsdFRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdTb2NpYWwgQnV0dG9uIEljb24nXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4geyB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL2F0b21zL0FwcFNvY2lhbEJ1dHRvbi52dWUifQ==