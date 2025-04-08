import type { Meta, StoryObj } from "@storybook/react";
import Open3DEngine from "../Open3DEngine";

const meta: Meta<typeof Open3DEngine> = { title: "AWS/Games/Open3DEngine", component: Open3DEngine };

export default meta;
type Story = StoryObj<typeof Open3DEngine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
