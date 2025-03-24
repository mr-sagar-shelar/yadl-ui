import type { Meta, StoryObj } from "@storybook/react";
import AskMeAnything from "../AskMeAnything";

const meta: Meta<typeof AskMeAnything> = { title: "unDraw/AskMeAnything", component: AskMeAnything };

export default meta;
type Story = StoryObj<typeof AskMeAnything>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
