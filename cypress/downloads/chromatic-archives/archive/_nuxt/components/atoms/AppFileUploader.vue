import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/atoms/AppFileUploader.vue");/* Injection by vite-plugin-vue-inspector Start */
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
        defaultImage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selectedImage: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.selectedImage = URL.createObjectURL(file);
                this.$emit('file-uploaded', file);
            }
        },
    },
};

import {  openBlock as _openBlock,  createCommentVNode as _createCommentVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  class: "relative group h-24 w-24 rounded transition-alli",
  "data-v-inspector": "components/atoms/AppFileUploader.vue:2:5"
}
const _hoisted_2 = ["src"]
const _hoisted_3 = ["src"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[1] || (_cache[1] = _createElementVNode("div", {
      class: "gradient absolute inset-0 opacity-20 group-hover:border group-hover:border-white",
      "data-v-inspector": "components/atoms/AppFileUploader.vue:3:9"
    }, null, -1 /* HOISTED */)),
    ($data.selectedImage)
      ? (_openBlock(), _createElementBlock("img", {
          key: 0,
          src: $data.selectedImage,
          class: "h-20 w-20 object-cover",
          alt: "Profile Preview",
          "data-v-inspector": "components/atoms/AppFileUploader.vue:5:9"
        }, null, 8 /* PROPS */, _hoisted_2))
      : (_openBlock(), _createElementBlock("img", {
          key: 1,
          src: $props.defaultImage,
          class: "h-20 w-20 object-cover",
          alt: "Default Profile",
          "data-v-inspector": "components/atoms/AppFileUploader.vue:6:9"
        }, null, 8 /* PROPS */, _hoisted_3)),
    _createElementVNode("input", {
      type: "file",
      accept: "image/*",
      class: "absolute inset-0 opacity-0 cursor-pointer",
      onChange: _cache[0] || (_cache[0] = (...args) => ($options.handleFileUpload && $options.handleFileUpload(...args))),
      "data-v-inspector": "components/atoms/AppFileUploader.vue:7:9"
    }, null, 32 /* NEED_HYDRATION */)
  ]))
}


_sfc_main.__hmrId = "4bb65b55"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/atoms/AppFileUploader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFZQSxLQUFLLFVBQVU7SUFDWCxLQUFLLEVBQUU7UUFDSCxZQUFZLEVBQUU7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUU7UUFDSCxNQUFLLENBQUU7WUFDSCxhQUFhLEVBQUUsSUFBSTtRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLGdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUNwQixLQUFJLENBQUUsSUFBRyxDQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEVBQUMsQ0FBRSxDQUFDLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsYUFBWSxDQUFFLEVBQUUsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDckM7UUFDSixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUM7Ozs7O0VBaENRLEtBQUssRUFBQyxrREFBb0Q7RUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7O21CQUQvSDttQkFBQTs7O3dCQUNJLG9CQU9NLE9BUE4sVUFPTTs4QkFORixvQkFDTTtNQURELEtBQUssRUFBQyxrRkFBbUY7TUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7O0tBRS9JLG1CQUFhO3VCQUF4QixvQkFBa0s7VUFKMUs7VUFJbUMsR0FBRyxFQUFFLG1CQUFhO1VBQUUsS0FBSyxFQUFDLHdCQUF3QjtVQUFDLEdBQUcsRUFBQyxpQkFBaUI7VUFBQyxrQkFBZ0IsRUFBQywwQ0FBMEM7Z0NBSnZLO3VCQUtRLG9CQUFtSjtVQUwzSjtVQUtxQixHQUFHLEVBQUUsbUJBQVk7VUFBRSxLQUFLLEVBQUMsd0JBQXdCO1VBQUMsR0FBRyxFQUFDLGlCQUFpQjtVQUFDLGtCQUFnQixFQUFDLDBDQUEwQztnQ0FMeEo7SUFNUSxvQkFDNkY7TUFEdEYsSUFBSSxFQUFDLE1BQU07TUFBQyxNQUFNLEVBQUMsU0FBUztNQUFDLEtBQUssRUFBQywyQ0FBMkM7TUFDaEYsUUFBTSwwQ0FBRSwrREFBZ0I7TUFBRSxrQkFBZ0IsRUFBQywwQ0FBMEMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcEZpbGVVcGxvYWRlci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSBncm91cCAgaC0yNCB3LTI0IHJvdW5kZWQgIHRyYW5zaXRpb24tYWxsaVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcEZpbGVVcGxvYWRlci52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMjAgZ3JvdXAtaG92ZXI6Ym9yZGVyIGdyb3VwLWhvdmVyOmJvcmRlci13aGl0ZSBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9hdG9tcy9BcHBGaWxlVXBsb2FkZXIudnVlOjM6OVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyB2LWlmPVwic2VsZWN0ZWRJbWFnZVwiIDpzcmM9XCJzZWxlY3RlZEltYWdlXCIgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvdmVyXCIgYWx0PVwiUHJvZmlsZSBQcmV2aWV3XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwRmlsZVVwbG9hZGVyLnZ1ZTo1OjlcIiAvPlxuICAgICAgICA8aW1nIHYtZWxzZSA6c3JjPVwiZGVmYXVsdEltYWdlXCIgY2xhc3M9XCJoLTIwIHctMjAgb2JqZWN0LWNvdmVyXCIgYWx0PVwiRGVmYXVsdCBQcm9maWxlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvYXRvbXMvQXBwRmlsZVVwbG9hZGVyLnZ1ZTo2OjlcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9XCJpbWFnZS8qXCIgY2xhc3M9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiaGFuZGxlRmlsZVVwbG9hZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL2F0b21zL0FwcEZpbGVVcGxvYWRlci52dWU6Nzo5XCIgLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgZGVmYXVsdEltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVGaWxlVXBsb2FkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZpbGUtdXBsb2FkZWQnLCBmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9kYXdpdC9wcm9qZWN0cy9jdXJyZW50L3Vwd29yay90ZXN0L2NvbXBvbmVudHMvYXRvbXMvQXBwRmlsZVVwbG9hZGVyLnZ1ZSJ9