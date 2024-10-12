import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/AppMoreInfo.vue");import { default as __nuxt_component_0 } from "/_nuxt/node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@18.19.55_ioredis@5.4.1_magicast@0.3.5_rollup@4._6wqjbqw6dmapnmro6xpkorp354/node_modules/nuxt/dist/app/components/nuxt-link.js?v=8ca91568";
/* Injection by vite-plugin-vue-inspector Start */
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

import { ref, computed } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413";
import { useUserStore } from "/_nuxt/stores/userStore.ts";
import AppBackButton from "/_nuxt/components/atoms/AppBackButton.vue";
import AppTextInput from "/_nuxt/components/atoms/AppTextInput.vue";
import AppFileUploader from "/_nuxt/components/atoms/AppFileUploader.vue";
import AppSubmitButton from "/_nuxt/components/atoms/AppSubmitButton.vue";

const _sfc_main = {
    components: {
        AppBackButton,
        AppTextInput,
        AppFileUploader,
        AppSubmitButton
    },

    setup(props, { emit }) {
        const userStore = useUserStore();
        const isChecked = ref(false);
        const showError = ref(false);

        const isFormValid = computed(() => {
            return userStore.currentUser.name && userStore.currentUser.surname &&
                userStore.currentUser.email && userStore.currentUser.password &&
                userStore.currentUser.confirmPassword && isChecked.value;
        });

        const handleSubmit = () => {
            if (isFormValid.value) {
                userStore.registerUser();
                emit('go-to-code-accepter');
            } else {
                showError.value = true;
            }
        };

        const handleBackClick = () => {
            emit('go-back');
        };

        return {
            userStore,
            handleSubmit,
            handleBackClick,
            isChecked,
            showError,
            isFormValid
        };
    },
    methods: {
        handleFileUpload(file) {
            console.log('Uploaded file:', file);
        },
        toggleCheckbox() {
            this.isChecked = !this.isChecked;
        }
    }
};

import { resolveComponent as _resolveComponent,   createTextVNode as _createTextVNode, openBlock as _openBlock,  createCommentVNode as _createCommentVNode, normalizeClass as _normalizeClass, withCtx as _withCtx, createStaticVNode as _createStaticVNode } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=9eea2413"

