import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppTextInput.vue");/* Injection by vite-plugin-vue-inspector Start */
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
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: "text",
        },
        maxlength: {
            type: Number,
            default: 100,
        },
        placeholder: {
            type: String,
            default: "",
        },
        iconClass: {
            type: String,
            default: "fa-solid fa-user",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showPassword: false,
            isTyping: false, // State to track if user is typing
            inputValue: this.modelValue // Local input value
        };
    },
    watch: {
        inputValue(value) {
            this.$emit('update:modelValue', value); // Emit update when input changes
        },
    },
    computed: {
        inputType() {
            return this.type === 'password' && !this.showPassword ? 'password' : 'text';
        },
        passwordToggleIcon() {
            return this.showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
        },
    },
    methods: {
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
    },
};

import { normalizeClass as _normalizeClass,  vModelDynamic as _vModelDynamic, withDirectives as _withDirectives, openBlock as _openBlock,  createCommentVNode as _createCommentVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  class: "flex w-10 items-center justify-center text-base text-black/70",
  "data-v-inspector": "components/atoms/AppTextInput.vue:4:9"
}
const _hoisted_2 = ["type", "maxlength", "placeholder", "disabled"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass(['group bg-white relative mb-6 flex h-10 w-full rounded transition-all', $data.isTyping ? ' opacity-80' : ' opacity-100']),
    id: "text_input",
    "data-v-inspector": "components/atoms/AppTextInput.vue:2:5"
  }, [
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("i", {
        class: _normalizeClass($props.iconClass),
        "data-v-inspector": "components/atoms/AppTextInput.vue:5:13"
      }, null, 2 /* CLASS */)
    ]),
    _withDirectives(_createElementVNode("input", {
      type: $options.inputType,
      maxlength: $props.maxlength,
      placeholder: $props.placeholder,
      disabled: $props.disabled,
      class: "input-field h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all",
      autocomplete: "off",
      onFocus: _cache[0] || (_cache[0] = $event => ($data.isTyping = true)),
      onBlur: _cache[1] || (_cache[1] = $event => ($data.isTyping = false)),
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($data.inputValue) = $event)),
      "data-v-inspector": "components/atoms/AppTextInput.vue:7:9"
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2), [
      [_vModelDynamic, $data.inputValue]
    ]),
    ($props.type === 'password')
      ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: "absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-black/50 transition-all active:scale-90",
          onClick: _cache[3] || (_cache[3] = (...args) => ($options.togglePasswordVisibility && $options.togglePasswordVisibility(...args))),
          "data-v-inspector": "components/atoms/AppTextInput.vue:11:9"
        }, [
          _createElementVNode("i", {
            class: _normalizeClass($options.passwordToggleIcon),
            "data-v-inspector": "components/atoms/AppTextInput.vue:14:13"
          }, null, 2 /* CLASS */)
        ]))
      : _createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}


_sfc_main.__hmrId = "1768e859"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppTextInput.vue"]])
//# sourceMappingURL=data:application/json;base64,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RixLQUFLLEVBQUMsaUdBQWlHO01BQ3ZHLFlBQVksRUFBQyxLQUFLO01BQUUsT0FBSyx1Q0FBRSxjQUFRO01BQVUsTUFBSSx1Q0FBRSxjQUFRO01BUnZFLDZEQVEwRixnQkFBVTtNQUFFLGtCQUFnQixFQUFDLHVDQUF1Qzs2Q0FSOUo7dUJBUTBGLGdCQUFVOztLQUVqRixXQUFJO3VCQUFmLG9CQUlNO1VBZGQ7VUFXWSxLQUFLLEVBQUMsK0dBQStHO1VBQ3BILE9BQUssMENBQUUsK0VBQXdCO1VBQUUsa0JBQWdCLEVBQUMsd0NBQXdDOztVQUMzRixvQkFBOEY7WUFBMUYsS0FBSyxFQWJyQixnQkFhdUIsMkJBQWtCO1lBQUUsa0JBQWdCLEVBQUMseUNBQXlDOzs7UUFickciLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcFRleHRJbnB1dC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiWydncm91cCBiZy13aGl0ZSByZWxhdGl2ZSBtYi02IGZsZXggaC0xMCB3LWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCcsIGlzVHlwaW5nID8gJyBvcGFjaXR5LTgwJyA6ICcgb3BhY2l0eS0xMDAnXVwiXG4gICAgICAgIGlkPVwidGV4dF9pbnB1dFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFRleHRJbnB1dC52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwVGV4dElucHV0LnZ1ZTo0OjlcIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cImljb25DbGFzc1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcFRleHRJbnB1dC52dWU6NToxM1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCA6dHlwZT1cImlucHV0VHlwZVwiIDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIiA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtZmllbGQgaC1mdWxsIGZsZXgtMSByb3VuZGVkIGJnLXRyYW5zcGFyZW50IHRleHQtc20gdGV4dC1ibGFjayBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCIgQGZvY3VzPVwiaXNUeXBpbmcgPSB0cnVlXCIgQGJsdXI9XCJpc1R5cGluZyA9IGZhbHNlXCIgdi1tb2RlbD1cImlucHV0VmFsdWVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBUZXh0SW5wdXQudnVlOjc6OVwiIC8+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwidHlwZSA9PT0gJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHByLTMgY3Vyc29yLXBvaW50ZXIgdGV4dC1ibGFjay81MCB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTBcIlxuICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwVGV4dElucHV0LnZ1ZToxMTo5XCI+XG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJwYXNzd29yZFRvZ2dsZUljb25cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBUZXh0SW5wdXQudnVlOjE0OjEzXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWxWYWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJ0ZXh0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMTAwLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbkNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBcImZhLXNvbGlkIGZhLXVzZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93UGFzc3dvcmQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNUeXBpbmc6IGZhbHNlLCAvLyBTdGF0ZSB0byB0cmFjayBpZiB1c2VyIGlzIHR5cGluZ1xuICAgICAgICAgICAgaW5wdXRWYWx1ZTogdGhpcy5tb2RlbFZhbHVlIC8vIExvY2FsIGlucHV0IHZhbHVlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBpbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKTsgLy8gRW1pdCB1cGRhdGUgd2hlbiBpbnB1dCBjaGFuZ2VzXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbnB1dFR5cGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAncGFzc3dvcmQnICYmICF0aGlzLnNob3dQYXNzd29yZCA/ICdwYXNzd29yZCcgOiAndGV4dCc7XG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkVG9nZ2xlSWNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dQYXNzd29yZCA/ICdmYS1zb2xpZCBmYS1leWUtc2xhc2gnIDogJ2ZhLXNvbGlkIGZhLWV5ZSc7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Bhc3N3b3JkID0gIXRoaXMuc2hvd1Bhc3N3b3JkO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Rhd2l0L3Byb2plY3RzL2N1cnJlbnQvdXB3b3JrL3Rlc3QvY29tcG9uZW50cy9hdG9tcy9BcHBUZXh0SW5wdXQudnVlIn0=