import type { Meta, StoryObj } from "@storybook/react";
import Wickr from "../Wickr";

const meta: Meta<typeof Wickr> = { title: "AWS/BusinessApplications/Wickr", component: Wickr };

export default meta;
type Story = StoryObj<typeof Wickr>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
