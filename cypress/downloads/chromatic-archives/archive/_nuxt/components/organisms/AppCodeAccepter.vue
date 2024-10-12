import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/AppCodeAccepter.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createElementBlock as __createElementBlock,createVNode as __createVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"
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
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import { useUserStore } from "/_nuxt/stores/userStore.ts";
import AppCodeInput from "/_nuxt/components/atoms/AppCodeInput.vue";
import AppSubmitButton from "/_nuxt/components/atoms/AppSubmitButton.vue";

const _sfc_main = {
    components: {
        AppCodeInput,
        AppSubmitButton
    },
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        };
    },
    data() {
        return {
            codeDigits: ['', '', '', '', '', '']
        };
    },
    methods: {
        updateCode({ value, index }) {
            this.codeDigits[index] = value;  // Direct array mutation in Vue 3
            const nextInput = document.querySelectorAll('input')[index + 1];
            if (nextInput) nextInput.focus();
        },
        submitCode() {
            this.$emit('showMessage');
            const code = this.codeDigits.join('');
        }
    }
};

import {  toDisplayString as _toDisplayString, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock,  resolveComponent as _resolveComponent,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  id: "code_accepter",
  class: "relative inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:2:5"
}
const _hoisted_2 = {
  class: "relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:4:9"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-sm",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:6:13"
}
const _hoisted_4 = {
  class: "flex flex-col items-center px-6 pt-8",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:7:17"
}
const _hoisted_5 = {
  class: "mb-4 text-lg font-semibold",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:11:21"
}
const _hoisted_6 = {
  class: "relative mb-4 flex h-10 w-full justify-between text-xl text-black gap-3",
  "data-v-inspector": "components/organisms/AppCodeAccepter.vue:17:21"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppCodeInput = _resolveComponent("AppCodeInput")
  const _component_AppSubmitButton = _resolveComponent("AppSubmitButton")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _cache[0] || (_cache[0] = _createElementVNode("img", {
            src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
            class: "h-20 w-20 object-cover",
            alt: "Aladia logo",
            "data-v-inspector": "components/organisms/AppCodeAccepter.vue:8:21"
          }, null, -1 /* HOISTED */)),
          _createElementVNode("div", _hoisted_5, _toDisplayString($setup.userStore.currentUser.name), 1 /* TEXT */),
          _cache[1] || (_cache[1] = _createElementVNode("div", {
            class: "mb-8 text-white/70",
            "data-v-inspector": "components/organisms/AppCodeAccepter.vue:12:21"
          }, "Thanks for joining Aladia.", -1 /* HOISTED */)),
          _cache[2] || (_cache[2] = _createElementVNode("div", {
            class: "mb-8 text-center text-white/70",
            "data-v-inspector": "components/organisms/AppCodeAccepter.vue:13:21"
          }, " Please enter the 6-digit code we sent you via email: ", -1 /* HOISTED */)),
          _createElementVNode("div", _hoisted_6, [
            (_openBlock(), _createElementBlock(_Fragment, null, _renderList(6, (n) => {
              return _createVNode(_component_AppCodeInput, {
                key: n,
                code: $data.codeDigits[n - 1],
                index: n - 1,
                onInput: $options.updateCode,
                "data-testid": 'code-input-' + (n - 1)
              }, null, 8 /* PROPS */, ["code", "index", "onInput", "data-testid"])
            }), 64 /* STABLE_FRAGMENT */))
          ]),
          _cache[3] || (_cache[3] = _createElementVNode("div", {
            class: "mb-8 flex justify-center text-xs text-white/50",
            "data-v-inspector": "components/organisms/AppCodeAccepter.vue:21:21"
          }, " Didn't receive any email? ", -1 /* HOISTED */)),
          _createVNode(_component_AppSubmitButton, {
            onClick: $options.submitCode,
            "data-id": "submit_code"
          }, null, 8 /* PROPS */, ["onClick"])
        ])
      ])
    ])
  ]))
}

import "/_nuxt/components/organisms/AppCodeAccepter.vue?vue&type=style&index=0&scoped=12c41583&lang.css"

