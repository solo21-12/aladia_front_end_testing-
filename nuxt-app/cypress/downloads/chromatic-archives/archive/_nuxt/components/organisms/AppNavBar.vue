import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/AppNavBar.vue");import { default as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@18.19.55_ioredis@5.4.1_magicast@0.3.5_rollup@4._6wqjbqw6dmapnmro6xpkorp354/node_modules/nuxt/dist/app/components/nuxt-link.js?v=8ca91568";
/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */


import AppJoinUsButton from "/_nuxt/components/atoms/AppJoinUsButton.vue";
import AppSearchInput from "/_nuxt/components/atoms/AppSearchInput.vue";

const _sfc_main = {
    name: 'MainHeader',
    components: {
        AppSearchInput,
        AppJoinUsButton
    },
    props: {
        isSignUpVisible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleSignUp() {
            this.$emit('toggle-signup');
        }
    }
};

import {  resolveComponent as _resolveComponent, withCtx as _withCtx,  normalizeClass as _normalizeClass, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  class: "pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center",
  "data-v-inspector": "components/organisms/AppNavBar.vue:9:9"
}
const _hoisted_2 = {
  id: "nav_wrapper",
  "data-v-inspector": "components/organisms/AppNavBar.vue:12:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0
  const _component_AppSearchInput = _resolveComponent("AppSearchInput")
  const _component_AppJoinUsButton = _resolveComponent("AppJoinUsButton")

  return (_openBlock(), _createElementBlock("div", {
    class: _normalizeClass(["fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2", { 'blur': $props.isSignUpVisible }]),
    "data-v-inspector": "components/organisms/AppNavBar.vue:2:5"
  }, [
    _createVNode(_component_NuxtLink, {
      to: "/",
      class: "flex items-center gap-4 md:pl-20"
    }, {
      default: _withCtx(() => _cache[0] || (_cache[0] = [
        _createElementVNode("div", {
          class: "flex h-8 w-8 items-center justify-center",
          "data-v-inspector": "components/organisms/AppNavBar.vue:5:13"
        }, [
          _createElementVNode("i", {
            class: "fa-solid fa-house",
            "data-v-inspector": "components/organisms/AppNavBar.vue:6:17"
          })
        ], -1 /* HOISTED */)
      ])),
      _: 1 /* STABLE */
    }),
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_AppSearchInput)
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_AppJoinUsButton, {
        onToggleSignup: $options.toggleSignUp,
        "data-id": "join_us"
      }, null, 8 /* PROPS */, ["onToggleSignup"])
    ])
  ], 2 /* CLASS */))
}

import "/_nuxt/components/organisms/AppNavBar.vue?vue&type=style&index=0&scoped=889bbce4&lang.css"

_sfc_main.__hmrId = "889bbce4"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-889bbce4"],['__file',"/home/dawit/projects/current/upwork/test/components/organisms/AppNavBar.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsTUFBSyxDQUFFLGVBQWMsQ0FBRSxJQUFHLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztBQUMxRCxNQUFLLENBQUUsY0FBYSxDQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDOztBQUV4RCxLQUFLLFVBQVU7SUFDWCxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDbEIsVUFBVSxFQUFFO1FBQ1IsY0FBYztRQUNkLGVBQWM7SUFDbEIsQ0FBQztJQUNELEtBQUssRUFBRTtRQUNILGVBQWUsRUFBRTtZQUNiLElBQUksRUFBRSxPQUFPO1lBQ2IsT0FBTyxFQUFFLEtBQUk7UUFDakI7SUFDSixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsWUFBWSxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0I7SUFDSjtBQUNKLENBQUM7Ozs7O0VBL0JZLEtBQUssRUFBQywwRkFBMEY7RUFBQyxrQkFBZ0IsRUFBQyx3Q0FBd0M7OztFQUcxSixFQUFFLEVBQUMsYUFBYTtFQUFDLGtCQUFnQixFQUFDLHlDQUF5Qzs7Ozs7Ozs7d0JBVnBGLG9CQWFNO0lBYkQsS0FBSyxFQURkLGlCQUNlLDhHQUErRyxZQUNwRyxzQkFBZTtJQUFJLGtCQUFnQixFQUFDLHdDQUF3Qzs7SUFDOUYsYUFJVztNQUpELEVBQUUsRUFBQyxHQUFHO01BQUMsS0FBSyxFQUFDLGtDQUFrQzs7TUFIakUsa0JBSVksQ0FFTTtRQUZOLG9CQUVNO1VBRkQsS0FBSyxFQUFDLDBDQUEwQztVQUFDLGtCQUFnQixFQUFDLHlDQUF5Qzs7VUFDNUcsb0JBQTRGO1lBQXpGLEtBQUssRUFBQyxtQkFBbUI7WUFBQyxrQkFBZ0IsRUFBQyx5Q0FBeUM7Ozs7TUFMdkc7O0lBUVEsb0JBRU0sT0FGTixVQUVNO01BREYsYUFBa0I7O0lBRXRCLG9CQUVNLE9BRk4sVUFFTTtNQURGLGFBQW1FO1FBQWpELGNBQWEsRUFBRSxxQkFBWTtRQUFFLFNBQU8sRUFBQyxTQUFTIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBOYXZCYXIudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiIGZpeGVkIGxlZnQtMCByaWdodC0wIHRvcC0wIHotWzYwXSBmbGV4IGgtMTQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgYmctWyMwNjA2MDZdIHB4LTQgcHktMlwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2JsdXInOiBpc1NpZ25VcFZpc2libGUgfVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBOYXZCYXIudnVlOjI6NVwiPlxuICAgICAgICA8TnV4dExpbmsgdG89XCIvXCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtZDpwbC0yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTmF2QmFyLnZ1ZTo1OjEzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ob3VzZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBOYXZCYXIudnVlOjY6MTdcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9OdXh0TGluaz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCB6LTEwIGZsZXggaC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTmF2QmFyLnZ1ZTo5OjlcIj5cbiAgICAgICAgICAgIDxBcHBTZWFyY2hJbnB1dCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm5hdl93cmFwcGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcE5hdkJhci52dWU6MTI6OVwiPlxuICAgICAgICAgICAgPEFwcEpvaW5Vc0J1dHRvbiBAdG9nZ2xlLXNpZ251cD1cInRvZ2dsZVNpZ25VcFwiIGRhdGEtaWQ9XCJqb2luX3VzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQXBwSm9pblVzQnV0dG9uIGZyb20gJy4uL2F0b21zL0FwcEpvaW5Vc0J1dHRvbi52dWUnO1xuaW1wb3J0IEFwcFNlYXJjaElucHV0IGZyb20gJy4uL2F0b21zL0FwcFNlYXJjaElucHV0LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTWFpbkhlYWRlcicsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHBTZWFyY2hJbnB1dCxcbiAgICAgICAgQXBwSm9pblVzQnV0dG9uXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBpc1NpZ25VcFZpc2libGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZVNpZ25VcCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZS1zaWdudXAnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2Rhd2l0L3Byb2plY3RzL2N1cnJlbnQvdXB3b3JrL3Rlc3QvY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTmF2QmFyLnZ1ZSJ9