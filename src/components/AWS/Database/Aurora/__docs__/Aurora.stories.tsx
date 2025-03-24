import type { Meta, StoryObj } from "@storybook/react";
import Aurora from "../Aurora";

const meta: Meta<typeof Aurora> = { title: "AWS/Database/Aurora", component: Aurora };

export default meta;
type Story = StoryObj<typeof Aurora>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
