import login from "./login.vue";
import {shallowMount} from "@vue/test-utils"

it("Сохраняет структуру", () => {
    const component = shallowMount(login);
    expect(component.element).toMatchSnapshot();
});

it("Содержит кнопку Авторизоваться", () => {
    const wrapper = shallowMount(login);
    
    const loginBtn = wrapper.find({ ref: 'loginBtn' })
    console.log(loginBtn.html());
    expect(loginBtn).toBeTruthy();
});