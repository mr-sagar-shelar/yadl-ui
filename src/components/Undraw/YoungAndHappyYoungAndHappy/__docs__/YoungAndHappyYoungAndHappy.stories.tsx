import type { Meta, StoryObj } from "@storybook/react";
import YoungAndHappyYoungAndHappy from "../YoungAndHappyYoungAndHappy";

const meta: Meta<typeof YoungAndHappyYoungAndHappy> = { title: "unDraw/YoungAndHappyYoungAndHappy", component: YoungAndHappyYoungAndHappy };

export default meta;
type Story = StoryObj<typeof YoungAndHappyYoungAndHappy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
