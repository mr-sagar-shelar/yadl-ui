import type { Meta, StoryObj } from "@storybook/react";
import ButtonStyle from "../ButtonStyle";

const meta: Meta<typeof ButtonStyle> = { title: "unDraw/ButtonStyle", component: ButtonStyle };

export default meta;
type Story = StoryObj<typeof ButtonStyle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
