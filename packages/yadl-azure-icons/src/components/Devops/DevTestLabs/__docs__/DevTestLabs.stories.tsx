import type { Meta, StoryObj } from "@storybook/react";
import DevTestLabs from "../DevTestLabs";

const meta: Meta<typeof DevTestLabs> = { title: "Azure/Devops/DevTestLabs", component: DevTestLabs };

export default meta;
type Story = StoryObj<typeof DevTestLabs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
