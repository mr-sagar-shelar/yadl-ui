import type { Meta, StoryObj } from "@storybook/react";
import Bug from "../Bug";

const meta: Meta<typeof Bug> = { title: "Azure/General/Bug", component: Bug };

export default meta;
type Story = StoryObj<typeof Bug>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