const _hoisted_1 = {
  id: "more_info",
  class: "text-sm relative bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/40 backdrop-blur py-1",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:2:5"
}
const _hoisted_2 = {
  class: "relative -mt-20 flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:4:9"
}
const _hoisted_3 = {
  class: "relative z-10 h-full p-5 text-13",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:6:13"
}
const _hoisted_4 = { "data-v-inspector": "components/organisms/AppMoreInfo.vue:7:17" }
const _hoisted_5 = {
  class: "flex flex-col items-center px-4",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:9:21"
}
const _hoisted_6 = {
  class: "mb-4 flex w-full items-end gap-6 px-4",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:10:25"
}
const _hoisted_7 = {
  class: "mb-4 flex items-center gap-2",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:23:25"
}
const _hoisted_8 = {
  key: 0,
  class: "fa-solid fa-check text-sm text-black",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:26:33"
}
const _hoisted_9 = {
  class: "text-xs text-white/70",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:28:29"
}
const _hoisted_10 = {
  key: 0,
  class: "text-red-500 mb-2",
  "data-v-inspector": "components/organisms/AppMoreInfo.vue:49:25"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppBackButton = _resolveComponent("AppBackButton")
  const _component_AppFileUploader = _resolveComponent("AppFileUploader")
  const _component_NuxtLink = __nuxt_component_0
  const _component_AppTextInput = _resolveComponent("AppTextInput")
  const _component_AppSubmitButton = _resolveComponent("AppSubmitButton")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _createVNode(_component_AppBackButton, { onOnClick: $setup.handleBackClick }, null, 8 /* PROPS */, ["onOnClick"]),
          _createElementVNode("div", _hoisted_5, [
            _createElementVNode("div", _hoisted_6, [
              _createVNode(_component_AppFileUploader, {
                onFileUploaded: $options.handleFileUpload,
                defaultImage: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
              }, null, 8 /* PROPS */, ["onFileUploaded"]),
              _cache[6] || (_cache[6] = _createStaticVNode("<div data-v-inspector=\"components/organisms/AppMoreInfo.vue:13:29\"><div class=\"mb-1 text-sm font-semibold\" data-v-inspector=\"components/organisms/AppMoreInfo.vue:14:33\">Nice to meet you,</div><div class=\"text-xs text-white/70\" data-v-inspector=\"components/organisms/AppMoreInfo.vue:15:33\"> Upload a profile picture <br data-v-inspector=\"components/organisms/AppMoreInfo.vue:16:62\"> and complete your <br data-v-inspector=\"components/organisms/AppMoreInfo.vue:17:55\"> presentation </div></div>", 1))
            ]),
            _createElementVNode("div", _hoisted_7, [
              _createElementVNode("div", {
                onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleCheckbox && $options.toggleCheckbox(...args))),
                class: _normalizeClass(['flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all bg-white  ', $setup.isChecked ? 'border-white' : 'border-white/50']),
                "data-v-inspector": "components/organisms/AppMoreInfo.vue:24:29"
              }, [
                ($setup.isChecked)
                  ? (_openBlock(), _createElementBlock("i", _hoisted_8))
                  : _createCommentVNode("v-if", true)
              ], 2 /* CLASS */),
              _createElementVNode("div", _hoisted_9, [
                _cache[9] || (_cache[9] = _createTextVNode(" I accept ")),
                _createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "underline text-white"
                }, {
                  default: _withCtx(() => _cache[7] || (_cache[7] = [
                    _createTextVNode(" Terms & Conditions ")
                  ])),
                  _: 1 /* STABLE */
                }),
                _cache[10] || (_cache[10] = _createTextVNode(" and ")),
                _createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "underline text-white"
                }, {
                  default: _withCtx(() => _cache[8] || (_cache[8] = [
                    _createTextVNode(" Privacy Policy ")
                  ])),
                  _: 1 /* STABLE */
                })
              ])
            ]),
            _cache[12] || (_cache[12] = _createElementVNode("div", {
              class: "mb-4 text-center text-xs",
              "data-v-inspector": "components/organisms/AppMoreInfo.vue:36:25"
            }, "Enter your details", -1 /* HOISTED */)),
            _createVNode(_component_AppTextInput, {
              placeholder: "Name",
              iconClass: "fa-solid fa-user",
              modelValue: $setup.userStore.currentUser.name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.userStore.currentUser.name) = $event)),
              "data-testid": "name-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            _createVNode(_component_AppTextInput, {
              placeholder: "Surname",
              iconClass: "fa-solid fa-user",
              modelValue: $setup.userStore.currentUser.surname,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.userStore.currentUser.surname) = $event)),
              "data-testid": "surname-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            _createVNode(_component_AppTextInput, {
              placeholder: "Email",
              iconClass: "fa-solid fa-envelope",
              modelValue: $setup.userStore.currentUser.email,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.userStore.currentUser.email) = $event)),
              "data-testid": "email-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            _createVNode(_component_AppTextInput, {
              placeholder: "Password",
              type: "password",
              iconClass: "fa-solid fa-key",
              modelValue: $setup.userStore.currentUser.password,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.userStore.currentUser.password) = $event)),
              "data-testid": "password-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            _createVNode(_component_AppTextInput, {
              placeholder: "Confirm Password",
              type: "password",
              iconClass: "fa-solid fa-key",
              modelValue: $setup.userStore.currentUser.confirmPassword,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.userStore.currentUser.confirmPassword) = $event)),
              "data-testid": "confirm-password-input"
            }, null, 8 /* PROPS */, ["modelValue"]),
            ($setup.showError)
              ? (_openBlock(), _createElementBlock("p", _hoisted_10, "Please fill all fields and accept the terms."))
              : _createCommentVNode("v-if", true),
            _createVNode(_component_AppSubmitButton, {
              isDisabled: !$setup.isFormValid,
              onClick: $setup.handleSubmit
            }, null, 8 /* PROPS */, ["isDisabled", "onClick"]),
            _createVNode(_component_NuxtLink, {
              to: "/",
              class: "cursor-pointer text-center text-white/40 text-sm"
            }, {
              default: _withCtx(() => _cache[11] || (_cache[11] = [
                _createTextVNode(" Terms & Conditions ")
              ])),
              _: 1 /* STABLE */
            })
          ])
        ])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "d5c6b267"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/dawit/projects/current/upwork/test/components/organisms/AppMoreInfo.vue"]])
