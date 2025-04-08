import type { Meta, StoryObj } from "@storybook/react";
import JustSaying from "../JustSaying";

const meta: Meta<typeof JustSaying> = { title: "unDraw/JustSaying", component: JustSaying };

export default meta;
type Story = StoryObj<typeof JustSaying>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
