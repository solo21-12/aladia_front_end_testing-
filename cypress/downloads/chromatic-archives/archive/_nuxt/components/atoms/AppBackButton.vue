import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppBackButton.vue");/* Injection by vite-plugin-vue-inspector Start */
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
    name: 'AppBackButton',
    props: {
        onClick: {
            type: Function,
            default: null
        }
    },
    methods: {
        handleClick() {
            this.$emit('onClick'); // Emit the event when clicked
            if (this.onClick) {
                this.onClick(); // Call the passed function, if provided
            }
        }
    }
}

import {  createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args))),
    class: "next-icon flex h-8 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95",
    "data-v-inspector": "components/atoms/AppBackButton.vue:2:5"
  }, _cache[1] || (_cache[1] = [
    _createElementVNode("div", {
      class: "inline-flex items-center justify-center pt-0.5 rotate-180",
      "data-v-inspector": "components/atoms/AppBackButton.vue:4:9"
    }, [
      _createElementVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        class: "octicon arrow-symbol-mktg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        "data-v-inspector": "components/atoms/AppBackButton.vue:5:13"
      }, [
        _createElementVNode("path", {
          fill: "currentColor",
          d: "M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.53033 8.53033L10.46967 7.46967Z",
          "data-v-inspector": "components/atoms/AppBackButton.vue:7:17"
        }),
        _createElementVNode("path", {
          class: "octicon-chevrow-stem",
          stroke: "currentColor",
          d: "M1.75 8H11",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "data-v-inspector": "components/atoms/AppBackButton.vue:9:17"
        })
      ])
    ], -1 /* HOISTED */),
    _createTextVNode(" Back to Log in ")
  ])))
}


_sfc_main.__hmrId = "f2f3a1b8"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppBackButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsS0FBSyxVQUFVO0lBQ1gsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ3JCLEtBQUssRUFBRTtRQUNILE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLElBQUc7UUFDaEI7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsV0FBVyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFHLENBQUUsR0FBRSxDQUFFLEtBQUksQ0FBRSxJQUFHLENBQUUsT0FBTTtZQUNwRCxFQUFDLENBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFHLENBQUUsR0FBRSxDQUFFLE1BQUssQ0FBRSxRQUFRLEVBQUUsRUFBQyxDQUFFLFFBQU87WUFDM0Q7UUFDSjtJQUNKO0FBQ0o7Ozs7O3dCQWhDSSxvQkFZTTtJQVpBLE9BQUssMENBQUUscURBQVc7SUFDcEIsS0FBSyxFQUFDLHlHQUF5RztJQUFDLGtCQUFnQixFQUFDLHdDQUF3Qzs7SUFDekssb0JBUU07TUFSRCxLQUFLLEVBQUMsMkRBQTJEO01BQUMsa0JBQWdCLEVBQUMsd0NBQXdDOztNQUM1SCxvQkFNTTtRQU5ELEtBQUssRUFBQyw0QkFBNEI7UUFBQyxLQUFLLEVBQUMsMkJBQTJCO1FBQUMsS0FBSyxFQUFDLElBQUk7UUFBQyxNQUFNLEVBQUMsSUFBSTtRQUM1RixPQUFPLEVBQUMsV0FBVztRQUFDLElBQUksRUFBQyxNQUFNO1FBQUMsa0JBQWdCLEVBQUMseUNBQXlDOztRQUMxRixvQkFDdWpCO1VBRGpqQixJQUFJLEVBQUMsY0FBYztVQUNyQixDQUFDLEVBQUMsbWZBQW1mO1VBQUMsa0JBQWdCLEVBQUMseUNBQXlDOztRQUNwakIsb0JBQzZGO1VBRHZGLEtBQUssRUFBQyxzQkFBc0I7VUFBQyxNQUFNLEVBQUMsY0FBYztVQUFDLENBQUMsRUFBQyxZQUFZO1VBQUMsY0FBWSxFQUFDLEtBQUs7VUFDdEYsZ0JBQWMsRUFBQyxPQUFPO1VBQUMsa0JBQWdCLEVBQUMseUNBQXlDOzs7O0lBVHJHLGlCQVdjLGtCQUVWIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBCYWNrQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXG4gICAgICAgIGNsYXNzPVwibmV4dC1pY29uIGZsZXggaC04IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBwYi00IHRyYW5zaXRpb24tYWxsIGFjdGl2ZTpzY2FsZS05NVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcEJhY2tCdXR0b24udnVlOjI6NVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTAuNSByb3RhdGUtMTgwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwQmFja0J1dHRvbi52dWU6NDo5XCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cIm9jdGljb24gYXJyb3ctc3ltYm9sLW1rdGdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcEJhY2tCdXR0b24udnVlOjU6MTNcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk03LjI4MDMzIDMuMjE5NjdDNi45ODc0NCAyLjkyNjc4IDYuNTEyNTYgMi45MjY3OCA2LjIxOTY3IDMuMjE5NjdDNS45MjY3OCAzLjUxMjU2IDUuOTI2NzggMy45ODc0NCA2LjIxOTY3IDQuMjgwMzNMNy4yODAzMyAzLjIxOTY3Wk0xMSA4TDExLjUzMDMgOC41MzAzM0MxMS44MjMyIDguMjM3NDQgMTEuODIzMiA3Ljc2MjU2IDExLjUzMDMgNy40Njk2N0wxMSA4Wk02LjIxOTY3IDExLjcxOTdDNS45MjY3OCAxMi4wMTI2IDUuOTI2NzggMTIuNDg3NCA2LjIxOTY3IDEyLjc4MDNDNi41MTI1NiAxMy4wNzMyIDYuOTg3NDQgMTMuMDczMiA3LjI4MDMzIDEyLjc4MDNMNi4yMTk2NyAxMS43MTk3Wk02LjIxOTY3IDQuMjgwMzNMMTAuNDY5NyA4LjUzMDMzTDExLjUzMDMgNy40Njk2N0w3LjI4MDMzIDMuMjE5NjdMNi4yMTk2NyA0LjI4MDMzWk0xMC40Njk3IDcuNDY5NjdMNi4yMTk2NyAxMS43MTk3TDcuMjgwMzMgMTIuNzgwM0wxMS41MzAzMyA4LjUzMDMzTDEwLjQ2OTY3IDcuNDY5NjdaXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwQmFja0J1dHRvbi52dWU6NzoxN1wiIC8+XG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJvY3RpY29uLWNoZXZyb3ctc3RlbVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMS43NSA4SDExXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcEJhY2tCdXR0b24udnVlOjk6MTdcIj48L3BhdGg+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIEJhY2sgdG8gTG9nIGluXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBcHBCYWNrQnV0dG9uJyxcbiAgICBwcm9wczoge1xuICAgICAgICBvbkNsaWNrOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29uQ2xpY2snKTsgLy8gRW1pdCB0aGUgZXZlbnQgd2hlbiBjbGlja2VkXG4gICAgICAgICAgICBpZiAodGhpcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7IC8vIENhbGwgdGhlIHBhc3NlZCBmdW5jdGlvbiwgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9kYXdpdC9wcm9qZWN0cy9jdXJyZW50L3Vwd29yay90ZXN0L2NvbXBvbmVudHMvYXRvbXMvQXBwQmFja0J1dHRvbi52dWUifQ==