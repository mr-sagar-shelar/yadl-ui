import type { Meta, StoryObj } from "@storybook/react";
import FileSearching from "../FileSearching";

const meta: Meta<typeof FileSearching> = { title: "unDraw/FileSearching", component: FileSearching };

export default meta;
type Story = StoryObj<typeof FileSearching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
