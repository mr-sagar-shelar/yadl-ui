import type { Meta, StoryObj } from "@storybook/react";
import Learn from "../Learn";

const meta: Meta<typeof Learn> = { title: "Azure/General/Learn", component: Learn };

export default meta;
type Story = StoryObj<typeof Learn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
