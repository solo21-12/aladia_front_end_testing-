import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/layouts/default.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */

import { ref, watch } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413";
import AppLogin from "/_nuxt/components/organisms/AppLogin.vue";
import AppNavBar from "/_nuxt/components/organisms/AppNavBar.vue";

const _sfc_main = {
    components: {
        AppNavBar,
        AppLogin
    },
    data() {
        return {
            isSignUpVisible: false
        };
    },
    setup() {
        const dialog = ref(false);

        const handleDialogChange = (newVal) => {
            if (!newVal) {
                dialog.value = false;
            }
        };

        return {
            dialog,
            handleDialogChange
        };
    },
    methods: {
        openDialog() {
            this.dialog = true;
            this.isSignUpVisible = true;
        },
        closeSignUp() {
            this.dialog = false;
            this.isSignUpVisible = false;
        }
    },
    watch: {
        dialog(val) {
            this.isSignUpVisible = val;
        }
    }
};

import { resolveComponent as _resolveComponent,  withCtx as _withCtx, renderSlot as _renderSlot, normalizeClass as _normalizeClass,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  class: "relative",
  id: "top",
  "data-v-inspector": "layouts/default.vue:2:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppNavBar = _resolveComponent("AppNavBar")
  const _component_AppLogin = _resolveComponent("AppLogin")
  const _component_v_dialog = _resolveComponent("v-dialog")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_AppNavBar, {
      isSignUpVisible: $data.isSignUpVisible,
      onToggleSignup: $options.openDialog,
      id: "nav"
    }, null, 8 /* PROPS */, ["isSignUpVisible", "onToggleSignup"]),
    _createVNode(_component_v_dialog, {
      modelValue: $setup.dialog,
      "onUpdate:modelValue": [
        _cache[0] || (_cache[0] = $event => (($setup.dialog) = $event)),
        $setup.handleDialogChange
      ],
      "max-width": "500"
    }, {
      default: _withCtx(() => [
        _createVNode(_component_AppLogin)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
    _createElementVNode("main", {
      class: _normalizeClass([{ 'blur': $data.isSignUpVisible }, "container mx-auto mt-5 transition-all duration-300"]),
      id: "main",
      "data-v-inspector": "layouts/default.vue:9:9"
    }, [
      _renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ], 2 /* CLASS */)
  ]))
}

import "/_nuxt/layouts/default.vue?vue&type=style&index=0&scoped=433a9abd&lang.css"

