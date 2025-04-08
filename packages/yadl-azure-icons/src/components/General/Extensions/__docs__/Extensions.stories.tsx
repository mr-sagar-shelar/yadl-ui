import type { Meta, StoryObj } from "@storybook/react";
import Extensions from "../Extensions";

const meta: Meta<typeof Extensions> = { title: "Azure/General/Extensions", component: Extensions };

export default meta;
type Story = StoryObj<typeof Extensions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
