import type { Meta, StoryObj } from "@storybook/react";
import Happy from "../Happy";

const meta: Meta<typeof Happy> = { title: "unDraw/Happy", component: Happy };

export default meta;
type Story = StoryObj<typeof Happy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