_sfc_main.__hmrId = "433a9abd"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-433a9abd"],['__file',"/home/dawit/projects/current/upwork/test/layouts/default.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsTUFBSyxDQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBRSxFQUFFLElBQUcsQ0FBRSxDQUFDLEdBQUcsQ0FBQztBQUNoQyxNQUFLLENBQUUsUUFBTyxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMzRCxNQUFLLENBQUUsU0FBUSxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzs7QUFFN0QsS0FBSyxVQUFVO0lBQ1gsVUFBVSxFQUFFO1FBQ1IsU0FBUztRQUNULFFBQU87SUFDWCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUU7UUFDSCxNQUFLLENBQUU7WUFDSCxlQUFlLEVBQUUsS0FBSTtRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssQ0FBQyxFQUFFO1FBQ0osS0FBSSxDQUFFLE1BQUssQ0FBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUM7O1FBRXpCLEtBQUksQ0FBRSxrQkFBaUIsQ0FBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUNuQyxFQUFDLENBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDVCxNQUFNLENBQUMsS0FBSSxDQUFFLEVBQUUsS0FBSztZQUN4QjtRQUNKLENBQUM7O1FBRUQsTUFBSyxDQUFFO1lBQ0gsTUFBTTtZQUNOLGtCQUFpQjtRQUNyQixDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFVBQVUsQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQUssQ0FBRSxFQUFFLElBQUk7WUFDbEIsSUFBSSxDQUFDLGVBQWMsQ0FBRSxFQUFFLElBQUk7UUFDL0IsQ0FBQztRQUNELFdBQVcsQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQUssQ0FBRSxFQUFFLEtBQUs7WUFDbkIsSUFBSSxDQUFDLGVBQWMsQ0FBRSxFQUFFLEtBQUs7UUFDaEM7SUFDSixDQUFDO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQUksQ0FBQyxlQUFjLENBQUUsRUFBRSxHQUFHO1FBQzlCO0lBQ0o7QUFDSixDQUFDOzs7OztFQXpEUSxLQUFLLEVBQUMsVUFBVTtFQUFDLEVBQUUsRUFBQyxLQUFLO0VBQUMsa0JBQWdCLEVBQUMseUJBQXlCOzs7Ozs7Ozt3QkFBekUsb0JBVU0sT0FWTixVQVVNO0lBVEYsYUFBcUY7TUFBekUsZUFBZSxFQUFFLHFCQUFlO01BQUcsY0FBYSxFQUFFLG1CQUFVO01BQUUsRUFBRSxFQUFDLEtBQUs7O0lBRWxGLGFBRVc7TUFObkIsWUFJMkIsYUFBTTtNQUpqQzs4Q0FJMkIsYUFBTTtRQUFzQyx5QkFBa0I7O01BQXRELFdBQVMsRUFBQyxLQUFLOztNQUpsRCxrQkFLWSxDQUFZO1FBQVosYUFBWTs7TUFMeEI7O0lBUVEsb0JBRU87TUFGQSxLQUFLLEVBUnBCLDJCQVFnQyxxQkFBZSxJQUFVLG9EQUFvRDtNQUFDLEVBQUUsRUFBQyxNQUFNO01BQUMsa0JBQWdCLEVBQUMseUJBQXlCOztNQUN0SixZQUFRIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJkZWZhdWx0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCIgaWQ9XCJ0b3BcIiBkYXRhLXYtaW5zcGVjdG9yPVwibGF5b3V0cy9kZWZhdWx0LnZ1ZToyOjVcIj5cbiAgICAgICAgPEFwcE5hdkJhciA6aXNTaWduVXBWaXNpYmxlPVwiaXNTaWduVXBWaXNpYmxlXCIgQHRvZ2dsZS1zaWdudXA9XCJvcGVuRGlhbG9nXCIgaWQ9XCJuYXZcIiAvPlxuXG4gICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNTAwXCIgQHVwZGF0ZTptb2RlbFZhbHVlPVwiaGFuZGxlRGlhbG9nQ2hhbmdlXCI+XG4gICAgICAgICAgICA8QXBwTG9naW4gLz5cbiAgICAgICAgPC92LWRpYWxvZz5cblxuICAgICAgICA8bWFpbiA6Y2xhc3M9XCJ7ICdibHVyJzogaXNTaWduVXBWaXNpYmxlIH1cIiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIG10LTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgaWQ9XCJtYWluXCIgZGF0YS12LWluc3BlY3Rvcj1cImxheW91dHMvZGVmYXVsdC52dWU6OTo5XCI+XG4gICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTG9naW4udnVlJztcbmltcG9ydCBBcHBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTmF2QmFyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcE5hdkJhcixcbiAgICAgICAgQXBwTG9naW5cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1NpZ25VcFZpc2libGU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gcmVmKGZhbHNlKTtcblxuICAgICAgICBjb25zdCBoYW5kbGVEaWFsb2dDaGFuZ2UgPSAobmV3VmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGRpYWxvZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaWFsb2csXG4gICAgICAgICAgICBoYW5kbGVEaWFsb2dDaGFuZ2VcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb3BlbkRpYWxvZygpIHtcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNTaWduVXBWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VTaWduVXAoKSB7XG4gICAgICAgICAgICB0aGlzLmRpYWxvZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc1NpZ25VcFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZGlhbG9nKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pc1NpZ25VcFZpc2libGUgPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uYmx1ciB7XG4gICAgZmlsdGVyOiBibHVyKDRweCk7XG59XG48L3N0eWxlPiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9sYXlvdXRzL2RlZmF1bHQudnVlIn0=