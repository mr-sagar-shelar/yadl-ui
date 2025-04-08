import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "../DropdownMenu";

const meta: Meta<typeof DropdownMenu> = { title: "unDraw/DropdownMenu", component: DropdownMenu };

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
