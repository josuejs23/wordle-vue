import { mount } from "@vue/test-utils";
import WordleBoard from "../WordleBoard.vue";

describe("WordleBoard", () => {
  test("A victory message appears when the user guess the word", async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: "TESTS" } });

    const guessInput = wrapper.find("input[type=text]");
    await guessInput.setValue("TESTS");
    await guessInput.trigger("keydown.enter");

    expect(wrapper.text()).contain("You won!");
  });
});
