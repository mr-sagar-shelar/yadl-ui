import type { Meta, StoryObj } from "@storybook/react";
import SelectedOptions from "../SelectedOptions";

const meta: Meta<typeof SelectedOptions> = { title: "unDraw/SelectedOptions", component: SelectedOptions };

export default meta;
type Story = StoryObj<typeof SelectedOptions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
