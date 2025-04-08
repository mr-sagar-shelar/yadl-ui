import type { Meta, StoryObj } from "@storybook/react";
import AddFiles from "../AddFiles";

const meta: Meta<typeof AddFiles> = { title: "unDraw/AddFiles", component: AddFiles };

export default meta;
type Story = StoryObj<typeof AddFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
