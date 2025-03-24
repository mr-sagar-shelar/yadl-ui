import type { Meta, StoryObj } from "@storybook/react";
import SelectedBox from "../SelectedBox";

const meta: Meta<typeof SelectedBox> = { title: "unDraw/SelectedBox", component: SelectedBox };

export default meta;
type Story = StoryObj<typeof SelectedBox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
