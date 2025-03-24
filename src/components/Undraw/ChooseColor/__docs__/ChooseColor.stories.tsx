import type { Meta, StoryObj } from "@storybook/react";
import ChooseColor from "../ChooseColor";

const meta: Meta<typeof ChooseColor> = { title: "unDraw/ChooseColor", component: ChooseColor };

export default meta;
type Story = StoryObj<typeof ChooseColor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