//# sourceMappingURL=data:application/json;base64,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RCxXQUFXLEVBQUMsVUFBVTtjQUFDLElBQUksRUFBQyxVQUFVO2NBQUMsU0FBUyxFQUFDLGlCQUFpQjtjQTNDeEcsWUE0Q3FDLGdCQUFTLENBQUMsV0FBVyxDQUFDLFFBQVE7Y0E1Q25FLDZEQTRDcUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUTtjQUFFLGFBQVcsRUFBQyxnQkFBZ0I7O1lBQ3pFLGFBQzJGO2NBRDdFLFdBQVcsRUFBQyxrQkFBa0I7Y0FBQyxJQUFJLEVBQUMsVUFBVTtjQUFDLFNBQVMsRUFBQyxpQkFBaUI7Y0E3Q2hILFlBOENxQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlO2NBOUMxRSw2REE4Q3FDLGdCQUFTLENBQUMsV0FBVyxDQUFDLGVBQWU7Y0FBRSxhQUFXLEVBQUMsd0JBQXdCOzthQUUvRSxnQkFBUzsrQkFBbEIsb0JBQTRKLEtBQTVKLFdBQTRKLEVBQWhELDhDQUE0QztnQkFoRGhMO1lBa0R3QixhQUFvRTtjQUFsRCxVQUFVLEdBQUcsa0JBQVc7Y0FBRyxPQUFLLEVBQUUsbUJBQVk7O1lBRWhFLGFBRVc7Y0FGRCxFQUFFLEVBQUMsR0FBRztjQUFDLEtBQUssRUFBQyxrREFBa0Q7O2NBcERqRyxrQkFvRGtHLENBRTFFO2dCQXREeEIsaUJBb0RrRyxzQkFFMUU7O2NBdER4QiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwTW9yZUluZm8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwibW9yZV9pbmZvXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHJlbGF0aXZlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHRvcC0wIHotWzkwXSBmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzQwIGJhY2tkcm9wLWJsdXIgcHktMVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6Mjo1XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwicmVsYXRpdmUgLW10LTIwIGZsZXggaC1bNDByZW1dIHctWzI2cmVtXSBmbGV4LWNvbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctYmxhY2svNTAgYmFja2Ryb3AtYmx1ciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjQ6OVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTAgaC1mdWxsIHAtNSB0ZXh0LTEzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcE1vcmVJbmZvLnZ1ZTo2OjEzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjc6MTdcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcEJhY2tCdXR0b24gQG9uQ2xpY2s9XCJoYW5kbGVCYWNrQ2xpY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHgtNFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6OToyMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTQgZmxleCB3LWZ1bGwgaXRlbXMtZW5kIGdhcC02IHB4LTRcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjEwOjI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFwcEZpbGVVcGxvYWRlciBAZmlsZS11cGxvYWRlZD1cImhhbmRsZUZpbGVVcGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2U9XCJodHRwczovL2RldmVsb3AuYWxhZGlhLmlvL19udXh0L2ltYWdlLkNoUTNiaVc5LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjEzOjI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xIHRleHQtc20gZm9udC1zZW1pYm9sZFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6MTQ6MzNcIj5OaWNlIHRvIG1lZXQgeW91LDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC14cyB0ZXh0LXdoaXRlLzcwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcE1vcmVJbmZvLnZ1ZToxNTozM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIGEgcHJvZmlsZSBwaWN0dXJlIDxiciBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjE2OjYyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBjb21wbGV0ZSB5b3VyIDxiciBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjE3OjU1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6MjM6MjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cInRvZ2dsZUNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiWydmbGV4IGgtNCB3LTQgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYm9yZGVyIHB0LTAuNSB0cmFuc2l0aW9uLWFsbCBiZy13aGl0ZSAgJywgaXNDaGVja2VkID8gJ2JvcmRlci13aGl0ZScgOiAnYm9yZGVyLXdoaXRlLzUwJ11cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjI0OjI5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCJpc0NoZWNrZWRcIiBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrIHRleHQtc20gdGV4dC1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6MjY6MzNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWU6Mjg6MjlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBhY2NlcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51eHRMaW5rIHRvPVwiL1wiIGNsYXNzPVwidW5kZXJsaW5lIHRleHQtd2hpdGVcIj4gVGVybXMgJiBDb25kaXRpb25zIDwvTnV4dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnV4dExpbmsgdG89XCIvXCIgY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC13aGl0ZVwiPiBQcml2YWN5IFBvbGljeSA8L051eHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi00IHRleHQtY2VudGVyIHRleHQteHNcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvQXBwTW9yZUluZm8udnVlOjM2OjI1XCI+RW50ZXIgeW91ciBkZXRhaWxzPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJTdG9yZS5jdXJyZW50VXNlci5uYW1lXCIgZGF0YS10ZXN0aWQ9XCJuYW1lLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJTdXJuYW1lXCIgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEtdXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJTdG9yZS5jdXJyZW50VXNlci5zdXJuYW1lXCIgZGF0YS10ZXN0aWQ9XCJzdXJuYW1lLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGljb25DbGFzcz1cImZhLXNvbGlkIGZhLWVudmVsb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlclN0b3JlLmN1cnJlbnRVc2VyLmVtYWlsXCIgZGF0YS10ZXN0aWQ9XCJlbWFpbC1pbnB1dFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwVGV4dElucHV0IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBpY29uQ2xhc3M9XCJmYS1zb2xpZCBmYS1rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyU3RvcmUuY3VycmVudFVzZXIucGFzc3dvcmRcIiBkYXRhLXRlc3RpZD1cInBhc3N3b3JkLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBUZXh0SW5wdXQgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgaWNvbkNsYXNzPVwiZmEtc29saWQgZmEta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlclN0b3JlLmN1cnJlbnRVc2VyLmNvbmZpcm1QYXNzd29yZFwiIGRhdGEtdGVzdGlkPVwiY29uZmlybS1wYXNzd29yZC1pbnB1dFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJzaG93RXJyb3JcIiBjbGFzcz1cInRleHQtcmVkLTUwMCBtYi0yXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL0FwcE1vcmVJbmZvLnZ1ZTo0OToyNVwiPlBsZWFzZSBmaWxsIGFsbCBmaWVsZHMgYW5kIGFjY2VwdCB0aGUgdGVybXMuPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBwU3VibWl0QnV0dG9uIDppc0Rpc2FibGVkPVwiIWlzRm9ybVZhbGlkXCIgQGNsaWNrPVwiaGFuZGxlU3VibWl0XCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE51eHRMaW5rIHRvPVwiL1wiIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZS80MCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXMgJiBDb25kaXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L051eHRMaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyByZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVVzZXJTdG9yZSB9IGZyb20gJ0Avc3RvcmVzL3VzZXJTdG9yZSc7XG5pbXBvcnQgQXBwQmFja0J1dHRvbiBmcm9tICcuLi9hdG9tcy9BcHBCYWNrQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgQXBwVGV4dElucHV0IGZyb20gJy4uL2F0b21zL0FwcFRleHRJbnB1dC52dWUnO1xuaW1wb3J0IEFwcEZpbGVVcGxvYWRlciBmcm9tICcuLi9hdG9tcy9BcHBGaWxlVXBsb2FkZXIudnVlJztcbmltcG9ydCBBcHBTdWJtaXRCdXR0b24gZnJvbSAnLi4vYXRvbXMvQXBwU3VibWl0QnV0dG9uLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFwcEJhY2tCdXR0b24sXG4gICAgICAgIEFwcFRleHRJbnB1dCxcbiAgICAgICAgQXBwRmlsZVVwbG9hZGVyLFxuICAgICAgICBBcHBTdWJtaXRCdXR0b25cbiAgICB9LFxuXG4gICAgc2V0dXAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgICAgIGNvbnN0IHVzZXJTdG9yZSA9IHVzZVVzZXJTdG9yZSgpO1xuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSByZWYoZmFsc2UpO1xuICAgICAgICBjb25zdCBzaG93RXJyb3IgPSByZWYoZmFsc2UpO1xuXG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXJTdG9yZS5jdXJyZW50VXNlci5uYW1lICYmIHVzZXJTdG9yZS5jdXJyZW50VXNlci5zdXJuYW1lICYmXG4gICAgICAgICAgICAgICAgdXNlclN0b3JlLmN1cnJlbnRVc2VyLmVtYWlsICYmIHVzZXJTdG9yZS5jdXJyZW50VXNlci5wYXNzd29yZCAmJlxuICAgICAgICAgICAgICAgIHVzZXJTdG9yZS5jdXJyZW50VXNlci5jb25maXJtUGFzc3dvcmQgJiYgaXNDaGVja2VkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNGb3JtVmFsaWQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB1c2VyU3RvcmUucmVnaXN0ZXJVc2VyKCk7XG4gICAgICAgICAgICAgICAgZW1pdCgnZ28tdG8tY29kZS1hY2NlcHRlcicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZUJhY2tDbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGVtaXQoJ2dvLWJhY2snKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlclN0b3JlLFxuICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxuICAgICAgICAgICAgaGFuZGxlQmFja0NsaWNrLFxuICAgICAgICAgICAgaXNDaGVja2VkLFxuICAgICAgICAgICAgc2hvd0Vycm9yLFxuICAgICAgICAgICAgaXNGb3JtVmFsaWRcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlRmlsZVVwbG9hZChmaWxlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkZWQgZmlsZTonLCBmaWxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlQ2hlY2tib3goKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvZGF3aXQvcHJvamVjdHMvY3VycmVudC91cHdvcmsvdGVzdC9jb21wb25lbnRzL29yZ2FuaXNtcy9BcHBNb3JlSW5mby52dWUifQ==