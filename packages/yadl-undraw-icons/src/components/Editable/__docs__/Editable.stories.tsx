import type { Meta, StoryObj } from "@storybook/react";
import Editable from "../Editable";

const meta: Meta<typeof Editable> = { title: "unDraw/Editable", component: Editable };

export default meta;
type Story = StoryObj<typeof Editable>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