_sfc_main.__hmrId = "12c41583"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-12c41583"],['__file',"/home/dawit/projects/current/upwork/test/components/organisms/AppCodeAccepter.vue"]])
//# sourceMappingURL=data:application/json;base64,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QjtvQ0FDNUgsb0JBRU07WUFGRCxLQUFLLEVBQUMsZ0NBQWdDO1lBQUMsa0JBQWdCLEVBQUMsZ0RBQWdEO2FBQUMsd0RBRTlHO1VBRUEsb0JBR00sT0FITixVQUdNOzJCQUZGLG9CQUNpRSxpQkFsQnpGLFlBaUJrRCxDQUFDLEVBakJuRCxDQWlCNkMsQ0FBQztxQkFBdEIsYUFDaUU7Z0JBRG5DLEdBQUcsRUFBRSxDQUFDO2dCQUFHLElBQUksRUFBRSxnQkFBVSxDQUFDLENBQUM7Z0JBQVEsS0FBSyxFQUFFLENBQUM7Z0JBQ3BFLE9BQUssRUFBRSxtQkFBVTtnQkFBRyxhQUFXLG1CQUFtQixDQUFDOzs7O29DQUU1RCxvQkFFTTtZQUZELEtBQUssRUFBQyxnREFBZ0Q7WUFBQyxrQkFBZ0IsRUFBQyxnREFBZ0Q7YUFBQyw2QkFFOUg7VUFFQSxhQUE2RDtZQUEzQyxPQUFLLEVBQUUsbUJBQVU7WUFBRSxTQUFPLEVBQUMsYUFBYSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwQ29kZUFjY2VwdGVyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cImNvZGVfYWNjZXB0ZXJcIlxuICAgICAgICBjbGFzcz1cInJlbGF0aXZlIGluc2V0LTAgei1bOTBdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzQwIHRleHQtd2hpdGUgYmFja2Ryb3AtYmx1ciBweS0xXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcENvZGVBY2NlcHRlci52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLVs0MHJlbV0gdy1bMjZyZW1dIGZsZXgtY29sIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1ibGFjay81MCBvcGFjaXR5LTEwMCBiYWNrZHJvcC1ibHVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwQ29kZUFjY2VwdGVyLnZ1ZTo0OjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGgtZnVsbCBwLTUgdGV4dC1zbVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjY6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtNiBwdC04XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcENvZGVBY2NlcHRlci52dWU6NzoxN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZGV2ZWxvcC5hbGFkaWEuaW8vX251eHQvaW1hZ2UuQ2hRM2JpVzkucG5nXCIgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFsYWRpYSBsb2dvXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcENvZGVBY2NlcHRlci52dWU6ODoyMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IHRleHQtbGcgZm9udC1zZW1pYm9sZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjExOjIxXCI+e3sgdXNlclN0b3JlLmN1cnJlbnRVc2VyLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTggdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjEyOjIxXCI+VGhhbmtzIGZvciBqb2luaW5nIEFsYWRpYS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTggdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjEzOjIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgdGhlIDYtZGlnaXQgY29kZSB3ZSBzZW50IHlvdSB2aWEgZW1haWw6XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBtYi00IGZsZXggaC0xMCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIHRleHQteGwgdGV4dC1ibGFjayBnYXAtM1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjE3OjIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwQ29kZUlucHV0IHYtZm9yPVwibiBpbiA2XCIgOmtleT1cIm5cIiA6Y29kZT1cImNvZGVEaWdpdHNbbiAtIDFdXCIgOmluZGV4PVwibiAtIDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZUNvZGVcIiA6ZGF0YS10ZXN0aWQ9XCInY29kZS1pbnB1dC0nICsgKG4gLSAxKVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItOCBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQteHMgdGV4dC13aGl0ZS81MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBDb2RlQWNjZXB0ZXIudnVlOjIxOjIxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEaWRuJ3QgcmVjZWl2ZSBhbnkgZW1haWw/XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxBcHBTdWJtaXRCdXR0b24gQGNsaWNrPVwic3VibWl0Q29kZVwiIGRhdGEtaWQ9XCJzdWJtaXRfY29kZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlVXNlclN0b3JlIH0gZnJvbSAnQC9zdG9yZXMvdXNlclN0b3JlJztcbmltcG9ydCBBcHBDb2RlSW5wdXQgZnJvbSAnLi4vYXRvbXMvQXBwQ29kZUlucHV0LnZ1ZSc7XG5pbXBvcnQgQXBwU3VibWl0QnV0dG9uIGZyb20gJy4uL2F0b21zL0FwcFN1Ym1pdEJ1dHRvbi52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHBDb2RlSW5wdXQsXG4gICAgICAgIEFwcFN1Ym1pdEJ1dHRvblxuICAgIH0sXG4gICAgc2V0dXAoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJTdG9yZSA9IHVzZVVzZXJTdG9yZSgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyU3RvcmVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2RlRGlnaXRzOiBbJycsICcnLCAnJywgJycsICcnLCAnJ11cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlQ29kZSh7IHZhbHVlLCBpbmRleCB9KSB7XG4gICAgICAgICAgICB0aGlzLmNvZGVEaWdpdHNbaW5kZXhdID0gdmFsdWU7ICAvLyBEaXJlY3QgYXJyYXkgbXV0YXRpb24gaW4gVnVlIDNcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIGlmIChuZXh0SW5wdXQpIG5leHRJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRDb2RlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hvd01lc3NhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSB0aGlzLmNvZGVEaWdpdHMuam9pbignJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4udGV4dC1zbSB7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG59XG48L3N0eWxlPlxuIl0sImZpbGUiOiIvaG9tZS9kYXdpdC9wcm9qZWN0cy9jdXJyZW50L3Vwd29yay90ZXN0L2NvbXBvbmVudHMvb3JnYW5pc21zL0FwcENvZGVBY2NlcHRlci52dWUifQ==