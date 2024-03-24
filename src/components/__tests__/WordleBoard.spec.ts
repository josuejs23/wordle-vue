import { mount } from "@vue/test-utils";
import WordleBoard from "../WordleBoard.vue";

describe("WordleBoard", () => {
  test("A victory message appears when the user guess the word", async () => {
    // Arrange
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: "TESTS" } });

    // Act
    const guessInput = wrapper.find("input[type=text]");
    await guessInput.setValue("TESTS");
    await guessInput.trigger("keydown.enter");

    // Assert
    expect(wrapper.text()).contain("You won!");
  });
});
