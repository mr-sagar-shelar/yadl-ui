import type { Meta, StoryObj } from "@storybook/react";
import Tags from "../Tags";

const meta: Meta<typeof Tags> = { title: "Azure/General/Tags", component: Tags };

export default meta;
type Story = StoryObj<typeof Tags>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
