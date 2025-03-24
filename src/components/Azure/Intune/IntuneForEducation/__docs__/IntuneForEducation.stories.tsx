import type { Meta, StoryObj } from "@storybook/react";
import IntuneForEducation from "../IntuneForEducation";

const meta: Meta<typeof IntuneForEducation> = { title: "Azure/Intune/IntuneForEducation", component: IntuneForEducation };

export default meta;
type Story = StoryObj<typeof IntuneForEducation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
