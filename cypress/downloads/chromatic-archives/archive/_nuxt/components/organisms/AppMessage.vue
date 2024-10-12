import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/AppMessage.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import { useUserStore } from "/_nuxt/stores/userStore.ts";
import AppSubmitButton from "/_nuxt/components/atoms/AppSubmitButton.vue";

const _sfc_main = {
    components: {
        AppSubmitButton
    },
    setup() {
        const userStore = useUserStore();
        const userName = userStore.currentUser.name
        const submitCode = () => {
            console.log('Submit button clicked');
        };
        return {
            userName,
            submitCode
        };
    }
};

import { toDisplayString as _toDisplayString,  resolveComponent as _resolveComponent,  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  id: "message",
  class: "relative inset-0 z-[90] flex items-center justify-center bg-black/40 text-white backdrop-blur py-1",
  "data-v-inspector": "components/organisms/AppMessage.vue:2:5"
}
const _hoisted_2 = {
  class: "relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-100 backdrop-blur transition-opacity duration-300",
  "data-v-inspector": "components/organisms/AppMessage.vue:4:9"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-sm",
  "data-v-inspector": "components/organisms/AppMessage.vue:6:13"
}
const _hoisted_4 = {
  class: "flex flex-col items-center px-6 pt-8",
  "data-v-inspector": "components/organisms/AppMessage.vue:7:17"
}
const _hoisted_5 = {
  class: "mb-6 text-lg font-semibold",
  "data-v-inspector": "components/organisms/AppMessage.vue:9:21"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppSubmitButton = _resolveComponent("AppSubmitButton")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _createElementVNode("div", _hoisted_5, _toDisplayString($setup.userName), 1 /* TEXT */),
          _cache[0] || (_cache[0] = _createElementVNode("div", {
            class: "mb-8 text-white/70",
            "data-v-inspector": "components/organisms/AppMessage.vue:10:21"
          }, "Thanks for joining Aladia.", -1 /* HOISTED */)),
          _cache[1] || (_cache[1] = _createElementVNode("img", {
            src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
            class: "h-32 w-32 object-cover my-14",
            alt: "Aladia logo",
            "data-v-inspector": "components/organisms/AppMessage.vue:11:21"
          }, null, -1 /* HOISTED */)),
          _createVNode(_component_AppSubmitButton, {
            onClick: $setup.submitCode,
            buttonText: "Enter Marketplace"
          }, null, 8 /* PROPS */, ["onClick"])
        ])
      ])
    ])
  ]))
}

import "/_nuxt/components/organisms/AppMessage.vue?vue&type=style&index=0&scoped=cd4268ac&lang.css"

