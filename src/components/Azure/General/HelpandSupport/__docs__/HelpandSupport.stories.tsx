import type { Meta, StoryObj } from "@storybook/react";
import HelpandSupport from "../HelpandSupport";

const meta: Meta<typeof HelpandSupport> = { title: "Azure/General/HelpandSupport", component: HelpandSupport };

export default meta;
type Story = StoryObj<typeof HelpandSupport>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
