import type { Meta, StoryObj } from "@storybook/react";
import FileCache from "../FileCache";

const meta: Meta<typeof FileCache> = { title: "AWS/Storage/FileCache", component: FileCache };

export default meta;
type Story = StoryObj<typeof FileCache>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
