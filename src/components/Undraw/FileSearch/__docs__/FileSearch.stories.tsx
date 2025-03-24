import type { Meta, StoryObj } from "@storybook/react";
import FileSearch from "../FileSearch";

const meta: Meta<typeof FileSearch> = { title: "unDraw/FileSearch", component: FileSearch };

export default meta;
type Story = StoryObj<typeof FileSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
