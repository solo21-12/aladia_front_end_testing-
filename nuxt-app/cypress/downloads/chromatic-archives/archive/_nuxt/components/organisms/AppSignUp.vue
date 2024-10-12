import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/AppSignUp.vue");/* Injection by vite-plugin-vue-inspector Start */
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

import { computed } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413";
import { useUserStore } from "/_nuxt/stores/userStore.ts";
import AppSubmitButton from "/_nuxt/components/atoms/AppSubmitButton.vue";
import AppTextInput from "/_nuxt/components/atoms/AppTextInput.vue";
import AppSocial from "/_nuxt/components/molecules/AppSocial.vue";
import AppWelcome from "/_nuxt/components/molecules/AppWelcome.vue";

const _sfc_main = {
    components: {
        AppSubmitButton,
        AppTextInput,
        AppSocial,
        AppWelcome
    },

    setup(props, { emit }) {
        const userStore = useUserStore();

        const isEmailEntered = computed(() => {
            return !!userStore.currentUser.email;
        });

        const handleSubmit = () => {
            userStore.checkEmailInDatabase();

            if (userStore.existingUser) {
                emit('go-to-sign-in');
            } else {
                emit('go-to-more-details');
            }
        };

        return {
            userStore,
            isEmailEntered,
            handleSubmit
        };
    }
};

import { resolveComponent as _resolveComponent,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  id: "signup",
  class: "relative app-login-form ...",
  "data-v-inspector": "components/organisms/AppSignUp.vue:2:5"
}
const _hoisted_2 = {
  class: "relative flex h-[40rem] w-[26rem] flex-col ...",
  "data-v-inspector": "components/organisms/AppSignUp.vue:3:9"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-13 bg-black/40",
  "data-v-inspector": "components/organisms/AppSignUp.vue:4:13"
}
const _hoisted_4 = {
  class: "pt-8",
  "data-v-inspector": "components/organisms/AppSignUp.vue:5:17"
}
const _hoisted_5 = {
  class: "mb-6 flex flex-col items-center px-4",
  "data-v-inspector": "components/organisms/AppSignUp.vue:8:21"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppWelcome = _resolveComponent("AppWelcome")
  const _component_AppTextInput = _resolveComponent("AppTextInput")
  const _component_AppSubmitButton = _resolveComponent("AppSubmitButton")
  const _component_AppSocial = _resolveComponent("AppSocial")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_AppWelcome),
          _cache[1] || (_cache[1] = _createElementVNode("div", {
            class: "mb-6 text-center",
            "data-v-inspector": "components/organisms/AppSignUp.vue:7:21"
          }, "Enter your email", -1 /* HOISTED */)),
          _createElementVNode("div", _hoisted_5, [
            _createVNode(_component_AppTextInput, {
              placeholder: "Email",
              iconClass: "fa-solid fa-envelope",
              modelValue: $setup.userStore.currentUser.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.userStore.currentUser.email) = $event)),
              required: "",
              "data-testid": "email-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            _createVNode(_component_AppSubmitButton, {
              isDisabled: !$setup.isEmailEntered,
              onClick: $setup.handleSubmit
            }, null, 8 /* PROPS */, ["isDisabled", "onClick"]),
            _createVNode(_component_AppSocial)
          ])
        ])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "237b936a"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/organisms/AppSignUp.vue"]])
//# sourceMappingURL=data:application/json;base64,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UUFBUSxFQUFSLEVBQVE7Y0FBQyxhQUFXLEVBQUMsYUFBYTs7WUFDNUUsYUFBdUU7Y0FBckQsVUFBVSxHQUFHLHFCQUFjO2NBQUcsT0FBSyxFQUFFLG1CQUFZOztZQUNuRSxhQUFhIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBTaWduVXAudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwic2lnbnVwXCIgY2xhc3M9XCJyZWxhdGl2ZSBhcHAtbG9naW4tZm9ybSAuLi5cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwU2lnblVwLnZ1ZToyOjVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGZsZXggaC1bNDByZW1dIHctWzI2cmVtXSBmbGV4LWNvbCAuLi5cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwU2lnblVwLnZ1ZTozOjlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGgtZnVsbCBwLTUgdGV4dC0xMyBiZy1ibGFjay80MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBTaWduVXAudnVlOjQ6MTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBTaWduVXAudnVlOjU6MTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcFdlbGNvbWUgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTYgdGV4dC1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwU2lnblVwLnZ1ZTo3OjIxXCI+RW50ZXIgeW91ciBlbWFpbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcFNpZ25VcC52dWU6ODoyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcFRleHRJbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyU3RvcmUuY3VycmVudFVzZXIuZW1haWxcIiByZXF1aXJlZCBkYXRhLXRlc3RpZD1cImVtYWlsLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBTdWJtaXRCdXR0b24gOmlzRGlzYWJsZWQ9XCIhaXNFbWFpbEVudGVyZWRcIiBAY2xpY2s9XCJoYW5kbGVTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwcFNvY2lhbCAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tICdAL3N0b3Jlcy91c2VyU3RvcmUnO1xuaW1wb3J0IEFwcFN1Ym1pdEJ1dHRvbiBmcm9tICcuLi9hdG9tcy9BcHBTdWJtaXRCdXR0b24udnVlJztcbmltcG9ydCBBcHBUZXh0SW5wdXQgZnJvbSAnLi4vYXRvbXMvQXBwVGV4dElucHV0LnZ1ZSc7XG5pbXBvcnQgQXBwU29jaWFsIGZyb20gJy4uL21vbGVjdWxlcy9BcHBTb2NpYWwudnVlJztcbmltcG9ydCBBcHBXZWxjb21lIGZyb20gJy4uL21vbGVjdWxlcy9BcHBXZWxjb21lLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcFN1Ym1pdEJ1dHRvbixcbiAgICAgICAgQXBwVGV4dElucHV0LFxuICAgICAgICBBcHBTb2NpYWwsXG4gICAgICAgIEFwcFdlbGNvbWVcbiAgICB9LFxuXG4gICAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgICAgIGNvbnN0IHVzZXJTdG9yZSA9IHVzZVVzZXJTdG9yZSgpO1xuXG4gICAgICAgIGNvbnN0IGlzRW1haWxFbnRlcmVkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEhdXNlclN0b3JlLmN1cnJlbnRVc2VyLmVtYWlsO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICB1c2VyU3RvcmUuY2hlY2tFbWFpbEluRGF0YWJhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJTdG9yZS5leGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgICAgICBlbWl0KCdnby10by1zaWduLWluJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVtaXQoJ2dvLXRvLW1vcmUtZGV0YWlscycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1c2VyU3RvcmUsXG4gICAgICAgICAgICBpc0VtYWlsRW50ZXJlZCxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdFxuICAgICAgICB9O1xuICAgIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL29yZ2FuaXNtcy9BcHBTaWduVXAudnVlIn0=