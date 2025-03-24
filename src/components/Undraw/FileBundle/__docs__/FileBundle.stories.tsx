import type { Meta, StoryObj } from "@storybook/react";
import FileBundle from "../FileBundle";

const meta: Meta<typeof FileBundle> = { title: "unDraw/FileBundle", component: FileBundle };

export default meta;
type Story = StoryObj<typeof FileBundle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