_sfc_main.__hmrId = "cd4268ac"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-cd4268ac"],['__file',"/home/dawit/projects/current/upwork/test/components/organisms/AppMessage.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLE1BQUssQ0FBRSxFQUFFLFlBQVcsQ0FBRSxFQUFFLElBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ2pELE1BQUssQ0FBRSxlQUFjLENBQUUsSUFBRyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7O0FBRTFELEtBQUssVUFBVTtJQUNYLFVBQVUsRUFBRTtRQUNSLGVBQWM7SUFDbEIsQ0FBQztJQUNELEtBQUssQ0FBQyxFQUFFO1FBQ0osS0FBSSxDQUFFLFNBQVEsQ0FBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLEtBQUksQ0FBRSxRQUFPLENBQUUsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUc7UUFDMUMsS0FBSSxDQUFFLFVBQVMsQ0FBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQUssQ0FBRSxNQUFLLENBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELE1BQUssQ0FBRTtZQUNILFFBQVE7WUFDUixVQUFTO1FBQ2IsQ0FBQztJQUNMO0FBQ0osQ0FBQzs7Ozs7RUF0Q1EsRUFBRSxFQUFDLFNBQVM7RUFDYixLQUFLLEVBQUMsb0dBQW9HO0VBQUMsa0JBQWdCLEVBQUMseUNBQXlDOzs7RUFFakssS0FBSyxFQUFDLG9KQUFvSjtFQUFDLGtCQUFnQixFQUFDLHlDQUF5Qzs7O0VBQ2hOLEtBQUssRUFBQyxrQ0FBa0M7RUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7OztFQUNoRyxLQUFLLEVBQUMsc0NBQXNDO0VBQUMsa0JBQWdCLEVBQUMsMENBQTBDOzs7RUFFcEcsS0FBSyxFQUFDLDRCQUE0QjtFQUFDLGtCQUFnQixFQUFDLDBDQUEwQzs7Ozs7O3dCQVBuSCxvQkFnQk0sT0FoQk4sVUFnQk07SUFkRixvQkFhTSxPQWJOLFVBYU07TUFYRixvQkFVTSxPQVZOLFVBVU07UUFURixvQkFRTSxPQVJOLFVBUU07VUFORixvQkFBd0gsT0FBeEgsVUFBd0gsbUJBQWpCLGVBQVE7b0NBQy9HLG9CQUE2SDtZQUF4SCxLQUFLLEVBQUMsb0JBQW9CO1lBQUMsa0JBQWdCLEVBQUMsMkNBQTJDO2FBQUMsNEJBQTBCO29DQUN2SCxvQkFDcUY7WUFEaEYsR0FBRyxFQUFDLG9EQUFvRDtZQUFDLEtBQUssRUFBQyw4QkFBOEI7WUFDOUYsR0FBRyxFQUFDLGFBQWE7WUFBQyxrQkFBZ0IsRUFBQywyQ0FBMkM7O1VBRWxGLGFBQXdFO1lBQXRELE9BQU8sRUFBRSxpQkFBVTtZQUFFLFVBQVUsRUFBQyxtQkFBbUIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcE1lc3NhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwibWVzc2FnZVwiXG4gICAgICAgIGNsYXNzPVwicmVsYXRpdmUgaW5zZXQtMCB6LVs5MF0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svNDAgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyIHB5LTFcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTWVzc2FnZS52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwicmVsYXRpdmUgZmxleCBoLVs0MHJlbV0gdy1bMjZyZW1dIGZsZXgtY29sIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1ibGFjay81MCBvcGFjaXR5LTEwMCBiYWNrZHJvcC1ibHVyIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTWVzc2FnZS52dWU6NDo5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgei0xMCBoLWZ1bGwgcC01IHRleHQtc21cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTWVzc2FnZS52dWU6NjoxM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC02IHB0LThcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTWVzc2FnZS52dWU6NzoxN1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi02IHRleHQtbGcgZm9udC1zZW1pYm9sZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNZXNzYWdlLnZ1ZTo5OjIxXCI+e3sgdXNlck5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTggdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNZXNzYWdlLnZ1ZToxMDoyMVwiPlRoYW5rcyBmb3Igam9pbmluZyBBbGFkaWEuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wLmFsYWRpYS5pby9fbnV4dC9pbWFnZS5DaFEzYmlXOS5wbmdcIiBjbGFzcz1cImgtMzIgdy0zMiBvYmplY3QtY292ZXIgbXktMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQWxhZGlhIGxvZ29cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTWVzc2FnZS52dWU6MTE6MjFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBcHBTdWJtaXRCdXR0b24gOm9uQ2xpY2s9XCJzdWJtaXRDb2RlXCIgYnV0dG9uVGV4dD1cIkVudGVyIE1hcmtldHBsYWNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tICdAL3N0b3Jlcy91c2VyU3RvcmUnO1xuaW1wb3J0IEFwcFN1Ym1pdEJ1dHRvbiBmcm9tICcuLi9hdG9tcy9BcHBTdWJtaXRCdXR0b24udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQXBwU3VibWl0QnV0dG9uXG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgY29uc3QgdXNlclN0b3JlID0gdXNlVXNlclN0b3JlKCk7XG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlclN0b3JlLmN1cnJlbnRVc2VyLm5hbWVcbiAgICAgICAgY29uc3Qgc3VibWl0Q29kZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXQgYnV0dG9uIGNsaWNrZWQnKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgc3VibWl0Q29kZVxuICAgICAgICB9O1xuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiosXG46YWZ0ZXIsXG46YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuPC9zdHlsZT5cbiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNZXNzYWdlLnZ1ZSJ9